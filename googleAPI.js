var googleData = {
  'appFolder' : null,
  'syncFile' : null
}

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
    h2.appendChild(document.createTextNode("Google Drive Options"));
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
    a.appendChild(GoogleIndicator);
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

    // Reset 
    var disable = document.createElement('a');
    disable.className = "black button";
    //disable.href = "javascript:disableGoogleDrive()";
    disable.href = "javascript:resetLocalGoogleData()";
    disable.appendChild(document.createTextNode("Reset Google"));
    buttonContainer.appendChild(disable);

    // Create Directory
    var directory = document.createElement('a');
    directory.className = "black button";
    //directory.href = "javascript:directoryGoogleDrive()";
    directory.href = "javascript:createAppDirectory('workoutApp')";
    directory.appendChild(document.createTextNode("Create Folder"));
    buttonContainer.appendChild(directory);
  
    // Write
    var write = document.createElement('a');
    write.className = "black button";
    write.href = "javascript:writeToGoogleDrive('workoutData.json', 'application/json', workoutData, googleData.appFolder, handleCreateSyncFile)";
    write.appendChild(document.createTextNode("Export"));
    buttonContainer.appendChild(write);

    // Update
    var write = document.createElement('a');
    write.className = "black button";
    write.href = "javascript:updateToGoogleDrive(googleData.syncFile, workoutData, handleUpdateSyncFile)";
    write.appendChild(document.createTextNode("Update"));
    buttonContainer.appendChild(write);

    // Read
    var read = document.createElement('a');
    read.className = "black button";
    read.href = "javascript:readFromGoogleDrive(googleData.syncFile, handleReadSyncFile)";
    //read.href = "javascript:listFiles()";
    read.appendChild(document.createTextNode("Import"));
    buttonContainer.appendChild(read);

    // Picker
    var picker = document.createElement('a');
    picker.className = "black button";
    //picker.href = "javascript:pickerGoogleDrive()";
    picker.href = "javascript:createPicker()";
    picker.appendChild(document.createTextNode("Picker"));
    buttonContainer.appendChild(picker);


    googleOptions.appendChild(buttonContainer);

    // Add to the page and hide main panel
    document.getElementById('options').replaceWith(googleOptions);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);
}


function listFiles() {

  //console.log("Has scope: " + GoogleUser.hasGrantedScopes(SCOPES));

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

function writeToGoogleDrive(name, mimeType, data, parentFolder, callback) {

  if (GoogleUser.hasGrantedScopes(SCOPES)) {
    if (parentFolder == null) {
      parentFolderId = 'root';
    }
    else {
      parentFolderId = parentFolder.id;
    }

  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  const contentType = 'application/json';

  var metadata = {
      'name': name,
      'mimeType': mimeType,
      parents: [parentFolderId]
    };

    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + 'application/json' + '\r\n\r\n' +
        JSON.stringify(data) +
        close_delim;

    // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequest
    var request = gapi.client.request({
      'path': '/upload/drive/v3/files',
      'method': 'POST',
      'params': {'uploadType' : 'multipart'},
      'headers': { 'Content-Type': 'multipart/related; boundary="' + boundary + '",' },
      'body' : multipartRequestBody
    });

    request.execute(callback);
    //request.execute(function(response) {
      //console.log(response); 
      // if (response.mimeType == "application/vnd.google-apps.folder") {
      //   appFolder = response.id;
      // }
      // else if (response.mimeType == "application/json") {
      //   syncFile = response.id;  
      // }
    //});
  }
  else {
    setSigninStatus();
    alert("Please sign in to Google Drive")
  }
}


function updateToGoogleDrive(file, data, callback) {

  if (GoogleUser.hasGrantedScopes(SCOPES)) {

  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  const contentType = 'application/json';

    var metadata = {
        //'name': name,
        'mimeType': contentType,
        //parents: [parentFolderId]
      };

    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + 'application/json' + '\r\n\r\n' +
        JSON.stringify(data) +
        close_delim;

    // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequest
    var request = gapi.client.request({
      'path': '/upload/drive/v3/files/' + file.id,
      'method': 'PATCH',
      'params': {'uploadType' : 'multipart'},
      'headers': { 'Content-Type': 'multipart/related; boundary="' + boundary + '",' },
      'body' : multipartRequestBody
    });

    request.execute(callback);
    // request.execute(function(response) {
    //   console.log(response); 
    //   callback(response);
    //   if (response.mimeType == "application/vnd.google-apps.folder") {
    //     appFolder = response.id;
    //   }
    //   else if (response.mimeType == "application/json") {
    //     syncFileId = response.id;  
    //   }
    // });
  }
  else {
    setSigninStatus();
    alert("Please sign in to Google Drive")
  }
}

function createAppDirectory(folderName, parentFolder) {
  writeToGoogleDrive(folderName, 'application/vnd.google-apps.folder', '', parentFolder, handleCreateAppDirectory);
}

function handleCreateAppDirectory(response) {
  console.log(response);
  googleData.appFolder = response;
  updateStoredData('googleData', googleData);
}

function handleCreateSyncFile(response) {
  console.log(response);
  googleData.syncFile = response;
  updateStoredData('googleData', googleData);
}

function handleUpdateSyncFile(response) {
  console.log(response);
}

function handleReadSyncFile(response) {
  console.log(response);
}

function createPicker() {
  // https://developers.google.com/picker/docs/reference
  if (GooglePickerLoad && GoogleUser.hasGrantedScopes(SCOPES) && GoogleAuthToken != "") {

      console.log("Auth Token: " + GoogleAuthToken)
      var view = new google.picker.View(google.picker.ViewId.DOCS);
      //view.setMimeTypes("image/png,image/jpeg,image/jpg");
      //view.setMode('LIST');
      var picker = new google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.NAV_HIDDEN)
          //.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .setAppId("workoutapp-1547573908589")
          .setOAuthToken(GoogleAuthToken)
          .addView(view)
          .addView(new google.picker.DocsUploadView())
          .setDeveloperKey("AIzaSyBhUaOQu8zs6mhXELmgIpKEl6Ji-5bw2Uw")
          .setCallback(pickerCallback)
          .setSize(1051,650)
          .build();
       picker.setVisible(true);
  }
  else {
    alert("Please sign in to Google Drive")
  }
}

function pickerCallback(data) {
  if (data.action == google.picker.Action.PICKED) {
    var fileId = data.docs[0].id;
    console.log('The user selected: ' + fileId);
  }
}

function readFromGoogleDrive(file, callback) {

  if (GoogleUser.hasGrantedScopes(SCOPES)) {

    // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequest
    var request = gapi.client.request({
      'path': '/drive/v3/files/' + file.id,
      'method': 'GET',
      'params': {'alt' : 'media'},
      //'headers': { 'Content-Type': 'multipart/form-data; boundary="' + boundary + '",' },
      //'body' : multipartRequestBody
    });

    request.execute(callback);
    //request.execute(function(response) {
      // console.log(response); 
      // if (response.mimeType == "application/vnd.google-apps.folder") {
      //   appFolderId = response.id;
      // }
      // else if (response.mimeType == "application/json") {
      //   syncFileId = response.id;  
      // }
    //});
  }
  else {
    setSigninStatus();
    alert("Please sign in to Google Drive")
  }
}

function resetLocalGoogleData() {
    googleData = {
      'appFolder' : null,
      'syncFile' : null
    }
    clearStoredData('googleData');
}
//**************** Google authorization and Client API initialization and flow ****************//
//************** https://developers.google.com/identity/protocols/OAuth2UserAgent *************//

// Global for Google Authorization
var GoogleAuth;
var GoogleUser;
var GoogleAuthToken = "";
var GooglePickerLoad = false;
var GoogleIndicator = document.createTextNode("-");
GoogleIndicator.id = "signInIndicator";
var initialized = false;

// Scopes requried for this application
var SCOPES = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive';

function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
    gapi.load('picker', {'callback': onPickerApiLoad});
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
  }).then(function (authResult) {
    GoogleAuth = gapi.auth2.getAuthInstance();
    console.log("Google Client API loaded")

    // Listen for sign-in state changes.
    GoogleAuth.isSignedIn.listen(setSigninStatus);

    // Handle initial sign-in state. (Determine if user is already signed in.)
    GoogleUser = GoogleAuth.currentUser.get();
    setSigninStatus(true);

  });
}

function onPickerApiLoad() {
  console.log("Google Picker Loaded");
  GooglePickerLoad = true;
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
    GoogleIndicator = document.createTextNode("\u2713");

    // Set access token for OAuth end point calls
    GoogleUser.reloadAuthResponse().then (function(authResponse) {
      GoogleAuthToken = authResponse.access_token;
      console.log("Auth Token: " + GoogleAuthToken);  
      //Just a quick note that the auth_token in the above example is not necessary if you are using gapi.client.init and specifying your token etc.
    });
  } else { 
    console.log("You have not authorized this app or you are signed out");
    GoogleIndicator = document.createTextNode("\u20E0");
  }
  if (initialized == true) {
    displayGoogleDriveOptions();
  }
  initialized = true;
}





