var googleData = null;

function displayGoogleDriveOptions() {
    //console.log(workoutData)
    //var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    //console.log(dayData)
    
    if (googleData == null) { //} || checkGoogleFileExists(googleData.syncFile.id)) == false) { 
        googleData = {
          //appFolder : null,
          clientAccessToken: null,
          tokenExpiresAtTime: 0,
          syncFile : null,
          readTime : "never",
          writeTime : "never"
        }
    }


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

    var GoogleApiIndicator = document.createTextNode("\u20E0");
    var GoogleSignInIndicator = document.createTextNode("\u20E0");

    // If all three google services are loaded
    if (gapiInited && gisInited && GooglePickerInited) {
       GoogleApiIndicator = document.createTextNode("\u2713");
    }
    if (GoogleSignIn) {
       GoogleSignInIndicator = document.createTextNode("\u2713");
    }

    // Info
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = "right";
    a.appendChild(GoogleApiIndicator);
    li.appendChild(a);
    var a = document.createElement('a')
    a.appendChild(document.createTextNode("Google APIs Loaded"));
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = "right";
    a.appendChild(GoogleSignInIndicator);
    li.appendChild(a);
    var a = document.createElement('a')
    a.appendChild(document.createTextNode("Signed In / Authorized"));
    li.appendChild(a);
    ul.appendChild(li);

    if (googleData.syncFile == null) {
      //var appFolderName = "none";
      var syncFileName = "none";
      var readTime = "never";
      var writeTime = "never"
    } else {
      //var Name = googleData.appFolder.name;
      var syncFileName = googleData.syncFile.name;
      var readTime = googleData.readTime;
      var writeTime = googleData.writeTime;
    }

    // var li = document.createElement('li')
    // var a = document.createElement('a')
    // if (googleData != null) {
    //   a.href = "https://drive.google.com/open?id="+googleData.appFolder.id;
    //   a.target = "_blank";
    // }
    // a.className = "right";
    // a.appendChild(document.createTextNode(appFolderName));
    // li.appendChild(a);
    // var a = document.createElement('a')
    // if (googleData != null) {
    //   a.target = "_blank";
    //   a.href = "https://drive.google.com/open?id="+googleData.appFolder.id;
    // }
    // a.appendChild(document.createTextNode("App Folder"));
    // li.appendChild(a);
    // ul.appendChild(li);


    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = "right";
    if (googleData.syncFile != null) {
      a.target = "_blank";
      a.href = "https://drive.google.com/open?id="+googleData.syncFile.id;
    }
    a.appendChild(document.createTextNode(syncFileName));
    li.appendChild(a);
    var a = document.createElement('a')
    if (googleData.syncFile != null) {
      a.target = "_blank";
      a.href = "https://drive.google.com/open?id="+googleData.syncFile.id;
    }
    a.appendChild(document.createTextNode("Sync File"));
    li.appendChild(a);
    ul.appendChild(li);


    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = "right";
    a.appendChild(document.createTextNode(readTime));
    li.appendChild(a);
    var a = document.createElement('a')
    a.appendChild(document.createTextNode("Last Read"));
    li.appendChild(a);
    ul.appendChild(li);


    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = "right";
    a.appendChild(document.createTextNode(writeTime));
    li.appendChild(a);
    var a = document.createElement('a')
    a.appendChild(document.createTextNode("Last Write"));
    li.appendChild(a);
    ul.appendChild(li);


    
    
    googleOptions.appendChild(ul);

     // Action Buttons
    var buttonContainer = document.createElement('p');
  

      // else {
      //   // Sign In
      //   var signin = document.createElement('a');
      //   signin.className = "black button";
      //   signin.href = "javascript:signIn();";
      //   signin.appendChild(document.createTextNode("Authorize Access"));
      //   buttonContainer.appendChild(signin);
      // }

      if (googleData.syncFile != null) {
        // Reset 
        var disable = document.createElement('a');
        disable.className = "black button";
        //disable.href = "javascript:disableGoogleDrive()";
        disable.href = "javascript:signOut();displayGoogleDriveOptions();";
        disable.appendChild(document.createTextNode("Stop Sync"));
        buttonContainer.appendChild(disable);
      } else {
        // Setup Sync
        var sync = document.createElement('a');
        sync.className = "black button";
        //sync.href = "javascript:syncGoogleDrive()";
        sync.href = "javascript:initGoogleSyncFile();";
        sync.appendChild(document.createTextNode("Setup New Sync"));
        buttonContainer.appendChild(sync);
      }

      // Picker
      var picker = document.createElement('a');
      picker.className = "black button";
      //picker.href = "javascript:pickerGoogleDrive()";
      picker.href = "javascript:createPicker();closeOptions()";
      picker.appendChild(document.createTextNode("Import Sync File"));
      buttonContainer.appendChild(picker);
          
      // if (GoogleSignIn) {

      //   // Revoke Access
      //   var disable = document.createElement('a');
      //   disable.className = "black button";
      //   //disable.href = "javascript:disableGoogleDrive()";
      //   disable.href = "javascript:signOut();displayGoogleDriveOptions();";
      //   disable.appendChild(document.createTextNode("Remove Access"));
      //   buttonContainer.appendChild(disable);
      // }

/*
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
    read.href = "javascript:readSyncFile();";
    //read.href = "javascript:listFiles()";
    read.appendChild(document.createTextNode("Import"));
    buttonContainer.appendChild(read);
*/
    


    googleOptions.appendChild(buttonContainer);

    // Add to the page and hide main panel
    document.getElementById('options').replaceWith(googleOptions);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);
}


// function listFiles() {

//   //console.log("Has scope: " + GoogleUser.hasGrantedScopes(SCOPES));

//   if (GoogleUser.hasGrantedScopes(SCOPES)) {
//     gapi.client.drive.files.list({'pageSize': 10,'fields': "nextPageToken, files(id, name)"}).then(function (response) {
//       var files = response.result.files;
//       if (files && files.length > 0) {
//         for (var i = 0; i < files.length; i++) {
//           var file = files[i];
//           console.log(file.name + ' (' + file.id + ')');
//         }
//       } 
//       else {
//         console.log('No files found.');
//       }
//     });
//   }
//   else {
//     setSigninStatus();
//     alert("Please sign in to Google Drive")
//   }
// }

function writeToGoogleDrive(name, mimeType, data, callback) {

  //if (GoogleUser.hasGrantedScopes(SCOPES)) {
    // if (parentFolder == null) {
    //   parentFolderId = 'root';
    // }
    // else {
    //   parentFolderId = parentFolder.id;
    // }

  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  const contentType = 'application/json';

  var metadata = {
      'name': name,
      'mimeType': mimeType,
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
      'path': '/upload/drive/v3/files',
      'method': 'POST',
      'params': {'uploadType' : 'multipart'},
      'headers': { 'Content-Type': 'multipart/related; boundary="' + boundary + '",' },
      'body' : multipartRequestBody
    });
    sendRequest(request, callback); 
  // }
  // else {
  //   // setSigninStatus();
  //   alert("Please sign in to Google Drive")
  // }
}


function updateToGoogleDrive(file, data, callback) {

  //if (GoogleUser.hasGrantedScopes(SCOPES)) {

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
        JSON.stringify(metadata, null, 1) +
        delimiter +
        'Content-Type: ' + 'application/json' + '\r\n\r\n' +
        JSON.stringify(data, null, 1) +
        close_delim;

    // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequest
    var request = gapi.client.request({
      'path': '/upload/drive/v3/files/' + file.id,
      'method': 'PATCH',
      'params': {'uploadType' : 'multipart'},
      'headers': { 'Content-Type': 'multipart/related; boundary="' + boundary + '",' },
      'body' : multipartRequestBody
    });
    sendRequest(request, callback); 
  // }
  // else {
  //   // setSigninStatus();
  //   alert("Please sign in to Google Drive")
  // }
}

// function handleCreateAppFolder(response) {
//   //console.log(response);
//   googleData.appFolder = response;
//   updateStoredData('googleData', googleData);
//   // Create Sync File
//   writeToGoogleDrive('workoutData.json', 'application/json', workoutData, googleData.appFolder, handleCreateSyncFile);
// }

function handleCreateSyncFile(response) {
  //console.log(response);
  googleData.syncFile = response;
  setLastWriteTime();
  updateStoredData('googleData', googleData);
  console.log("Google Drive Data initialized with Local Storage");
  googleSyncInProgress(false);;
  displayGoogleDriveOptions();
}

function handleUpdateSyncFile(response, reason) {
  //workoutData = response;
  //updateStoredData('workoutData', workoutData);
  //console.log(response);
  if (response.error == undefined) {
    console.log("Google Drive Data updated with Local Storage")
    setLastWriteTime();
    updateStoredData('googleData', googleData);
  }
  else {
    alert("Error updating Sync File\n" + JSON.stringify(response, null, 2) + "\nHTTP\n" +JSON.stringify(reason, null, 2));
    console.log(response, reason);
  }
  googleSyncInProgress(false);
}

function handleReadSyncFile(response) {
  if (response.error == undefined) {
    //console.log(response);
    if (response) {
      workoutData = response;
      updateStoredData('workoutData', workoutData);
      console.log("Local Storage updated with Google Drive Data");
      setLastReadTime();
      updateStoredData('googleData', googleData);
    }
    else {
      alert("Error reading Sync File Data, repair Sync File\n" + JSON.stringify(response, null, 2));
    }
  }
  else {
    alert("Error reading/accessing Sync File\n" + JSON.stringify(response, null, 2));
    console.log(response);
  }
  googleSyncInProgress(false);;
  printAll();
}

function handleImportSyncFile(response) {
  if (typeof response.error == undefined) {
    workoutData = response;
    updateStoredData('workoutData', workoutData);
    //console.log(response);
    console.log("Local Storage updated with Google Drive Data");
    setLastReadTime();
    updateStoredData('googleData', googleData);
  }
  else {
    alert("Error importing sync file\n" + JSON.stringify(response, null, 2))
  }
  googleSyncInProgress(false);
  displayGoogleDriveOptions();
}

function createPicker() {
  // https://developers.google.com/picker/docs/reference
  if (checkToken(createPicker)) {

      console.log("Auth Token: " + GoogleAuthToken)
      var view = new google.picker.View(google.picker.ViewId.DOCS);
      //view.setMimeTypes("image/png,image/jpeg,image/jpg");
      //view.setMode('LIST');
      var picker = new google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.NAV_HIDDEN)
          //.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .setAppId("workoutapp-1547573908589")
          .setOAuthToken(gapi.client.getToken().access_token)
          .addView(view)
          .addView(new google.picker.DocsUploadView())
          .setDeveloperKey("AIzaSyBhUaOQu8zs6mhXELmgIpKEl6Ji-5bw2Uw")
          .setCallback(pickerCallback)
          .setSize(1051,650)
          .build();
     picker.setVisible(true);
     googleSyncInProgress(false);
  }
}

function pickerCallback(data) {
  if (data.action == google.picker.Action.PICKED) {
    var fileId = data.docs[0].id;
    console.log('The user selected: ' + fileId);
    syncToExistingFile(fileId);
  }
}

function readMetaDataFromGoogleDrive(file, callback) {

  //if (GoogleUser.hasGrantedScopes(SCOPES)) {

    // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequest
    var request = gapi.client.request({
      'path': '/drive/v3/files/' + file.id,
      'method': 'GET',
      'params': {'fields' : ' name, kind, id, mimeType, parents'}
      //'headers': { 'Content-Type': 'multipart/form-data; boundary="' + boundary + '",' },
      //'body' : multipartRequestBody
    });

    sendRequest(request, callback); 
  // }
  // else {
  //   // setSigninStatus();
  //   alert("Please sign in to Google Drive");
  //   googleSyncInProgress(false);
  // }
}

function readFromGoogleDrive(file, callback) {

  //if (GoogleUser.hasGrantedScopes(SCOPES)) {

    // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequest
    var request = gapi.client.request({
      'path': '/drive/v3/files/' + file.id,
      'method': 'GET',
      'params': {'alt' : 'media'},
      //'headers': { 'Content-Type': 'multipart/form-data; boundary="' + boundary + '",' },
      //'body' : multipartRequestBody
    });

    sendRequest(request, callback); 
  // }
  // else {
  //   // setSigninStatus();
  //   alert("Please sign in to Google Drive");
  //   googleSyncInProgress(false);
  // }
}

//function checkGoogleFileExists(fileId, callback) {
//  // 
//}

function initGoogleSyncFile() {
        createSyncFile('workoutData.json');
}

function syncToExistingFile(fileId) {
  // if (GoogleUser.hasGrantedScopes(SCOPES)) {  
    if (googleData == null) { //} || checkGoogleFileExists(googleData.syncFile.id)) == false) { 
        googleData = {
          //appFolder : null,
          syncFile : null,
          readTime : "never",
          writeTime : "never"
        }
    }
    googleData.syncFile = {id : fileId };
    getSyncFileMetadata()
    readSyncFile();
  // } else {
  //   // setSigninStatus();
  //   alert("Please sign in to Google Drive");
  //   googleSyncInProgress(false);
  // }
}

// function createAppFolder(folderName, parentFolder) {
//   writeToGoogleDrive(folderName, 'application/vnd.google-apps.folder', '', parentFolder, handleCreateAppFolder);
// }

function createSyncFile() {
    googleSyncInProgress(true);
    // if () { //|| checkGoogleFileExists(googleData.appDir.id) == false) {
    //     createAppFolder('WorkoutApp');
    //     alert ("An Application Data Folder will be created at the Google Drive root.  All application data will be stored there. You can move this directory to another location on your drive and sync will still work.");
    // } else {
        // googleData.appFolder == {"name": "root"}
        writeToGoogleDrive('workoutData.json', 'application/json', workoutData, handleCreateSyncFile);
        alert ("All data will be stored in a file called workoutData.json at the Google Drive root.  You can move/remane this file as needed and sync will still work.");

    // }
}

function readSyncFile() {
  if (googleData.syncFile != null) {
      googleSyncInProgress(true);
      readFromGoogleDrive(googleData.syncFile, handleReadSyncFile);
  } else {
      console.log("Google synchronization is not setup");
  }
}

function getSyncFileMetadata() {
  readMetaDataFromGoogleDrive(googleData.syncFile, handleReadSyncFileMetadata);
}
function handleReadSyncFileMetadata(response) {
  //console.log(response);
  if (response.error == undefined) {
    googleData.syncFile = response;
    updateStoredData('googleData', googleData)
    // var appFolder = {id : googleData.syncFile.parents[0]}
    // readMetaDataFromGoogleDrive(appFolder, handleReadAppFolderMetadata)
  }
  else {
    alert ("Error Importing Sync File Metadata\n" + JSON.stringify(response, null, 2));
    console.log(response);
    googleSyncInProgress(false);
  }
}

// function handleReadAppFolderMetadata(response) {
//   if (response.error == undefined) {
//     googleData.appFolder = response;
//     updateStoredData('googleData', googleData);
//   }
//   else {
//     alert ("Error Importing App Folder Metadata\n" + JSON.stringify(response, null, 2));
//     console.log(response);
//     googleSyncInProgress(false);
//   }
//   readSyncFile(googleData.syncFile);
// }

function updateSyncFile() {
  if (googleData.syncFile != null) {
    googleSyncInProgress(true);;
    updateToGoogleDrive(googleData.syncFile, workoutData, handleUpdateSyncFile);
  } else {
      console.log("Google synchronization is not setup.");
  }
}

function resetLocalGoogleData() {
    googleData = null;
    clearStoredData('googleData');
    alert("You can now delete the synch file on your Google Drive.  Setup New Sync to turn on synchronization again.")
    displayGoogleDriveOptions();
}

function googleSyncInProgress(inProgress) {
  var loading = document.getElementById("loading");

  if (inProgress) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }
}

/*
now = new Date();
const offsetMs = now.getTimezoneOffset() * 60 * 1000;
const dateLocal = new Date(now.getTime() - offsetMs);
str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
*/

function setLastReadTime() {
  var now = new Date();
  googleData.readTimestamp = now.getTime();
  googleData.readTime = now.toISOString().replace("T", " ").replace("Z", "");
  //googleData.readTime = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+':'+now.getMilliseconds();
  console.log("Read Sync File: " + " " + googleData.readTime );
}
function setLastWriteTime() {
  var now = new Date();
  googleData.writeTimestamp = now.getTime();
  googleData.writeTime = now.toISOString().replace("T", " ").replace("Z", "");
  //googleData.writeTime = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+':'+now.getMilliseconds();
  console.log("Wrote Sync File: " + " " + googleData.writeTime );
}
//**************** Google authorization and Client API initialization and flow ****************//
//************** https://developers.google.com/identity/protocols/OAuth2UserAgent *************//

// Global for Google Authorization
var GoogleAuth;
var GoogleUser;
var GoogleAuthToken = "";
var GoogleApi = false;

var initialized = false;

let tokenClient;
let gapiInited = false;;
let gisInited = false;;
let GooglePickerInited = false;
var GoogleSignIn = false;
let tokenExpiresAtTime;

// Scopes requried for this application
var SCOPES = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive';

function gapiInit() {
  gapi.client.init({
    // NOTE: OAuth2 'scope' and 'client_id' parameters have moved to initTokenClient().
  })
  .then(function() {  
    console.log("Google Client API Loaded");
    gapiInited = true;
  });
}
function onPickerApiLoad() {
  console.log("Google Picker Loaded");
  GooglePickerInited = true;
}

function gapiLoad() {
    gapi.load('client', gapiInit)
    gapi.load('picker', onPickerApiLoad);
}

//https://developers.google.com/identity/openid-connect/openid-connect
function gisInit() {
 tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: '225263823157-r3mnuks0si79i07727ph5khd65ptlu20.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive',
            callback: '',  // defined at request time
            error_callback: handleAccessError
        });
  console.log("Google ID Services Loaded");
  gisInited = true;
}

function sendRequest(request, callback) {
  // CheckToken will return true if a valid google authorization token is available.  
  // It will return false and begin the authorization process if a new token is needed.  
  // The callback will return to this funciton.
  if (checkToken(function (){sendRequest(request, callback)})) {   
    // AuthToken is good so execute the request
    request.execute(callback);
  }
}

function checkToken(callback) {
  // Conditionally ask users to select the Google Account they'd like to use,
  // and explicitly obtain their consent to use Drive.
  // NOTE: To request an access token a user gesture is necessary.

  // if an exiting token is not defined
  if ((gapi.client.getToken() === null)) {
    // if an existing token is unavailable or expired
    if (googleData.clientAccessToken === null || (new Date().getTime() > googleData.tokenExpiresAtTime)) {
      // get a new token
      getTokenAndContinue('', callback)
      return false;
    } 
    else {
      // an existing token is available in localstorage and it hasn't expired so use it
      gapi.client.setToken({access_token: googleData.clientAccessToken})
      GoogleSignIn = true;
      return true;
    }
  } 
  // Token is available so check for token expiration
  else if (new Date().getTime() > googleData.tokenExpiresAtTime) {
    // Get an updated token - Skip display of account chooser and consent dialog for an existing session.
    getTokenAndContinue('none', callback)
    return false;
  } 
  else {
    // token is good
    return true;
  }
}

function getTokenAndContinue(prompt = '', continuationCode) {
    tokenClient.callback = (resp) => {
      // Handle Errors https://developers.google.com/identity/oauth2/web/guides/use-token-model#granular_permissions
      if (resp.error !== undefined) {
        googleSyncInProgress(false);
        alert('Authorization error.\n' + json.STRINGIFY(resp));
        GoogleSignIn = false;
        throw(resp);
      }

      // Update data stores
      // GIS has automatically updated gapi.client with the newly issued access token.
      googleData.clientAccessToken = gapi.client.getToken().access_token;
      console.log('gapi.client access token: ' + JSON.stringify(gapi.client.getToken()));
      googleData.tokenExpiresAtTime = new Date().getTime() + gapi.client.getToken().expires_in * 1000;
      console.log('gapi.client access token expires: ', googleData.tokenExpiresAtTime);
      GoogleSignIn = true;
      updateStoredData("googleData", googleData)
      
      // Now the AuthToken is good so execute the request
      continuationCode();

    }

    // Prompt the user to select a Google Account and asked for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({prompt: prompt}); 
}

function handleAccessError(err) {
  if (err.type == 'popup_failed_to_open') {
    alert('The Google popup window has failed to open.  Please allow popups.');
  } else if (err.type == 'popup_closed') {
    alert('No Google account was authorized.  Please try again')
  }
  googleSyncInProgress(false);
}

function signOut() {
    // google.accounts.id.revoke().then(function() {
    //   console.log('ID token revoked')
      
    // }).catch(function(error) {
    //   console.error('Error revoking ID token:', error);
    // });
    resetLocalGoogleData();
    GoogleSignIn = false;
    alert('Optionally you can remove Google access for this app in the following window.')
    window.open('https://myaccount.google.com/permissions', '_blank');
}

function signIn() {
  // CheckToken will return true if a valid google authorization token is available.  
  // It will return false and begin the authorization process if a new token is needed.  
  // The callback will return to this funciton.
  if (checkToken(signIn)) {   
    // AuthToken is good so execute the request
    displayGoogleDriveOptions();
  }
}

// // Not currently used
// function revokeAccess() {
//   GoogleAuth.disconnect();
// }

// function setSigninStatus() {
//   var GoogleUser = GoogleAuth.currentUser.get();
//   var isAuthorized = GoogleUser.hasGrantedScopes(SCOPES);
//   if (isAuthorized) {
//     console.log( "You are currently signed in and have granted scopes: " + SCOPES);
//     GoogleSignIn = true;

//     // Set access token for OAuth end point calls
//     GoogleUser.reloadAuthResponse().then (function(authResponse) {
//       GoogleAuthToken = authResponse.access_token;
//       console.log("Auth Token: " + GoogleAuthToken);  
//       //Just a quick note that the auth_token in the above example is not necessary if you are using gapi.client.init and specifying your token etc.
//     });
//   } else { 
//     console.log("You have not authorized this app or you are signed out");
//     GoogleSignIn = false;
//     googleSyncInProgress(false);
//   }
//   if (initialized == true) {
//     displayGoogleDriveOptions();
//   }
//   initialized = true;
// }





