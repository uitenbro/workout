// Supabase authentication and workout data API
var supabaseClient = null;
var supabaseSession = null;
var supabaseInitializationChecked = false;
var supabaseOutboxDatabase = null;
var supabaseOutboxReady = null;
var supabaseSyncInProgress = false;
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
        if (event == "SIGNED_IN") {
            flushSupabaseOutbox();
        }
    });
    if (!supabaseAuthEventsBound) {
        window.addEventListener('online', flushSupabaseOutbox);
        supabaseAuthEventsBound = true;
    }
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
        var request = indexedDB.open('workoutSupabase', 1);
        request.onupgradeneeded = function () {
            request.result.createObjectStore('outbox', {keyPath: 'id', autoIncrement: true});
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
    if (supabaseSyncInProgress || !supabaseClient || !navigator.onLine) {
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
            await saveSupabaseWorkoutData(record.data, 1);
            await removeSupabaseOutboxRecord(record.id);
        }
    } catch (error) {
        supabaseLastSyncError = error.message;
        console.error("Supabase save error:", error);
    } finally {
        supabaseSyncInProgress = false;
        updateSupabaseSyncStatus();
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

async function displaySyncDetails() {
    var details = document.createElement('div');
    details.id = "options";
    details.className = "optionpanel";
    details.style.display = "block";

    var cancel = document.createElement('a');
    var img = document.createElement('img');
    img.src = "images/cancel.png";
    cancel.appendChild(img);
    cancel.href = "javascript:closeOptions();";

    var h2 = document.createElement('h2');
    h2.appendChild(cancel);
    h2.appendChild(document.createTextNode("Sync Details"));
    details.appendChild(h2);

    var list = document.createElement('ul');
    var pending = document.createElement('li');
    pending.appendChild(document.createTextNode("Pending changes: checking"));
    list.appendChild(pending);
    var state = document.createElement('li');
    state.appendChild(document.createTextNode(navigator.onLine ? "Connection: online" : "Connection: offline"));
    list.appendChild(state);
    var error = document.createElement('li');
    error.appendChild(document.createTextNode("Last error: " + (supabaseLastSyncError || "none")));
    list.appendChild(error);
    details.appendChild(list);

    var buttons = document.createElement('p');
    var retry = document.createElement('a');
    retry.className = "black button";
    retry.href = "javascript:flushSupabaseOutbox();displaySyncDetails();";
    retry.appendChild(document.createTextNode("Retry Sync"));
    buttons.appendChild(retry);

    var discard = document.createElement('a');
    discard.className = "black button";
    discard.href = "javascript:discardPendingSupabaseChanges();";
    discard.appendChild(document.createTextNode("Discard Pending"));
    buttons.appendChild(discard);
    details.appendChild(buttons);

    document.getElementById('options').replaceWith(details);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);

    var records = await getSupabaseOutboxRecords();
    pending.firstChild.textContent = "Pending changes: " + records.length;
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

    supabaseOptions.appendChild(statusList);

    getSupabaseUser().then(function (user) {
        authIndicator.replaceChildren(document.createTextNode(user ? "\u2713" : "\u20E0"));
        authLabel.textContent = user ? "Signed In / Authorized" : "Not Signed In";
    }).catch(function () {
        authIndicator.replaceChildren(document.createTextNode("\u20E0"));
        authLabel.textContent = "Sign-in status unavailable";
    });

    var buttonContainer = document.createElement('p');
    var actions = [
        ["Sign In", "signInSupabaseEmail();"],
        ["Sign Out", "signOutSupabaseUser();"],
        ["Upload Current Data", "uploadCurrentWorkoutData();"],
        ["Download Remote Data", "downloadSupabaseWorkoutData();"]
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
