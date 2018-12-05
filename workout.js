var workoutDay = 0;
var workoutData = {};

function readStoredData() {
    workoutDay = JSON.parse(localStorage.getItem("workoutDay"));
    workoutData = JSON.parse(localStorage.getItem("workoutData"));
    console.log ("readStoredData");
    console.log (workoutDay, workoutData);
}

function updateStoredData(item, value) {
    localStorage.setItem(item, JSON.stringify(value));
}

function initializeStoredData () {

  if (localStorage.getItem('workoutData')) {
    //console.log('found stored workoutData');
  }
  else {
    //console.log('create default workoutData');
    localStorage.setItem('workoutData', workoutJson);
  }


  if (localStorage.getItem('workoutDay')) {
    //console.log('found stored workoutDay');
  }
  else {
    //console.log('create default workoutDay');
    localStorage.setItem('workoutDay', workoutDay);
  }
}

function init () {
    initializeStoredData();
    readStoredData();
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
        dayNum = workoutDay;
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
    secondButton.href="javascript:resetApp();";
    secondButton.appendChild(document.createTextNode("Reset"));
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
        dayNum = workoutDay;
    }
    //console.log("dayNum = " + dayNum);
    readStoredData();

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
    workoutName.href = workoutData.url;
    workoutName.target = "_blank";
    workoutName.className = "main";
    workoutName.appendChild(document.createTextNode(workoutData.workoutName));
    workoutLi.appendChild(workoutName);

    var dayNumber = document.createElement('a');
    dayNumber.className = "right";
    dayNumber.href = workoutData.url;
    dayNumber.target = "_blank";
    var printDay = dayNum+1;
    dayNumber.appendChild(document.createTextNode("Day " + printDay))
    workoutLi.appendChild(dayNumber);

    var dayName = document.createElement('a');
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    dayName.href = workoutData.url;
    dayName.target = "_blank";
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
    //a.href = "";
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
        //a.href = "";
        a.appendChild(document.createTextNode(exercise.sets[j].label))
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
}

function completeDay(dayNum) {
    //console.log("Complete");
    updateStoredData('workoutDay', dayNum+1)
    printHeader(dayNum+1);
    printMain(dayNum+1);
}
function resetApp() {
    //console.log("Reset");
    updateStoredData('workoutDay', 0)
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
function displayWeightOptions(dayNum, exerNum) {
    console.log(workoutData)
    var dayData = workoutData.days[dayNum%(workoutData.days.length)];
    console.log(dayData)

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
    weightUpdate.appendChild(cancel);

    var h2 = document.createElement('h2');
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
    a.className = "main";
    a.appendChild(document.createTextNode(dayData.exercises[exerNum].exerciseName));
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
        console.log(weightInput.value,dayData.exercises[exerNum].sets[j].weight);
        a.appendChild(weightInput);
        li.appendChild(a);

        var a = document.createElement('a');
        a.appendChild(document.createTextNode(dayData.exercises[i].sets[j].label))
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
    save.href = "javascript:updateWeights("+dayNum+","+exerNum+");printHeader();printMain("+dayNum+");closeOptions()";
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
    console.log("update weights" + dayNum + " " + exerNum);
    dayNum = dayNum%7;
    for (i in workoutData.days[dayNum].exercises[exerNum].sets) {
        console.log("before "+workoutData.days[dayNum].exercises[exerNum].sets[i].weight)
        console.log("during "+document.forms['updateWeight']['weight['+i+']'].value)
        workoutData.days[dayNum].exercises[exerNum].sets[i].weight = document.forms['updateWeight']['weight['+i+']'].value;
        updateStoredData('workoutData', workoutData)
        console.log("after  "+workoutData.days[dayNum].exercises[exerNum].sets[i].weight)
    }
}
function closeOptions() {
    document.getElementById('header').style.display = 'block';
    document.getElementById('main').style.display = 'block';
    document.getElementById('options').style.display = 'none';
}