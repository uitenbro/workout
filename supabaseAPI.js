// Supabase authentication and workout data API
var supabaseClient = null;
var supabaseSession = null;

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
        updateStoredData('workoutData', workoutData);
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
