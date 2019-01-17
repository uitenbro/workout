function displayGoogleDriveOptions() {
    //console.log(workoutData)
    //var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    //console.log(dayData)

    googleOptions = document.createElement('div')
    googleOptions.id = "options";
    googleOptions.className = "optionpanel";
    googleOptions.style.display = "block"

    // Cancel
    var cancel = document.createElement('a');
    var img = document.createElement('img');
    img.src = "images/cancel.png";
    cancel.appendChild(img);
    cancel.href = "javascript:closeOptions();";
    //weightUpdate.appendChild(cancel);

    var h2 = document.createElement('h2');
    h2.appendChild(cancel);
    h2.appendChild(document.createTextNode("Google Drive Sharing Options"));
    googleOptions.appendChild(h2);

    var ul = document.createElement('ul');

    // // Form
    // var form = document.createElement('form');
    // //form.method = "post";
    // //form.action = "javascript:updateForecastSettings(forecastSettings)";
    // form.name = "updateWeight";

    // // dayNum
    // var dayNumInput = document.createElement('input');
    // dayNumInput.value = dayNum;
    // dayNumInput.type = "hidden";
    // dayNumInput.name = "dayNum";
    // form.appendChild(dayNumInput);

    // // exerNum
    // var exerNumInput = document.createElement('input');
    // exerNumInput.value = exerNum;
    // exerNumInput.type = "hidden";
    // exerNumInput.name = "exerNum";
    // form.appendChild(exerNumInput);

    // Info
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = "right";
    a.id = "signInIndicator";
    a.appendChild(document.createTextNode("\u2713 \u20E0"));
    li.appendChild(a);

    var a = document.createElement('a')
    a.className = "main";
    a.appendChild(document.createTextNode("Signed In with Permissions"));
    li.appendChild(a);


    ul.appendChild(li);


    // var li = document.createElement('li')
    // var permissions = document.createElement('a');
    // permissions.href = "javascript:";
    // permissions.className = "";
    // permissions.appendChild(document.createTextNode("Permissions Required:"));
    // li.appendChild(permissions);
    // ul.appendChild(li);

    var li = document.createElement('li')
    var permissions = document.createElement('a');
    //permissions.href = "javascript:";
    permissions.className = "";
    permissions.appendChild(document.createTextNode("Create Files in Google Drive"));
    li.appendChild(permissions);
    ul.appendChild(li);

    var li = document.createElement('li')
    var permissions = document.createElement('a');
    //permissions.href = "javascript:";
    permissions.className = "";
    permissions.appendChild(document.createTextNode("Read Files Created by this App"));
    li.appendChild(permissions);
    ul.appendChild(li);

    var li = document.createElement('li')
    var permissions = document.createElement('a');
    //permissions.href = "javascript:";
    permissions.className = "";
    permissions.appendChild(document.createTextNode("Write Files Created by this App"));
    li.appendChild(permissions);
    ul.appendChild(li);

    //form.appendChild(li);
    
    // for (j in dayData.exercises[exerNum].sets) {
    //     var li = document.createElement('li');
    //     var a = document.createElement('a');
    //     a.className = "right";
    //     var weightInput = document.createElement('input');
    //     weightInput.style.textAlign = "right";
    //     weightInput.type = "text";
    //     weightInput.name = "weight["+j+"]";
    //     weightInput.value = dayData.exercises[exerNum].sets[j].weight;
    //     //console.log(weightInput.value,dayData.exercises[exerNum].sets[j].weight);
    //     a.appendChild(weightInput);
    //     li.appendChild(a);

    //     var a = document.createElement('a');
    //     a.appendChild(document.createTextNode(dayData.exercises[exerNum].sets[j].label));
    //     li.appendChild(a);
    //     form.appendChild(li);
    // }
    // form.appendChild(li);
    // ul.appendChild(form);
    
    googleOptions.appendChild(ul);

     // Action Buttons
    var buttonContainer = document.createElement('p');

    // Enable
    var enable = document.createElement('a');
    enable.className = "black button";
    //enable.href = "javascript:enableGoogleDrive()";
    enable.href = "javascript:handleClientLoad()";
    enable.appendChild(document.createTextNode("Enable"));
    buttonContainer.appendChild(enable);
    
    // Sign In
    var enable = document.createElement('a');
    enable.className = "black button";
    //enable.href = "javascript:enableGoogleDrive()";
    enable.href = "javascript:signIn()";
    enable.appendChild(document.createTextNode("Sign In"));
    buttonContainer.appendChild(enable);

    // Sign Out
    var disable = document.createElement('a');
    disable.className = "black button";
    //disable.href = "javascript:disableGoogleDrive()";
    disable.href = "javascript:signOut()";
    disable.appendChild(document.createTextNode("Sign Out"));
    buttonContainer.appendChild(disable);

    // Write
    var write = document.createElement('a');
    write.className = "black button";
    write.href = "javascript:writeToGoogleDrive()";
    write.appendChild(document.createTextNode("Export"));
    buttonContainer.appendChild(write);

    // Read
    var read = document.createElement('a');
    read.className = "black button";
    //read.href = "javascript:readFromGoogleDrive()";
    read.href = "javascript:listFiles()";
    read.appendChild(document.createTextNode("Import"));
    buttonContainer.appendChild(read);

    googleOptions.appendChild(buttonContainer);

    // Add to the page and hide main panel
    document.getElementById('options').replaceWith(googleOptions);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);
}


function listFiles() {

  console.log("Has scope: " + GoogleUser.hasGrantedScopes(SCOPES));

  if (GoogleUser.hasGrantedScopes(SCOPES)) {
    gapi.client.drive.files.list({'pageSize': 10,'fields': "nextPageToken, files(id, name)"}).then(function (response) {
      var files = response.result.files;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log(file.name + ' (' + file.id + ')');
        }
      } 
      else {
        console.log('No files found.');
      }
    });
  }
  else {
    setSigninStatus();
    alert("Please sign in to Google Drive")
  }
}

//**************** Google authorization and Client API initialization and flow ****************//
//************** https://developers.google.com/identity/protocols/OAuth2UserAgent *************//

// Global for Google Authorization
var GoogleAuth;
var GoogleUser;

// Scopes requried for this application
var SCOPES = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive';

function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
  }

function initClient() {
  // Retrieve the discovery document for version 3 of Google Drive API.
  // In practice, your app can retrieve one or more discovery documents.
  var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

  // Initialize the gapi.client object, which app uses to make API requests.
  // Get API key and client ID from API Console.
  // 'scope' field specifies space-delimited list of access scopes.
  gapi.client.init({
      'apiKey': 'AIzaSyBhUaOQu8zs6mhXELmgIpKEl6Ji-5bw2Uw',
      'discoveryDocs': [discoveryUrl],
      'clientId': '225263823157-r3mnuks0si79i07727ph5khd65ptlu20.apps.googleusercontent.com',
      'scope': SCOPES
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance();
    console.log("Google Client API loaded")

    // Listen for sign-in state changes.
    GoogleAuth.isSignedIn.listen(setSigninStatus);

    // Handle initial sign-in state. (Determine if user is already signed in.)
    GoogleUser = GoogleAuth.currentUser.get();
    setSigninStatus();

  });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      msg = gapi.auth2.getAuthInstance().isSignedIn.get();
      console.log("Sign In Status: " + msg);
    });
}
function signIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function () {
      console.log('User signed in.');
      msg = gapi.auth2.getAuthInstance().isSignedIn.get();
      console.log("Sign In Status: " + msg);
    });
}

// Not currently used
function revokeAccess() {
  GoogleAuth.disconnect();
}

function setSigninStatus() {
  var GoogleUser = GoogleAuth.currentUser.get();
  var isAuthorized = GoogleUser.hasGrantedScopes(SCOPES);
  if (isAuthorized) {
    console.log( "You are currently signed in and have granted scopes: " + SCOPES);
  } else { 
    console.log("You have not authorized this app or you are signed out");
  }
}




