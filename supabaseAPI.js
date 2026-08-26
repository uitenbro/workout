// Supabase authentication and workout data API
var supabaseClient = null;
var supabaseSession = null;
var supabaseInitializationChecked = false;
var supabaseOutboxDatabase = null;
var supabaseOutboxReady = null;
var supabaseSyncInProgress = false;
var supabaseFlushRequested = false;
var supabaseLastSyncError = null;
var supabaseAuthEventsBound = false;
var suppressSupabaseMirror = false;

function getSupabaseRedirectUrl() {
    return window.location.origin + window.location.pathname;
}

function initializeSupabaseStorage() {
    if (!isSupabaseConfigured() || !window.supabase) {
        return false;
    }
    supabaseClient = window.supabase.createClient(
        supabaseConfig.url,
        supabaseConfig.anonKey,
        {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
                detectSessionInUrl: true
            }
        }
    );
    supabaseClient.auth.onAuthStateChange(function (event, session) {
        supabaseSession = session;
        console.log("Supabase auth state:", event);
        if (session) {
            flushSupabaseOutbox().then(function () {
                return loadNormalizedMetricCache();
            }).catch(function (error) {
                console.error("Normalized metric load error:", error);
            });
        }
    });
    if (!supabaseAuthEventsBound) {
        window.addEventListener('online', flushSupabaseOutbox);
        supabaseAuthEventsBound = true;
    }
    supabaseClient.auth.getSession().then(function (result) {
        if (result.data && result.data.session) {
            supabaseSession = result.data.session;
            loadNormalizedMetricCache().catch(function (error) {
                console.error("Normalized metric load error:", error);
            });
        }
    });
    return true;
}

async function signInWithGoogle() {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }

    var result = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: getSupabaseRedirectUrl() }
    });
    if (result.error) {
        throw result.error;
    }
}

async function sendMagicLink(email) {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }

    var redirectUrl = getSupabaseRedirectUrl();
    console.log("Supabase magic-link redirect:", redirectUrl);
    var result = await supabaseClient.auth.signInWithOtp({
        email: email,
        options: { emailRedirectTo: redirectUrl }
    });
    if (result.error) {
        throw result.error;
    }
}

async function signOutSupabase() {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }

    var result = await supabaseClient.auth.signOut();
    if (result.error) {
        throw result.error;
    }
}

async function getSupabaseUser() {
    if (!supabaseClient) {
        return null;
    }

    var result = await supabaseClient.auth.getSession();
    if (result.error) {
        throw result.error;
    }
    return result.data.session ? result.data.session.user : null;
}

async function loadSupabaseWorkoutData() {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }

    var result = await supabaseClient
        .from('workout_data')
        .select('data, schema_version, updated_at')
        .maybeSingle();

    if (result.error) {
        throw result.error;
    }
    return result.data;
}

async function reconcileGoogleDriveWorkoutData(driveData) {
    try {
        if (!supabaseClient) {
            return {data: driveData, source: "drive", mirror: false};
        }

        var user = await getSupabaseUser();
        if (!user) {
            return {data: driveData, source: "drive", mirror: false};
        }

        var remoteData = await loadSupabaseWorkoutData();
        if (!remoteData) {
            return {data: driveData, source: "drive", mirror: true};
        }
        if (!validateJsonData(remoteData.data) || JSON.stringify(driveData) == JSON.stringify(remoteData.data)) {
            return {data: driveData, source: "drive", mirror: false};
        }

        console.groupCollapsed("Google Drive / Supabase data difference");
        console.log("Google Drive data:", driveData);
        console.log("Supabase data:", remoteData.data);
        console.groupEnd();

        var choice = window.prompt(
            "Google Drive and Supabase contain different workout data. Type drive to use Google Drive, supabase to use Supabase, or cancel to leave both unchanged.",
            "drive"
        );
        if (!choice || choice.toLowerCase() == "cancel") {
            return {data: null, source: "cancel", mirror: false};
        }
        if (choice.toLowerCase() == "supabase") {
            return {data: remoteData.data, source: "supabase", mirror: false};
        }
        if (choice.toLowerCase() == "drive") {
            return {data: driveData, source: "drive", mirror: true};
        }
        alert("No workout data was changed. Type drive or supabase next time.");
        return {data: null, source: "cancel", mirror: false};
    } catch (error) {
        console.error("Supabase comparison error:", error);
        return {data: driveData, source: "drive", mirror: false};
    }
}

function applyGoogleReadData(data) {
    suppressSupabaseMirror = true;
    try {
        Object.assign(syncData, data);
        updateStoredData(localStorageName, syncData);
    } finally {
        suppressSupabaseMirror = false;
    }
}

async function saveSupabaseWorkoutData(data, schemaVersion = 1) {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }

    var userResult = await supabaseClient.auth.getUser();
    if (userResult.error) {
        throw userResult.error;
    }
    if (!userResult.data.user) {
        throw new Error('A signed-in user is required');
    }

    var result = await supabaseClient
        .from('workout_data')
        .upsert({
            user_id: userResult.data.user.id,
            schema_version: schemaVersion,
            data: data
        })
        .select('data, schema_version, updated_at')
        .single();

    if (result.error) {
        throw result.error;
    }
    return result.data;
}

function openSupabaseOutbox() {
    if (supabaseOutboxReady) {
        return supabaseOutboxReady;
    }
    supabaseOutboxReady = new Promise(function (resolve, reject) {
        var request = indexedDB.open('workoutSupabase', 2);
        request.onupgradeneeded = function () {
            var database = request.result;
            if (!database.objectStoreNames.contains('outbox')) {
                database.createObjectStore('outbox', {keyPath: 'id', autoIncrement: true});
            }
            if (!database.objectStoreNames.contains('normalizedCache')) {
                database.createObjectStore('normalizedCache', {keyPath: 'key'});
            }
        };
        request.onsuccess = function () {
            supabaseOutboxDatabase = request.result;
            resolve(supabaseOutboxDatabase);
        };
        request.onerror = function () {
            reject(request.error);
        };
    });
    return supabaseOutboxReady;
}

function updateSupabaseSyncStatus() {
    openSupabaseOutbox().then(function (database) {
        var request = database.transaction('outbox', 'readonly').objectStore('outbox').count();
        request.onsuccess = function () {
            var status = document.getElementById('syncStatus');
            if (!status) {
                return;
            }
            if (!navigator.onLine) {
                status.textContent = "Offline";
            }
            else if (supabaseLastSyncError) {
                status.textContent = "Error";
            }
            else if (request.result > 0) {
                status.textContent = "Pending";
            }
            else {
                status.textContent = "Synced";
            }
        };
    }).catch(function () {
        var status = document.getElementById('syncStatus');
        if (!status) {
            return;
        }
        status.textContent = "???";
    });
}

function addSupabaseOutboxRecord(record) {
    return openSupabaseOutbox().then(function (database) {
        return new Promise(function (resolve, reject) {
            var request = database.transaction('outbox', 'readwrite')
                .objectStore('outbox').add(record);
            request.onsuccess = resolve;
            request.onerror = function () { reject(request.error); };
        });
    });
}

function getSupabaseOutboxRecords() {
    return openSupabaseOutbox().then(function (database) {
        return new Promise(function (resolve, reject) {
            var request = database.transaction('outbox', 'readonly')
                .objectStore('outbox').getAll();
            request.onsuccess = function () {
                resolve(request.result.sort(function (a, b) { return a.createdAt - b.createdAt; }));
            };
            request.onerror = function () { reject(request.error); };
        });
    });
}

function removeSupabaseOutboxRecord(id) {
    return openSupabaseOutbox().then(function (database) {
        return new Promise(function (resolve, reject) {
            var request = database.transaction('outbox', 'readwrite').objectStore('outbox').delete(id);
            request.onsuccess = resolve;
            request.onerror = function () { reject(request.error); };
        });
    });
}

function queueSupabaseWorkoutSave(data) {
    var dataCopy = JSON.parse(JSON.stringify(data));
    addSupabaseOutboxRecord({
        data: dataCopy,
        accountId: supabaseSession ? supabaseSession.user.id : null,
        createdAt: Date.now(),
        attempts: 0,
        lastError: null
    }).then(function () {
        updateSupabaseSyncStatus();
        return flushSupabaseOutbox();
    }).then(function () {
        updateSupabaseSyncStatus();
    }).catch(function (error) {
        supabaseLastSyncError = error.message;
        updateSupabaseSyncStatus();
        console.error("Supabase outbox error:", error);
    });
}

async function flushSupabaseOutbox() {
    if (supabaseSyncInProgress) {
        supabaseFlushRequested = true;
        updateSupabaseSyncStatus();
        return;
    }
    if (!supabaseClient || !navigator.onLine) {
        updateSupabaseSyncStatus();
        return;
    }

    var user = await getSupabaseUser();
    if (!user) {
        updateSupabaseSyncStatus();
        return;
    }

    var records = await getSupabaseOutboxRecords();
    var unassigned = records.filter(function (record) { return !record.accountId; });
    if (unassigned.length) {
        var choice = window.prompt(
            "There are " + unassigned.length + " pending changes made while signed out. Type upload to associate them with this account, discard to remove them, or cancel to keep them locally.",
            "cancel"
        );
        if (!choice || choice.toLowerCase() == "cancel") {
            updateSupabaseSyncStatus();
            return;
        }
        if (choice.toLowerCase() == "discard") {
            for (var unassignedRecord of unassigned) {
                await removeSupabaseOutboxRecord(unassignedRecord.id);
            }
            updateSupabaseSyncStatus();
            return;
        }
        if (choice.toLowerCase() != "upload") {
            updateSupabaseSyncStatus();
            return;
        }
        unassigned.forEach(function (record) { record.accountId = user.id; });
    }

    supabaseSyncInProgress = true;
    supabaseLastSyncError = null;
    try {
        for (var record of records) {
            if (record.accountId != user.id) {
                continue;
            }
            if (record.kind == 'normalized_metric') {
                var metricResult = await supabaseClient.rpc('append_exercise_metric', {
                    p_id: record.payload.id,
                    p_exercise_id: record.payload.exercise_id,
                    p_metric_date: record.payload.metric_date,
                    p_recorded_at: record.payload.recorded_at,
                    p_equivalent_max: record.payload.equivalent_max,
                    p_tonnage: record.payload.tonnage,
                    p_mutation_id: record.payload.mutation_id
                });
                if (metricResult.error) {
                    throw metricResult.error;
                }
            }
            else if (record.kind == 'normalized_exercise_state') {
                var stateResult = await supabaseClient
                    .from('exercise_state')
                    .upsert(record.payload, {onConflict: 'exercise_id', ignoreDuplicates: false})
                    .select('exercise_id, rpe_input, tonnage_input, updated_at')
                    .single();
                if (stateResult.error) {
                    throw stateResult.error;
                }
                console.log("Normalized exercise state synced:", stateResult.data.exercise_id);
            }
            else if (record.kind == 'normalized_exercise') {
                var exerciseResult = await supabaseClient
                    .from('exercises')
                    .upsert(record.payload, {onConflict: 'user_id,exercise_key'});
                if (exerciseResult.error) {
                    throw exerciseResult.error;
                }
            }
            else if (record.kind == 'normalized_workout_exercise') {
                var placementResult = await supabaseClient
                    .from('workout_exercises')
                    .upsert(record.payload, {onConflict: 'id'});
                if (placementResult.error) {
                    throw placementResult.error;
                }
            }
            else if (record.kind == 'normalized_prescribed_set') {
                var setResult = await supabaseClient
                    .from('prescribed_sets')
                    .upsert(record.payload, {onConflict: 'id'});
                if (setResult.error) {
                    throw setResult.error;
                }
            }
            else if (record.kind == 'normalized_workout_progress') {
                var progressResult = await supabaseClient
                    .from('workouts')
                    .update({current_day: record.payload.current_day, updated_at: record.payload.updated_at})
                    .eq('id', record.payload.id);
                if (progressResult.error) {
                    throw progressResult.error;
                }
            }
            else if (record.kind == 'normalized_active_workout') {
                var activeResult = await supabaseClient
                    .from('user_preferences')
                    .upsert(record.payload, {onConflict: 'user_id'});
                if (activeResult.error) {
                    throw activeResult.error;
                }
            }
            else {
                await saveSupabaseWorkoutData(record.data, 1);
            }
            await removeSupabaseOutboxRecord(record.id);
        }
    } catch (error) {
        supabaseLastSyncError = error.message;
        console.error("Supabase save error:", error);
    } finally {
        supabaseSyncInProgress = false;
        updateSupabaseSyncStatus();
        if (supabaseFlushRequested) {
            supabaseFlushRequested = false;
            flushSupabaseOutbox();
        }
    }
}

async function discardSupabaseOutbox() {
    var records = await getSupabaseOutboxRecords();
    for (var record of records) {
        await removeSupabaseOutboxRecord(record.id);
    }
    supabaseLastSyncError = null;
    updateSupabaseSyncStatus();
}

function displaySyncDetails() {
    displaySupabaseOptions();
}

function discardPendingSupabaseChanges() {
    if (!window.confirm("Discard all pending changes that have not reached Supabase?")) {
        return;
    }
    discardSupabaseOutbox().then(function () {
        alert("Pending changes discarded.");
        displaySyncDetails();
    }).catch(function (error) {
        alert("Unable to discard pending changes\n" + error.message);
    });
}

async function cleanupSupabaseRedundantMetrics() {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }
    if (!navigator.onLine) {
        throw new Error('An internet connection is required');
    }

    var user = await getSupabaseUser();
    if (!user) {
        throw new Error('A signed-in user is required');
    }

    var pendingRecords = await getSupabaseOutboxRecords();
    if (pendingRecords.length) {
        throw new Error('Sync pending changes before cleaning up history');
    }

    var result = await supabaseClient.rpc('delete_redundant_exercise_metrics');
    if (result.error) {
        throw result.error;
    }
    await loadNormalizedMetricCache();
    return result.data;
}

function cleanUpSupabaseHistory() {
    if (!window.confirm('Delete redundant max and tonnage entries, keeping the latest entry for each exercise and day?')) {
        return;
    }

    cleanupSupabaseRedundantMetrics().then(function (deletedCount) {
        alert('Redundant exercise history was deleted from Supabase.' +
            (typeof deletedCount == 'number' ? ' Rows removed: ' + deletedCount + '.' : ''));
        displaySupabaseOptions();
    }).catch(function (error) {
        alert('Unable to clean up exercise history\n' + error.message);
    });
}

async function deleteSupabaseWorkoutData() {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }

    var userResult = await supabaseClient.auth.getUser();
    if (userResult.error) {
        throw userResult.error;
    }
    if (!userResult.data.user) {
        throw new Error('A signed-in user is required');
    }

    var result = await supabaseClient
        .from('workout_data')
        .delete()
        .eq('user_id', userResult.data.user.id);

    if (result.error) {
        throw result.error;
    }
}

async function showSupabaseStatus() {
    try {
        var user = await getSupabaseUser();
        if (user) {
            alert("Signed in as " + (user.email || user.id));
        }
        else {
            alert("Not signed in");
        }
    } catch (error) {
        alert("Supabase error\n" + error.message);
    }
}

function signInSupabaseGoogle() {
    signInWithGoogle().catch(function (error) {
        alert("Supabase sign-in error\n" + error.message);
    });
}

function signInSupabaseEmail() {
    var email = prompt("Email address for a sign-in link:");
    if (!email) {
        return;
    }
    sendMagicLink(email).then(function () {
        alert("Check your email for the sign-in link.");
    }).catch(function (error) {
        alert("Supabase sign-in error\n" + error.message);
    });
}

function signOutSupabaseUser() {
    signOutSupabase().then(function () {
        alert("Signed out of Supabase.");
    }).catch(function (error) {
        alert("Supabase sign-out error\n" + error.message);
    });
}

async function uploadCurrentWorkoutData() {
    try {
        var user = await getSupabaseUser();
        if (!user) {
            alert("Sign in to Supabase before uploading workout data.");
            return;
        }

        var existingData = await loadSupabaseWorkoutData();
        if (existingData && !window.confirm("Supabase already has workout data. Replace it with this browser's data?")) {
            return;
        }

        await saveSupabaseWorkoutData(workoutData, 1);
        alert("Workout data uploaded to Supabase.");
    } catch (error) {
        alert("Supabase upload error\n" + error.message);
    }
}

async function downloadSupabaseWorkoutData() {
    try {
        var user = await getSupabaseUser();
        if (!user) {
            alert("Sign in to Supabase before downloading workout data.");
            return;
        }

        var remoteData = await loadSupabaseWorkoutData();
        if (!remoteData || !validateJsonData(remoteData.data)) {
            alert("No valid workout data was found in Supabase.");
            return;
        }
        if (!window.confirm("Replace this browser's workout data with the Supabase copy?")) {
            return;
        }

        workoutData = remoteData.data;
        syncData = workoutData;
        selectedWorkoutData = workoutData.workouts[workoutData.selectedWorkout];
        backupStoredWorkoutData();
        appStorage.set('workoutData', JSON.stringify(workoutData, null, 1));
        printAll();
        alert("Workout data downloaded from Supabase.");
    } catch (error) {
        alert("Supabase download error\n" + error.message);
    }
}

function displaySupabaseOptions() {
    var supabaseOptions = document.createElement('div');
    supabaseOptions.id = "options";
    supabaseOptions.className = "optionpanel";
    supabaseOptions.style.display = "block";

    var cancel = document.createElement('a');
    var img = document.createElement('img');
    img.src = "images/cancel.png";
    cancel.appendChild(img);
    cancel.href = "javascript:closeOptions();";

    var h2 = document.createElement('h2');
    h2.appendChild(cancel);
    h2.appendChild(document.createTextNode("Supabase"));
    supabaseOptions.appendChild(h2);

    var statusList = document.createElement('ul');

    var apiStatus = document.createElement('li');
    var apiIndicator = document.createElement('a');
    apiIndicator.className = "right";
    apiIndicator.appendChild(document.createTextNode(supabaseClient ? "\u2713" : "\u20E0"));
    apiStatus.appendChild(apiIndicator);
    apiStatus.appendChild(document.createTextNode("Supabase API Loaded"));
    statusList.appendChild(apiStatus);

    var authStatus = document.createElement('li');
    var authIndicator = document.createElement('a');
    authIndicator.className = "right";
    authIndicator.appendChild(document.createTextNode("\u20E0"));
    authStatus.appendChild(authIndicator);
    var authLabel = document.createTextNode("Checking sign-in status");
    authStatus.appendChild(authLabel);
    statusList.appendChild(authStatus);

    var userStatus = document.createElement('li');
    var userLabel = document.createTextNode("Signed-in user: checking");
    userStatus.appendChild(userLabel);
    statusList.appendChild(userStatus);

    var connectionStatus = document.createElement('li');
    connectionStatus.appendChild(document.createTextNode(navigator.onLine ? "Connection: online" : "Connection: offline"));
    statusList.appendChild(connectionStatus);

    var pendingStatus = document.createElement('li');
    var pendingLabel = document.createTextNode("Pending changes: checking");
    pendingStatus.appendChild(pendingLabel);
    statusList.appendChild(pendingStatus);

    var errorStatus = document.createElement('li');
    errorStatus.appendChild(document.createTextNode("Last error: " + (supabaseLastSyncError || "none")));
    statusList.appendChild(errorStatus);

    supabaseOptions.appendChild(statusList);

    getSupabaseUser().then(function (user) {
        authIndicator.replaceChildren(document.createTextNode(user ? "\u2713" : "\u20E0"));
        authLabel.textContent = user ? "Signed In / Authorized" : "Not Signed In";
        userLabel.textContent = "Signed-in user: " + (user ? (user.email || user.id) : "none");
    }).catch(function () {
        authIndicator.replaceChildren(document.createTextNode("\u20E0"));
        authLabel.textContent = "Sign-in status unavailable";
        userLabel.textContent = "Signed-in user: unavailable";
    });

    getSupabaseOutboxRecords().then(function (records) {
        pendingLabel.textContent = "Pending changes: " + records.length;
    }).catch(function () {
        pendingLabel.textContent = "Pending changes: unavailable";
    });

    var buttonContainer = document.createElement('p');
    var actions = [
        ["Sign In", "signInSupabaseEmail();"],
        ["Sign Out", "signOutSupabaseUser();"],
        ["Upload Current Data", "uploadCurrentWorkoutData();"],
        ["Download Remote Data", "downloadSupabaseWorkoutData();"],
        ["Retry Sync", "flushSupabaseOutbox();displaySupabaseOptions();"],
        ["Discard Pending", "discardPendingSupabaseChanges();"],
        ["Import Legacy Data", "migrateLegacyDataFromPanel();"],
        ["Clean Up History", "cleanUpSupabaseHistory();"]
    ];

    actions.forEach(function (action) {
        var button = document.createElement('a');
        button.className = "black button";
        button.href = "javascript:" + action[1];
        button.appendChild(document.createTextNode(action[0]));
        buttonContainer.appendChild(button);
    });

    supabaseOptions.appendChild(buttonContainer);
    document.getElementById('options').replaceWith(supabaseOptions);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);
}
