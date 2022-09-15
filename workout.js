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
    localStorage.setItem(item, JSON.stringify(value, null, 1));
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

// setup swipe handler
let touchstartX = 0
let touchendX = 0
    
function checkDirection(dayNum) {
  //console.log(Math.abs(touchendX - touchstartX))
  if (Math.abs(touchendX - touchstartX) > 50) {
      if (touchendX < touchstartX) browseNext(dayNum); 
      if (touchendX > touchstartX) browsePrevious(dayNum);
  }
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
    
    // Add swipe handlers
    main.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    })
    main.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection(dayNum)
    })

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

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = "right";
    a.href = "javascript:displayTonnageOptions("+dayNum+","+exerNum+")";
    if (typeof exercise.tonnageHistory != 'undefined') {
        var bodyWeight = 0;
        if (typeof workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight != 'undefined' || 
            workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight > 0) {
                bodyWeight = workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight;
        }   
        a.appendChild(document.createTextNode("m:"+ parseInt(exercise.maxHistory[exercise.maxHistory.length-1].equivalentMax-bodyWeight) +
            " v:"+exercise.tonnageHistory[exercise.tonnageHistory.length-1].overallTonnage));
    } else {
        a.appendChild(document.createTextNode("m:- v:-"));
    }
    li.appendChild(a);

    var a = document.createElement('a');
    a.className = "main"
    a.href = "javascript:displayWeightOptions("+dayNum+","+exerNum+")";
    a.appendChild(document.createTextNode(exercise.exerciseName))
    li.appendChild(a);


    ul.appendChild(li);

    for (j in exercise.sets) {
        if (exercise.sets[j].label != "") {
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
    workoutData.currentDay = 0;
    updateStoredData('workoutData', workoutData)
    printHeader(0);
    printMain(0);
}
function clearHistory() {
    var daysToSave = prompt("Clear historical data older than ___ day(s) old. (Enter 0 to clear all history):", "");
    if (daysToSave != null && daysToSave != "" && !isNaN(parseInt(daysToSave))) {
        daysToSave = parseInt(daysToSave); 
        for (dayNum=0; dayNum<workoutData.days.length; dayNum++) { 
            for (exerNum=0;  exerNum<workoutData.days[dayNum].exercises.length; exerNum++) {
                //console.log(dayNum,exerNum)
                clearExerciseHistory(dayNum, exerNum, daysToSave, saveImmediately = false); 
            }
        }
    }
    updateStoredData('workoutData', workoutData)
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

function clearExerciseHistory(dayNum, exerNum, daysToSave, saveImmediately = true) {
    var exercise = workoutData.days[dayNum % workoutData.days.length].exercises[exerNum];
    var thresholdDate = new Date() 
    thresholdDate.setDate(thresholdDate.getDate() - daysToSave)
    //console.log("daysToSave:", daysToSave)
    console.log("thresholdDate:", (thresholdDate))

    if (typeof exercise.tonnageHistory != 'undefined') {
        var testDate = new Date(exercise.tonnageHistory[0].date)
        while (testDate < thresholdDate) {
            console.log("tonnDate:", exercise.tonnageHistory[0].date, "cleared")
            exercise.tonnageHistory.shift()
            if (exercise.tonnageHistory.length) {
                testDate = new Date(exercise.tonnageHistory[0].date)
            }
            else {
                testDate= new Date()
                delete exercise["tonnageHistory"]
            }
        }
    }

    if (typeof exercise.maxHistory != 'undefined') {
        var testDate = new Date(exercise.maxHistory[0].date)
        while (testDate < thresholdDate) {
            console.log("maxDate:", (exercise.maxHistory[0].date), " cleared")
            exercise.maxHistory.shift()
            if (exercise.maxHistory.length) {
                testDate = new Date(exercise.maxHistory[0].date)
            }
            else {
                testDate= new Date()
                delete exercise["maxHistory"]
            }
        }
    }
    workoutData.days[dayNum % workoutData.days.length].exercises[exerNum] = exercise
    if (saveImmediately == true) {
        updateStoredData('workoutData', workoutData)
    }
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
        //displayLocalDataOptions(dayNum);
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
    
    //print each row and one extra for defining new sets
    for (j=0; j<dayData.exercises[exerNum].sets.length+1; j++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = "right";
        var weightInput = document.createElement('input');
        weightInput.style.textAlign = "right";
        weightInput.type = "text";
        weightInput.name = "weight["+j+"]";
        if (j < dayData.exercises[exerNum].sets.length) {
            weightInput.value = dayData.exercises[exerNum].sets[j].weight;
            //console.log(weightInput.value,dayData.exercises[exerNum].sets[j].weight);
        } else {
            weightInput.value = "";
        }
        a.appendChild(weightInput);
        li.appendChild(a);

        var a = document.createElement('a');
        var labelInput = document.createElement('input');
        labelInput.type = "text";
        labelInput.name = "label["+j+"]";
        if (j < dayData.exercises[exerNum].sets.length) {
            labelInput.value = dayData.exercises[exerNum].sets[j].label;
            //a.appendChild(document.createTextNode(dayData.exercises[exerNum].sets[j].label));
        } else {
            labelInput.value = "";
        }
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

    // Cancel
    var cancel = document.createElement('a');
    cancel.className = "black button";
    cancel.href = "javascript:closeOptions();";
    cancel.appendChild(document.createTextNode("Cancel"));
    buttonContainer.appendChild(cancel);

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
    var setsLengthPlusOne = workoutData.days[dayNum].exercises[exerNum].sets.length+1
    // check each row and one additional row for new set definition
    for (i=0; i<setsLengthPlusOne; i++) {
        //console.log("during "+document.forms['updateWeight']['weight['+i+']'].value)
        if (i < workoutData.days[dayNum].exercises[exerNum].sets.length) {
            workoutData.days[dayNum].exercises[exerNum].sets[i].weight = document.forms['updateWeight']['weight['+i+']'].value;
            workoutData.days[dayNum].exercises[exerNum].sets[i].label = document.forms['updateWeight']['label['+i+']'].value;
        } else if (document.forms['updateWeight']['weight['+i+']'].value!="" || document.forms['updateWeight']['label['+i+']'].value!="") {
            workoutData.days[dayNum].exercises[exerNum].sets.push({"Load":document.forms['updateWeight']['weight['+i+']'].value,"label":document.forms['updateWeight']['label['+i+']'].value})
        }
    }
    updateStoredData('workoutData', workoutData);
}


function displayTonnageOptions(dayNum, exerNum, tonnageFormData, rpeFormData) {
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    //console.log(dayData)
    var exercise = dayData.exercises[exerNum];
    var tonnageOutput = [];
    var equivalentCandidate = [];
    var overallTonnage = 0;
    var overallReps = 0;
    var overallSets = 0;
    var equivalentMax = 0;
    var bodyWeight = 0;
    var bodyWeighText = "";
    if (typeof workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight != 'undefined' || 
        workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight > 0) {
            bodyWeight = workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight;
    }
    tonnageUpdate = document.createElement('div')
    tonnageUpdate.id = "options";
    tonnageUpdate.className = "optionpanel";
    tonnageUpdate.style.display = "block"

    // Cancel
    var cancel = document.createElement('a');
    var img = document.createElement('img');
    img.src = "images/cancel.png";
    cancel.appendChild(img);
    cancel.href = "javascript:displayDay("+dayNum+");javascript:closeOptions();";
    //weightUpdate.appendChild(cancel);

    var h2 = document.createElement('h2');
    h2.appendChild(cancel);
    h2.appendChild(document.createTextNode(dayData.dayName));
    tonnageUpdate.appendChild(h2);

    var ul = document.createElement('ul');

    // tonnage
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = "right";
    //a.href = "javascript:promptForBodyWeight("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+")";

    if (typeof exercise.tonnageHistory != 'undefined') {
        a.appendChild(document.createTextNode("m:"+ parseInt(exercise.maxHistory[exercise.maxHistory.length-1].equivalentMax-bodyWeight) +
            " v:"+exercise.tonnageHistory[exercise.tonnageHistory.length-1].overallTonnage));
    } else {
        a.appendChild(document.createTextNode("m:-"+" v:-"));
    }
    li.appendChild(a);


    // Exercise Data
    var a = document.createElement('a')
    a.className = "main";
    a.appendChild(document.createTextNode(exercise.exerciseName));
    li.appendChild(a);
    ul.appendChild(li);        

    //print each row from sets
    for (j=0; j<dayData.exercises[exerNum].sets.length; j++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = "right";
        a.appendChild(document.createTextNode(exercise.sets[j].weight));
        li.appendChild(a);

        var a = document.createElement('a');
        a.appendChild(document.createTextNode(exercise.sets[j].label));
        li.appendChild(a);
   
        ul.appendChild(li)
    }
    tonnageUpdate.appendChild(ul);

    // rpe calc form
    var ul = document.createElement('ul');
    var {form, rpeInput} = createRpeCalcForm(dayNum, exerNum, tonnageFormData, rpeFormData);
    ul.appendChild(form);
    tonnageUpdate.appendChild(ul);

    // tonnage form
    var ul = document.createElement('ul');
    var form = document.createElement('form');
    //form.method = "post";
    //form.action = "javascript:updateForecastSettings(forecastSettings)";
    form.name = "updateTonnage";
    form.addEventListener("change",function (e) 
        {
        //console.log("Form has changed",e,form);
        var sendTonnageFormData = [[0,0,0,0],
                    [0,0,0,0], [0,0,0,0],
                    [0,0,0,0]]; ;
        for (i=0; i<tonnageInput.length; i++) {
            for (j=0; j<tonnageInput[i].length; j++) {
                sendTonnageFormData[i][j] = form.elements["tonnageInput["+i+"]["+j+"]"].value;
            }
        }
        displayTonnageOptions(dayNum, exerNum, sendTonnageFormData);
        }
    );

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

    if (typeof tonnageFormData != 'undefined') {
        var tonnageInput = tonnageFormData
    } else if (typeof exercise.tonnageInput != 'undefined') {
          var tonnageInput = exercise.tonnageInput;
    } else {
          var tonnageInput = [[0,0,0,0],
                    [0,0,0,0], [0,0,0,0],
                    [0,0,0,0]];
    }

    // Update to new tonnage format with 4 rows with Sets Reps RPE Load
    tonnageInput = transformTonnageInput(tonnageInput);
    
    // calculate max and tonnage
    for (i in tonnageInput) {
        var sets = parseInt(tonnageInput[i][0]);
        var reps = parseInt(tonnageInput[i][1]);
        var rpe = parseInt(tonnageInput[i][2]);
        var weight = parseInt(tonnageInput[i][3]) + bodyWeight;

        // Tonnage input boundary enforcement
        reps<0 ? reps=0 : (reps>12 ? reps=12 : reps = reps)
        tonnageInput[i][1] = reps;   

        sets<0 ? sets=0 : (sets>12 ? sets=12 : sets = sets)
        tonnageInput[i][0] = sets;

        rpe<3 ? rpe=3 : (rpe>10 ? rpe=10 : rpe = rpe)
        tonnageInput[i][2] = rpe;

        tonnageOutput[i] = sets * reps * weight;
        overallTonnage = overallTonnage + tonnageOutput[i];
        overallReps = overallReps + (sets * reps);
        overallSets = overallSets + sets;

        // Equivalent Max Calc https://en.wikipedia.org/wiki/One-repetition_maximum Epley formula
        if (sets*reps > 1) {
            //var equivalentCandidate = Math.round(weight * (1 + reps/30), 2);
            equivalentCandidate[i] = Math.round(weight / (rpe_chart[reps][rpe]/100));
        }
        else if (sets*reps == 1) {
            equivalentCandidate[i] = weight;
        }
        else { // no reps
            equivalentCandidate[i] = 0;
        }
        if (equivalentCandidate[i] > equivalentMax) {equivalentMax = equivalentCandidate[i]};
        //console.log("row["+i+"] eqMax "+equivalentCandidate+" tonn: "+tonnageOutput[i]);
    }
    //console.log("overall eqMax: "+equivalentMax);

    // // Tonnage header row
    // var li = document.createElement('li');
    // var a = document.createElement('a');
    // a.className = "table-right";
    // a.appendChild(document.createTextNode("Vol"));
    // li.appendChild(a);

    // var a = document.createElement('a');
    // a.className = "table-right";
    // a.appendChild(document.createTextNode("Max"));
    // li.appendChild(a);

    // var a = document.createElement('a');
    // a.className = "table-left";
    // a.appendChild(document.createTextNode("Sets"));
    // li.appendChild(a);
    
    //  var a = document.createElement('a');
    // a.className = "table-left";
    // a.appendChild(document.createTextNode("Reps"));
    // li.appendChild(a);

    // var a = document.createElement('a');
    // a.className = "table-left";
    // a.appendChild(document.createTextNode("RPE"));
    // li.appendChild(a);

    // li.appendChild(a);   var a = document.createElement('a');
    // a.className = "table-middle";
    // a.appendChild(document.createTextNode("Load"));
    // li.appendChild(a);
    // form.appendChild(li);

    // rows in tonnage matrix
    for (i=0; i<tonnageInput.length; i++){
        var sets = parseInt(tonnageInput[i][0]);
        var reps = parseInt(tonnageInput[i][1]);
        var rpe = parseInt(tonnageInput[i][2]);
        var weight = parseInt(tonnageInput[i][3]) + bodyWeight;

        var li = document.createElement('li')
        var a = document.createElement('a');
        a.className = "table-right";
        if (equivalentCandidate[i] > 0 && reps*sets > 0) {
            var percentOfMax = Math.round(100 * weight / equivalentCandidate[i], 2);
        } else {
            var percentOfMax = 0;
        }

        // a.appendChild(document.createTextNode(tonnageOutput[i])); // +" lbs"));
        // a.id = "tonnageOutput["+i+"]";
        // li.appendChild(a);

        a.appendChild(document.createTextNode(equivalentCandidate[i])); // +" lbs"));
        a.id = "tonnageOutput["+i+"]";
        li.appendChild(a);

        var a = document.createElement('a');
        a.appendChild(document.createTextNode(percentOfMax+"%"));
        a.id = "percentMax["+i+"]";
        a.className = "table-right";
        li.appendChild(a);

        for (j=0; j<tonnageInput[i].length; j++) {
            var a = document.createElement('a');
            if (j==3) {a.className = "table-middle";} else {a.className = "table-left";};
            var tonnageInputField = document.createElement('input');
            tonnageInputField.type = "number";
            tonnageInputField.style.textAlign = "right";
            tonnageInputField.name = "tonnageInput["+i+"]["+j+"]";
            tonnageInputField.value = tonnageInput[i][j];
            tonnageInputField.addEventListener("focus", function() { this.select(); });
            a.appendChild(tonnageInputField);
            li.appendChild(a)
        }

        form.appendChild(li)
    }

    // Tonnage totals row and BW row
    var li = document.createElement('li');
    var bwli = document.createElement('li');

    var a = document.createElement('a');
    a.className = "table-right";
    a.id = "totalTonnage"
    a.appendChild(document.createTextNode(overallTonnage-overallReps*bodyWeight)); // +" lbs"));
    li.appendChild(a);

    var bwa = document.createElement('a');
    bwa.className = "table-right";
    bwa.id = "bwtotalTonnage"
    bwa.appendChild(document.createTextNode(overallTonnage)); // +" lbs"));
    bwa.href = "javascript:promptForBodyWeight("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+")";
    bwli.appendChild(bwa);

    var a = document.createElement('a');
    a.className = "table-right";
    a.id = "eqMax";
    a.appendChild(document.createTextNode("")); // "0 lbs"));
    // if (overallReps>0) {
    //     a.appendChild(document.createTextNode((equivalentMax - bodyWeight))); // +" lbs"));
    // } else {         
    //     a.appendChild(document.createTextNode("0")); // "0 lbs"));
    // }
    li.appendChild(a);

    var bwa = document.createElement('a');
    bwa.className = "table-right";
    bwa.id = "bweqMax";
    if (overallReps>0) {
        bwa.appendChild(document.createTextNode(equivalentMax)); // +" lbs"));
    } else {         
        bwa.appendChild(document.createTextNode("0")); // "0 lbs"));
    }
    bwa.href = "javascript:promptForBodyWeight("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+")";
    bwli.appendChild(bwa);

    var a = document.createElement('a');
    a.className = "table-left";
    a.id = "totalSets";
    a.appendChild(document.createTextNode(overallSets));
    li.appendChild(a);

    var bwa = document.createElement('a');
    bwa.className = "table-left";
    bwa.id = "bwtotalSets";
    bwa.appendChild(document.createTextNode("BW"))
    bwa.href = "javascript:promptForBodyWeight("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+")";
    bwli.appendChild(bwa);

    var a = document.createElement('a');
    a.className = "table-left";
    a.id = "totalReps";
    if (overallSets>0) {
        a.appendChild(document.createTextNode(Math.round(overallReps/overallSets,0)));
    } else {         
        a.appendChild(document.createTextNode("0"));
    }
    li.appendChild(a);

    var a = document.createElement('a');
    a.className = "table-left";
    a.id = "totalRpe";
    a.appendChild(document.createTextNode(""));
    // if (overallSets>0) {
    //     a.appendChild(document.createTextNode(Math.round(overallReps/overallSets,0)));
    // } else {         
    //     a.appendChild(document.createTextNode("0"));
    // }
    li.appendChild(a);

    var bwa = document.createElement('a');
    bwa.className = "table-left";
    bwa.id = "bwtotalReps";   
    bwa.appendChild(document.createTextNode("adj:"));
    bwa.href = "javascript:promptForBodyWeight("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+")";
    bwli.appendChild(bwa);

    var a = document.createElement('a');
    a.className = "table-middle";
    a.id = "avgWeight";
    if (overallReps>0) {
        a.appendChild(document.createTextNode(Math.round(overallTonnage/overallReps,0)-bodyWeight)); // +" lbs"));
    } else {         
        a.appendChild(document.createTextNode("0")); // "0 lbs"));
    }
    li.appendChild(a);

    var bwa = document.createElement('a');
    bwa.className = "table-middle";
    bwa.id = "bwavgWeight";
    if (overallReps>0) {
        bwa.appendChild(document.createTextNode(bodyWeight)); // +" lbs"));
    } else {         
        bwa.appendChild(document.createTextNode("0")); // "0 lbs"));
    }
    bwa.href = "javascript:promptForBodyWeight("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+")";
    bwli.appendChild(bwa);
    
    //form.appendChild(li);  // add roll up for set reps and tonnage 
    //form.appendChild(bwli); //  add roll up with bodyweight
    ul.appendChild(form);
    tonnageUpdate.appendChild(ul);

    // Add graphs to the main page
    var graph = document.createElement('div');
    // graph.id = "options";
    // graph.className = "optionpanel";
    // graph.style.display = "block";

    var ul = document.createElement('ul');
    var li2 = document.createElement('li')
    var plotMaxdiv = document.createElement('div');
    plotMaxdiv.id = 'Max';
    li2.appendChild(plotMaxdiv);
    ul.appendChild(li2);

    var li1 = document.createElement('li')
    var plotTonnagediv = document.createElement('div');
    plotTonnagediv.id = 'Tonnage';
    li1.appendChild(plotTonnagediv);
    ul.appendChild(li1);

    graph.appendChild(ul);
    tonnageUpdate.appendChild(graph)
    
    // Action Buttons
    var buttonContainer = document.createElement('p');

    // Save
    var save = document.createElement('a');
    save.className = "black button";
    save.href = "javascript:updateTonnage("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(rpeInput))+
        ","+encodeURIComponent(JSON.stringify(tonnageInput))+","+equivalentMax+","+overallTonnage+",);displayTonnageOptions("+dayNum+","+exerNum+")";
    save.appendChild(document.createTextNode("Save"));
    buttonContainer.appendChild(save);
    tonnageUpdate.appendChild(buttonContainer);

    // History
    var calc = document.createElement('a');
    calc.className = "black button";
    calc.href = "javascript:displayTonnageHistory("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageInput))+", "+bodyWeight+")";
    calc.appendChild(document.createTextNode("Full History"));
    buttonContainer.appendChild(calc);

    // Clear History
    var clear = document.createElement('a');
    clear.className = "black button";
    clear.href = "javascript:promptForDaysToClear("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageInput))+")";
    clear.appendChild(document.createTextNode("Clear History"));
    buttonContainer.appendChild(clear);

    // Reference
    var calc = document.createElement('a');
    calc.className = "black button";
    calc.href = "Prilepins-Chart.png";
    calc.target = "_blank";
    calc.appendChild(document.createTextNode("Reference"));
    buttonContainer.appendChild(calc);

    // Cancel
    var cancel = document.createElement('a');
    cancel.className = "black button";
    cancel.href = "javascript:displayDay("+dayNum+");javascript:closeOptions();";
    cancel.appendChild(document.createTextNode("Cancel"));
    buttonContainer.appendChild(cancel);

    // Add to the page and hide main panel
    document.getElementById('options').replaceWith(tonnageUpdate);
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    window.scrollTo(0, 0);
   
    // populate the graphs
    if ((typeof exercise.tonnageHistory != 'undefined') && (typeof exercise.maxHistory != 'undefined')) {
        printVerticalStripChart('Tonnage', exercise.tonnageHistory, bodyWeight, equivalentMax, overallTonnage, true);
        printVerticalStripChart('Max', exercise.maxHistory, bodyWeight, equivalentMax, overallTonnage, true);
    }
}
function updateTonnage (dayNum, exerNum, rpeInput, tonnageInput, equivalentMax, overallTonnage) {
    //console.log("update weights" + dayNum + " " + exerNum);
    dayNum = dayNum % workoutData.days.length;
    var logDate = new Date();
    //logDate.setDate(logDate.getDate()-1);
    //console.log("logging: date:"+logDate.toISOString()+" eqMax:"+equivalentMax+" tonnage:"+overallTonnage);
    //console.log(tonnageInput);

    workoutData.days[dayNum].exercises[exerNum].rpeInput = rpeInput;
    workoutData.days[dayNum].exercises[exerNum].tonnageInput = tonnageInput;

    if ((typeof workoutData.days[dayNum].exercises[exerNum].tonnageHistory != 'undefined') && 
        (typeof workoutData.days[dayNum].exercises[exerNum].maxHistory != 'undefined')) {
        var lastIndex = workoutData.days[dayNum].exercises[exerNum].tonnageHistory.length - 1;
        var lastDate = new Date(workoutData.days[dayNum].exercises[exerNum].tonnageHistory[lastIndex].date);
        // if the last log entry was more than an hour ago log a new entry otherwise replace it
        //console.log("last", lastDate, "log", logDate, "diff", (logDate - lastDate));
        if ((logDate - lastDate) > 60*60*1000) { // 60min * 60sec/min * 1000msec/sec
            workoutData.days[dayNum].exercises[exerNum].tonnageHistory.push({date:logDate.toISOString(), overallTonnage:overallTonnage});
            workoutData.days[dayNum].exercises[exerNum].maxHistory.push({date:logDate.toISOString(), equivalentMax:equivalentMax})
        }
        else {
            workoutData.days[dayNum].exercises[exerNum].tonnageHistory[lastIndex] = {date:logDate.toISOString(), overallTonnage:overallTonnage};
            workoutData.days[dayNum].exercises[exerNum].maxHistory[lastIndex]= {date:logDate.toISOString(), equivalentMax:equivalentMax}
        }
        
    } else {
        workoutData.days[dayNum].exercises[exerNum].tonnageHistory = [{date:logDate.toISOString(), overallTonnage:overallTonnage}];
        workoutData.days[dayNum].exercises[exerNum].maxHistory = [{date:logDate.toISOString(), equivalentMax:equivalentMax}];
    }
    updateStoredData('workoutData', workoutData);
}

function createRpeCalcForm(dayNum, exerNum, tonnageFormData, rpeFormData) {

    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    //console.log(dayData)
    var exercise = dayData.exercises[exerNum];

    // rpe form
    var ul = document.createElement('ul');
    var form = document.createElement('form');
    //form.method = "post";
    //form.action = "javascript:updateForecastSettings(forecastSettings)";
    form.name = "updateRpe";
    form.addEventListener("change",function (e) 
        {
        //console.log("Form has changed",e,form);
        var sendRpeFormData = [[0,0,0],
                    [0,0,0]]; ;
        for (i=0; i<2; i++) {
            for (j=0; j<3; j++) {
                sendRpeFormData[i][j] = form.elements["rpeInput["+i+"]["+j+"]"].value;
            }
        }
        displayTonnageOptions(dayNum, exerNum, tonnageFormData, sendRpeFormData);
        }
    );

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

    if (typeof rpeFormData != 'undefined') {
        var rpeInput = rpeFormData
    } else if (typeof exercise.rpeInput != 'undefined') {
          var rpeInput = exercise.rpeInput;
    } else {
          var rpeInput = [[0,0,0],
                    [0,0,0]];
    }

    // calculate max and rpe loading
    var bodyWeight = 0;
    var bodyWeighText = "";
    if (typeof workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight != 'undefined' || 
        workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight > 0) {
            bodyWeight = workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight;
    }

    var rpeReps = parseInt(rpeInput[0][0]);
    var rpeWeight = parseInt(rpeInput[0][2]) + bodyWeight;
    var rpeRpe = parseInt(rpeInput[0][1]);
    var tgtReps = parseInt(rpeInput[1][0]);
    var tgtWeight = parseInt(rpeInput[1][2]) + bodyWeight;
    var tgtRpe = parseInt(rpeInput[1][1]);       

    // RPE boundary enforcement
    rpeReps<1 ? rpeReps=1 : (rpeReps>12 ? rpeReps=12 : rpeReps = rpeReps)
    rpeInput[0][0] = rpeReps;   

    tgtReps<1 ? tgtReps=1 : (tgtReps>12 ? tgtReps=12 : tgtReps = tgtReps)
    rpeInput[1][0] = tgtReps;

    rpeRpe<3 ? rpeRpe=3 : (rpeRpe>10 ? rpeRpe=10 : rpeRpe = rpeRpe)
    rpeInput[0][1] = rpeRpe;

    tgtRpe<3 ? tgtRpe=3 : (tgtRpe>10 ? tgtRpe=10 : tgtRpe = tgtRpe)
    rpeInput[1][1] = tgtRpe;

    var rpeMax = rpeReps*rpeRpe ? (rpeWeight / (rpe_chart[rpeReps][rpeRpe]/100)) : 0 // lifted weight over the rpe table percentage
    var tgtWeight = tgtReps*tgtRpe ? ((rpe_chart[tgtReps][tgtRpe]/100) * rpeMax) : 0// rpeMax * rpe table percentage

    rpeMax = Math.round(rpeMax, 2)
    tgtWeight = Math.round(tgtWeight, 2)
    
    // rpe header row
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = "table-right";
    a.appendChild(document.createTextNode("Max"));
    li.appendChild(a);

    var a = document.createElement('a');
    a.className = "table-right";
    a.appendChild(document.createTextNode("%"));
    li.appendChild(a);

    var a = document.createElement('a');
    a.className = "table-left";
    a.appendChild(document.createTextNode("Sets"));
    li.appendChild(a);

    var a = document.createElement('a');
    a.className = "table-left";
    a.appendChild(document.createTextNode("Reps"));
    li.appendChild(a);
    
     var a = document.createElement('a');
    a.className = "table-left";
    a.appendChild(document.createTextNode("RPE"));
    li.appendChild(a);

    li.appendChild(a);   var a = document.createElement('a');
    a.className = "table-middle";
    a.appendChild(document.createTextNode("Load"));
    li.appendChild(a);
    form.appendChild(li);

    // rows in rpe matrix
    for (i=0; i<2; i++) {

        var li = document.createElement('li')
        if (i==0) {
            displayRightValue = rpeMax // +" lbs"
            displayLeftValue = rpeMax ? Math.round((rpeWeight/rpeMax)*100)+"%" : "0%"
        }
        else {
            displayRightValue =  rpeMax // +" lbs"
            displayLeftValue = tgtReps*tgtRpe ? Math.round(rpe_chart[tgtReps][tgtRpe])+"%" : "0%"               
        }

        var a = document.createElement('a');
        a.className = "table-right";
        a.appendChild(document.createTextNode(displayRightValue));
        a.id = "eqMax";
        li.appendChild(a);

        var a = document.createElement('a');
        a.appendChild(document.createTextNode(displayLeftValue));
        a.id = "rpeMax";
        a.className = "table-right";
        li.appendChild(a);

        if (i==0) {
            displayValue = "Max"
        }
        else {
             displayValue = "Tgt"              
        }
        var a = document.createElement('a');
        a.appendChild(document.createTextNode(displayValue));
        a.id = "set_"+i;
        a.className = "table-left";
        li.appendChild(a);

        for (j=0; j<3; j++) {
            var a = document.createElement('a');
            if (j==2) {a.className = "table-middle";} else {a.className = "table-left";};

            var rpeInputField = document.createElement('input');
            rpeInputField.type = "number";
            rpeInputField.style.textAlign = "right";
            rpeInputField.name = "rpeInput["+i+"]["+j+"]";
            rpeInputField.value = rpeInput[i][j];
            rpeInputField.addEventListener("focus", function() { this.select(); });
            
            if (i==1 && j==2) {
                a.appendChild(document.createTextNode(tgtWeight)); // +" lbs"));
                a.id = "tgtWeight";
                rpeInputField.type = "hidden";
            }
            a.appendChild(rpeInputField);
            li.appendChild(a)
        }
        form.appendChild(li)
    }
    return {form, rpeInput}
}

function promptForBodyWeight(dayNum, exerNum, tonnageFormData) {
    var promptDefault = "";
    if (typeof workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight != 'undefined') {
        promptDefault = workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight;
    }
    var bodyWeight = prompt("Enter your body weight if it is to be used in the calculation:", promptDefault);
    if (bodyWeight != null && bodyWeight != "" && !isNaN(parseInt(bodyWeight))) {
        workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight = parseInt(bodyWeight);
        updateStoredData('workoutData', workoutData);
    }
    //console.log("BW: "+workoutData.days[dayNum % workoutData.days.length].exercises[exerNum].bodyWeight);
    displayTonnageOptions(dayNum, exerNum, tonnageFormData);
}

function promptForDaysToClear(dayNum, exerNum) {
    var daysToSave = prompt("Clear historical data older than ___ day(s) old. (Enter 0 to clear all history):", "");
    if (daysToSave != null && daysToSave != "" && !isNaN(parseInt(daysToSave))) {
        daysToSave = parseInt(daysToSave);
        clearExerciseHistory(dayNum, exerNum, daysToSave);
    }
    //clearExerciseHistory(exercise, daysToSave);
}

function displayTonnageHistory(dayNum, exerNum, tonnageFormData, bodyWeight) {
    if (typeof workoutData.days[dayNum % workoutData.days.length].exercises[exerNum]) {
        var exercise = workoutData.days[dayNum % workoutData.days.length].exercises[exerNum];
        
        var graph = document.createElement('div');
        graph.id = "options";
        graph.className = "optionpanel";
        graph.style.display = "block";

        // Cancel
        var cancel = document.createElement('a');
        var img = document.createElement('img');
        img.src = "images/cancel.png";
        cancel.appendChild(img);
        cancel.href = "javascript:displayTonnageOptions("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+");";
        var h2 = document.createElement('h2');
        h2.appendChild(cancel);
        h2.appendChild(document.createTextNode("\xA0"));
        graph.appendChild(h2);

        var ul = document.createElement('ul');
        var li2 = document.createElement('li')
        var plotMaxdiv = document.createElement('div');
        plotMaxdiv.id = 'Max';
        li2.appendChild(plotMaxdiv);
        ul.appendChild(li2);

        var li1 = document.createElement('li')
        var plotTonnagediv = document.createElement('div');
        plotTonnagediv.id = 'Tonnage';
        li1.appendChild(plotTonnagediv);
        ul.appendChild(li1);

        graph.appendChild(ul);

        // Add to the page and hide main panel
        document.getElementById('options').replaceWith(graph);
        document.getElementById('header').style.display = 'none';
        document.getElementById('main').style.display = 'none';
        window.scrollTo(0, 0);

        if ((typeof exercise.tonnageHistory != 'undefined') && (typeof exercise.maxHistory != 'undefined')) {
            printVerticalStripChart('Tonnage', exercise.tonnageHistory, bodyWeight);
            printVerticalStripChart('Max', exercise.maxHistory, bodyWeight);
        }

        var buttonContainer = document.createElement('p');

        // Cancel
        var cancel = document.createElement('a');
        cancel.className = "black button";
        cancel.href = "javascript:displayTonnageOptions("+dayNum+","+exerNum+","+encodeURIComponent(JSON.stringify(tonnageFormData))+");";
        cancel.appendChild(document.createTextNode("Cancel"));
        buttonContainer.appendChild(cancel);
        graph.appendChild(buttonContainer);

    }
    else {
        displayTonnageOptions(dayNum, exerNum, tonnageFormData);
    }
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

    // Clear History
    var info = document.createElement('a');
    info.className = "black button";
    info.href = "javascript:clearHistory();displayDay(0)";
    info.appendChild(document.createTextNode("Clear History"));
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

function transformTonnageInput(input) {
    var output = [];
    for (var i=0;i<input.length;i++) {
        // if the data has not been updated to include RPE
        if (input[i].length == 3) {
            if (i<4) { // truncate longer data sets to 4 sets
                if (typeof input[i] != 'undefined') {
                    // copy sets and reps then initial rpe to 10 and copy the weight
                   output.push([input[i][0],input[i][1],'10',input[i][2]]) 
                }
                else {
                    output.push([0,0,0,0])
                }
            }
        }
        else {
            // data is in the set, reps, rpe, weight format so just copy it to output
            output.push(input[i])
        }
    }
    // if the data has fewer than 4 sets add sets
    while (output.length < 4) {
        output.push([0,0,0,0]);
    }   
    return output
}


// From https://rpecalculator.com and table from https://articles.reactivetrainingsystems.com/2015/11/29/beginning-rts/
// Customizing: https://articles.reactivetrainingsystems.com/2016/01/06/customizing-your-rpe-chart/
// https://www.exodus-strength.com/forum/viewtopic.php?t=2967

const rpe_chart = {
    1: {
        10: 100,
        9.5: 97.8,
        9: 95.5,
        8.5: 93.9,
        8: 92.2,
        7.5: 90.7,
        7: 89.2,
        6.5: 87.8,
        6: 86.3,
        5.5: 85,
        5: 83.7,
        4.5: 82.4,
        4: 81.1,
        3.5: 79.9,
        3: 78.6
    },
    2: {
        10: 95.5,
        9.5: 93.9,
        9: 92.2,
        8.5: 90.7,
        8: 89.2,
        7.5: 87.8,
        7: 86.3,
        6.5: 85,
        6: 83.7,
        5.5: 82.4,
        5: 81.1,
        4.5: 79.9,
        4: 78.6,
        3.5: 77.4,
        3: 76.2
    },
    3: {
        10: 92.2,
        9.5: 90.7,
        9: 89.2,
        8.5: 87.8,
        8: 86.3,
        7.5: 85,
        7: 83.7,
        6.5: 82.4,
        6: 81.1,
        5.5: 79.9,
        5: 78.6,
        4.5: 77.4,
        4: 76.2,
        3.5: 75.1,
        3: 73.9,
    },
    4: {
        10: 89.2,
        9.5: 87.8,
        9: 86.3,
        8.5: 85,
        8: 83.7,
        7.5: 82.4,
        7: 81.1,
        6.5: 79.9,
        6: 78.6,
        5.5: 77.4,
        5: 76.2,
        4.5: 75.1,
        4: 73.9,
        3.5: 72.3,
        3: 70.7,
    },
    5: {
        10: 86.3,
        9.5: 85,
        9: 83.7,
        8.5: 82.4,
        8: 81.1,
        7.5: 79.9,
        7: 78.6,
        6.5: 77.4,
        6: 76.2,
        5.5: 75.1,
        5: 73.9,
        4.5: 72.3,
        4: 70.7,
        3.5: 69.4,
        3: 68
    },
    6: {
        10: 83.7,
        9.5: 82.4,
        9: 81.1,
        8.5: 79.9,
        8: 78.6,
        7.5: 77.4,
        7: 76.2,
        6.5: 75.1,
        6: 73.9,
        5.5: 72.3,
        5: 70.7,
        4.5: 69.4,
        4: 68,
        3.5: 66.7,
        3: 65.3
    },
    7: {
        10: 81.1,
        9.5: 79.9,
        9: 78.6,
        8.5: 77.4,
        8: 76.2,
        7.5: 75.1,
        7: 73.9,
        6.5: 72.3,
        6: 70.7,
        5.5: 69.4,
        5: 68,
        4.5: 66.7,
        4: 65.3,
        3.5: 64,
        3: 62.6
    },
    8: {
        10: 78.6,
        9.5: 77.4,
        9: 76.2,
        8.5: 75.1,
        8: 73.9,
        7.5: 72.3,
        7: 70.7,
        6.5: 69.4,
        6: 68,
        5.5: 66.7,
        5: 65.3,
        4.5: 64,
        4: 62.6,
        3.5: 61.3,
        3: 59.9
    },
    9: {
        10: 76.2,
        9.5: 75.1,
        9: 73.9,
        8.5: 72.3,
        8: 70.7,
        7.5: 69.4,
        7: 68,
        6.5: 66.7,
        6: 65.3,
        5.5: 64,
        5: 62.6,
        4.5: 61.3,
        4: 59.9,
        3.5: 58.6,
        3: 57.4
    },
    10: {
        10: 73.9,
        9.5: 72.3,
        9: 70.7,
        8.5: 69.4,
        8: 68,
        7.5: 66.7,
        7: 65.3,
        6.5: 64,
        6: 62.6,
        5.5: 61.3,
        5: 59.9,
        4.5: 58.6,
        4: 57.4,
        3.5: 55.9,
        3: 54.5
    },
    11: {
        10: 70.7,
        9.5: 69.4,
        9: 68,
        8.5: 66.7,
        8: 65.3,
        7.5: 64,
        7: 62.6,
        6.5: 61.3,
        6: 59.9,
        5.5: 58.9,
        5: 57.2,
        4.5: 55.8,
        4: 54.5,
        3.5: 53.2,
        3: 51.8
    },
    12: {
        10: 68,
        9.5: 66.7,
        9: 65.3,
        8.5: 64,
        8: 62.6,
        7.5: 61.3,
        7: 59.9,
        6.5: 58.6,
        6: 57.4,
        5.5: 55.9,
        5: 54.5,
        4.5: 53.2,
        4: 51.8,
        3.5: 50.5,
        3: 49.1
    }
}