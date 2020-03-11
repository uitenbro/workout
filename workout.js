//var workoutDay = 0;
var workoutData = {};

function readStoredData() {
    //workoutDay = JSON.parse(localStorage.getItem("workoutDay"));
    workoutData = JSON.parse(localStorage.getItem("workoutData"));
    //console.log ("readStoredData");
    //console.log (workoutDay, workoutData);
    if (typeof workoutData.currentDay == 'undefined') {
        console.log("Updating to new format")
        workoutData.currentDay = JSON.parse(localStorage.getItem("workoutDay"));
        updateStoredData('workoutData', workoutData)
    } 
    if (localStorage.getItem('googleData')) {
        //console.log('found stored googleData');
        googleData = JSON.parse(localStorage.getItem("googleData"));
        readSyncFile(); // need to wait for updates localStorage and local data
    }
}

function updateStoredData(item, value) {
    localStorage.setItem(item, JSON.stringify(value));
    if (item != 'googleData' && googleData != null) {
        updateSyncFile();
    }
}

function initializeStoredData () {

  if (localStorage.getItem('workoutData')) {
    //console.log('found stored workoutData');
  }
  else {
    //console.log('create default workoutData');
    localStorage.setItem('workoutData', workoutJson);
  }


  // if (localStorage.getItem('workoutDay')) {
  //   //console.log('found stored workoutDay');
  // }
  // else {
  //   //console.log('create default workoutDay');
  //   localStorage.setItem('workoutDay', workoutDay);
  // }

}

function clearStoredData(dataItem) {

  if (localStorage.removeItem(dataItem)) {
    //console.log('found stored workoutData');
  }
  // if (localStorage.removeItem('workoutDay')) {
  //   //console.log('found stored workoutDay');
  // }
}

/*
<html>
<body>

<h2>Use the XMLHttpRequest to get the content of a file.</h2>
<p>The content is written in JSON format, and can easily be converted into a JavaScript object.</p>

<p id="demo"></p>

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();
</script>

<p>Take a look at <a href="json_demo.txt" target="_blank">json_demo.txt</a></p>

</body>
</html>
*/

function init () {
    initializeStoredData();
    readStoredData();
    printAll();
}

function printAll(){
    printHeader();
    printMain();
}

function printHeader (dayNum) {
   /* 
   <div id="header">
        <h1>Workout</h1>
        <a href="" class="Action" id="firstButton">Complete</a>
        <a href="" class="Action" id="secondButton">Reset</a>
        <a href="" class="Action" id="thirdButton">Previous</a>
        <a href="" class="Action" id="fourthButton">Next</a>
    </div> 
    */

    if (typeof dayNum == 'undefined') {
        dayNum = workoutData.currentDay;
    }
    //console.log("dayNum = " + dayNum);

    var header = document.createElement('div');
    header.id = 'header';

    var heading = document.createElement('h1');
    heading.appendChild(document.createTextNode("Workout"));
    header.appendChild(heading);

    var firstButton = document.createElement('a');
    firstButton.className = "action";
    firstButton.id = "firstButton";
    firstButton.href = "javascript:completeDay("+dayNum+");";
    firstButton.appendChild(document.createTextNode("Complete"));
    header.appendChild(firstButton);

    var secondButton = document.createElement('a');
    secondButton.className = "action";
    secondButton.id = "secondButton";
    secondButton.href="javascript:location.reload(true);";
    //secondButton.href="javascript:displayDay("+workoutData.currentDay+");";
    secondButton.appendChild(document.createTextNode("Today"));
    header.appendChild(secondButton);

    var thirdButton = document.createElement('a');
    thirdButton.className = "action";
    thirdButton.id = "thirdButton";
    thirdButton.href="javascript:browsePrevious("+dayNum+");";
    thirdButton.appendChild(document.createTextNode("Previous"));
    header.appendChild(thirdButton);

    var fourthButton = document.createElement('a');
    fourthButton.className = "action";
    fourthButton.id = "fourthButton";
    fourthButton.href="javascript:browseNext("+dayNum+");";
    fourthButton.appendChild(document.createTextNode("Next"));
    header.appendChild(fourthButton);

    // Update header with the new content
    document.getElementById('header').replaceWith(header);
}

function printMain(dayNum) {
    /*
    <ul>    
    <li>
    <a href ="" class="mainright"></a>
    <a href="" class="main">Natural Lifter's Workout</a>
    <a href ="" class="right">Day 2</a>
    <a href="" class="">Monday - Pull 1</a>
    </li>
    </ul>

    <ul>
    <li>
    <a href ="" class="mainright"></a>
    <a href="" class="main">Romainian Deadlift</a>
    </li>
    <li></li>
    </li>
    </ul>
    */

    if (typeof dayNum == 'undefined') {
        dayNum = workoutData.currentDay;
    }
    //console.log("dayNum = " + dayNum);
    //readStoredData();

    var main = document.createElement('div');
    main.id = 'main';

    // Print Workout Info and Day
    main.appendChild(printWorkoutInfo(dayNum));
    
    // Print each Exercise
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    for (i in dayData.exercises) {
        //main.appendChild(printExercise(dayData.exercises[i]));
        main.appendChild(printExercise(dayNum, i));
    }
    
    // Update main with the new content
    document.getElementById('main').replaceWith(main);
}

function printWorkoutInfo(dayNum) {
    var workoutUl = document.createElement('ul');
    var workoutLi = document.createElement('li');
    
    var workoutName = document.createElement('a');
    workoutName.href = "javascript:showWorkoutOptions("+dayNum+");"
    workoutName.className = "main";
    workoutName.appendChild(document.createTextNode(workoutData.workoutName));
    workoutLi.appendChild(workoutName);

    var dayNumber = document.createElement('a');
    dayNumber.className = "right";
    dayNumber.href = "javascript:showWorkoutOptions("+dayNum+");"
    var printDay = dayNum+1;
    dayNumber.appendChild(document.createTextNode("Day " + printDay))
    workoutLi.appendChild(dayNumber);

    var dayName = document.createElement('a');
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    dayName.href = "javascript:showWorkoutOptions("+dayNum+");"
    dayName.className = "";
    dayName.appendChild(document.createTextNode(dayData.dayName));
    workoutLi.appendChild(dayName);
    
    workoutUl.appendChild(workoutLi);

    return workoutUl
}

function printExercise(dayNum, exerNum) {
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    var exercise = dayData.exercises[exerNum];
    //console.log(exercise);
    var ul = document.createElement('ul')
    var li = document.createElement('li')
    var a = document.createElement('a');
    a.className = "main"
    a.href = "javascript:displayWeightOptions("+dayNum+","+exerNum+")";
    a.appendChild(document.createTextNode(exercise.exerciseName))
    li.appendChild(a);
    ul.appendChild(li);

    for (j in exercise.sets) {
        var li = document.createElement('li'); 
        var a = document.createElement('a');
        a.className = "right"
        a.href = "javascript:displayWeightOptions("+dayNum+","+exerNum+")";
        if (exercise.sets[j].weight != "") {
            a.appendChild(document.createTextNode(exercise.sets[j].weight));
        }
        else {
            a.appendChild(document.createTextNode("enter weight"));
        }
        li.appendChild(a);
        ul.appendChild(li);

        var a = document.createElement('a');
        a.className = ""
        a.href = "javascript:displayWeightOptions("+dayNum+","+exerNum+")";
        a.appendChild(document.createTextNode(exercise.sets[j].label))
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
}

function completeDay(dayNum) {
    //console.log("Complete");
    workoutData.currentDay = dayNum+1;
    updateStoredData('workoutData', workoutData)
    printHeader(dayNum+1);
    printMain(dayNum+1);
}
function resetToday() {
    //console.log("Reset");
    workoutData.curentDay = 0;
    updateStoredData('workoutDay', workoutData)
    printHeader(0);
    printMain(0);
}
function browsePrevious(dayNum) {
    //console.log("Previous");
    if (dayNum>0) {
        printHeader(dayNum-1);
        printMain(dayNum-1);
    }
    else {
        alert("You're at the first day")
    }
}
function browseNext(dayNum) {
    //console.log("Next");
    printHeader(dayNum+1);
    printMain(dayNum+1);
}
function displayDay(dayNum) {
    //console.log("Next");
    printHeader(dayNum);
    printMain(dayNum);
    closeOptions();
}

function displayLocalDataOptions(dayNum, exerNum) {
    //console.log(workoutData)
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    //console.log(dayData)

    locDataIO = document.createElement('div')
    locDataIO.id = "options";
    locDataIO.className = "optionpanel";
    locDataIO.style.display = "block"

    // Cancel
    var cancel = document.createElement('a');
    var img = document.createElement('img');
    img.src = "images/cancel.png";
    cancel.appendChild(img);
    cancel.href = "javascript:closeOptions();";
    //weightUpdate.appendChild(cancel);

    var h2 = document.createElement('h2');
    h2.appendChild(cancel);
    h2.appendChild(document.createTextNode(workoutData.workoutName+" - JSON Workout Data"));
    locDataIO.appendChild(h2);

    var ul = document.createElement('ul');

    // Form
    var form = document.createElement('form');
    //form.method = "post";
    //form.action = "javascript:updateForecastSettings(forecastSettings)";
    form.name = "locDataIO";

    var li = document.createElement('li')
    var a = document.createElement('a')

    // wokoutData JSON input / output text box
    var workoutDataJsonIO = document.createElement('textarea');
    workoutDataJsonIO.value = JSON.stringify(workoutData, null, 1);
    workoutDataJsonIO.style.fontSize = "7px";
    workoutDataJsonIO.rows = "35";
    workoutDataJsonIO.columns = "80";
    //workoutDataJsonIO.wrap = "hard";    
    workoutDataJsonIO.name = "workoutDataJsonIO";

    a.appendChild(workoutDataJsonIO);
    li.appendChild(a);
    form.appendChild(li);
    ul.appendChild(form);
    locDataIO.appendChild(ul);

    // Action Buttons
    var buttonContainer = document.createElement('p');

    // Save
    var save = document.createElement('a');
    save.className = "black button";
    save.href = "javascript:updateLocalData("+dayNum+");";
    save.appendChild(document.createTextNode("Save"));
    buttonContainer.appendChild(save);
    locDataIO.appendChild(buttonContainer);

    // Add to the page and hide main panel
    document.getElementById('options').replaceWith(locDataIO);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);
    
}
function updateLocalData (dayNum) {
    //console.log("update weights" + dayNum + " " + exerNum);
    try {
        var newWorkoutData = JSON.parse(document.forms['locDataIO']['workoutDataJsonIO'].value);

    } catch(error) {
        alert(error); // annunciate error without changing anything
    }
    // Ensure the new workout data was turned into an object and then update it
    if (newWorkoutData != undefined) {
        // TODO: Add other format and consistency checks for newWorkoutData
        workoutData = newWorkoutData;
        updateStoredData('workoutData', workoutData);
        displayDay(dayNum);
    }
}

function displayWeightOptions(dayNum, exerNum) {
    //console.log(workoutData)
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    //console.log(dayData)

    weightUpdate = document.createElement('div')
    weightUpdate.id = "options";
    weightUpdate.className = "optionpanel";
    weightUpdate.style.display = "block"

    // Cancel
    var cancel = document.createElement('a');
    var img = document.createElement('img');
    img.src = "images/cancel.png";
    cancel.appendChild(img);
    cancel.href = "javascript:closeOptions();";
    //weightUpdate.appendChild(cancel);

    var h2 = document.createElement('h2');
    h2.appendChild(cancel);
    h2.appendChild(document.createTextNode(dayData.dayName));
    weightUpdate.appendChild(h2);

    var ul = document.createElement('ul');

    // Form
    var form = document.createElement('form');
    //form.method = "post";
    //form.action = "javascript:updateForecastSettings(forecastSettings)";
    form.name = "updateWeight";

    // dayNum
    var dayNumInput = document.createElement('input');
    dayNumInput.value = dayNum;
    dayNumInput.type = "hidden";
    dayNumInput.name = "dayNum";
    form.appendChild(dayNumInput);

    // exerNum
    var exerNumInput = document.createElement('input');
    exerNumInput.value = exerNum;
    exerNumInput.type = "hidden";
    exerNumInput.name = "exerNum";
    form.appendChild(exerNumInput);

    // Exercise Data
    var li = document.createElement('li')
    var a = document.createElement('a')
    //a.className = "main";
    var nameInput = document.createElement('input');
    nameInput.style.color = "black";
    nameInput.type = "text";
    nameInput.name = "exerciseName["+exerNum+"]";
    nameInput.value = dayData.exercises[exerNum].exerciseName;
    //a.appendChild(document.createTextNode(dayData.exercises[exerNum].exerciseName));
    a.appendChild(nameInput);
    li.appendChild(a);
    form.appendChild(li);
    
    for (j in dayData.exercises[exerNum].sets) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = "right";
        var weightInput = document.createElement('input');
        weightInput.style.textAlign = "right";
        weightInput.type = "text";
        weightInput.name = "weight["+j+"]";
        weightInput.value = dayData.exercises[exerNum].sets[j].weight;
        //console.log(weightInput.value,dayData.exercises[exerNum].sets[j].weight);
        a.appendChild(weightInput);
        li.appendChild(a);

        var a = document.createElement('a');
        var labelInput = document.createElement('input');
        labelInput.type = "text";
        labelInput.name = "label["+j+"]";
        labelInput.value = dayData.exercises[exerNum].sets[j].label;
        //a.appendChild(document.createTextNode(dayData.exercises[exerNum].sets[j].label));
        a.appendChild(labelInput);
        li.appendChild(a);
        form.appendChild(li);
    }
    form.appendChild(li);
    ul.appendChild(form);
    weightUpdate.appendChild(ul);

     // Action Buttons
    var buttonContainer = document.createElement('p');

    // Save
    var save = document.createElement('a');
    save.className = "black button";
    save.href = "javascript:updateWeights("+dayNum+","+exerNum+");displayDay("+dayNum+")";
    save.appendChild(document.createTextNode("Save"));
    buttonContainer.appendChild(save);
    weightUpdate.appendChild(buttonContainer);

    // Add to the page and hide main panel
    document.getElementById('options').replaceWith(weightUpdate);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);
    
}
function updateWeights (dayNum, exerNum) {
    //console.log("update weights" + dayNum + " " + exerNum);
    dayNum = dayNum % workoutData.days.length;
    workoutData.days[dayNum].exercises[exerNum].exerciseName = document.forms['updateWeight']['exerciseName['+exerNum+']'].value
    for (i in workoutData.days[dayNum].exercises[exerNum].sets) {
        //console.log("during "+document.forms['updateWeight']['weight['+i+']'].value)
        workoutData.days[dayNum].exercises[exerNum].sets[i].weight = document.forms['updateWeight']['weight['+i+']'].value;
        workoutData.days[dayNum].exercises[exerNum].sets[i].label = document.forms['updateWeight']['label['+i+']'].value;
    }
    updateStoredData('workoutData', workoutData);
}
function closeOptions() {
    document.getElementById('header').style.display = 'block';
    document.getElementById('main').style.display = 'block';
    document.getElementById('options').style.display = 'none';
}
function showWorkoutOptions(dayNum) {
   
    // Workout Options
    workoutOptions = document.createElement('div')
    workoutOptions.id = "options";
    workoutOptions.className = "optionpanel";
    workoutOptions.style.display = "block"

    // Cancel
    var cancel = document.createElement('a');
    var img = document.createElement('img');
    img.src = "images/cancel.png";
    cancel.appendChild(img);
    cancel.href = "javascript:closeOptions();";
    //weightUpdate.appendChild(cancel);

    var h2 = document.createElement('h2');
    h2.appendChild(cancel);
    h2.appendChild(document.createTextNode("Workout Options"));
    workoutOptions.appendChild(h2);

    workoutOptions.appendChild(printWorkoutInfo(dayNum));

    // Action Buttons
    var buttonContainer = document.createElement('p');

    // Info
    var info = document.createElement('a');
    info.className = "black button";
    info.href = "javascript:window.open('"+workoutData.url+"','_blank');closeOptions();";
    info.target = "_blank";
    info.appendChild(document.createTextNode("Workout Info"));
    buttonContainer.appendChild(info);
    workoutOptions.appendChild(buttonContainer);

    // Reset Today
    var info = document.createElement('a');
    info.className = "black button";
    info.href = "javascript:resetToday();displayDay(0)";
    info.appendChild(document.createTextNode("Restart Today"));
    buttonContainer.appendChild(info);
    workoutOptions.appendChild(buttonContainer);

    // Reset Workout
    var info = document.createElement('a');
    info.className = "black button";
    info.href = "javascript:resetWorkout();displayDay(0)";
    info.appendChild(document.createTextNode("Reset Workout"));
    buttonContainer.appendChild(info);
    workoutOptions.appendChild(buttonContainer);

    // Display Google Drive Options
    var google = document.createElement('a');
    google.className = "black button";
    google.href = "javascript:displayGoogleDriveOptions()";
    google.appendChild(document.createTextNode("Google Drive"));
    buttonContainer.appendChild(google);
    workoutOptions.appendChild(buttonContainer);

    // Display Local Storage Export/Import
    var locData = document.createElement('a');
    locData.className = "black button";
    locData.href = "javascript:displayLocalDataOptions()";
    locData.appendChild(document.createTextNode("Data Export / Import"));
    buttonContainer.appendChild(locData);
    workoutOptions.appendChild(buttonContainer);

    // Add to the page and hide main panel
    document.getElementById('options').replaceWith(workoutOptions);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);

}

function resetWorkout() {
    clearStoredData('workoutData');
    init();
}


