
    function printVerticalStripChart(divLocation, inputArray, newMax, newTonnage, limitToSixMonths=false) {
    // For horizontal bar charts, x and y values must will be "flipped"
    // from their vertical bar counterpart.
    // Array is an array of JSON objects {date:logDate.toISOString(), balance:newBalance}
    //var Array1 = [[-200.00,"5/3/17"], [-400.00,"5/4/17"], [600,"5/5/17"], [300,"5/6/17"],[700,"5/7/17"],[700,"5/8/17"]];
    //var Array2 =       [[-200.00,"5/9/17"], [-400.00,"5/10/17"], [600,"5/11/17"], [300,"5/12/17"],[700,"5/13/17"],[700,"5/14/17"]];
    //console.log(Array);
    
    //inputArray = inputArray.reverse();
    var dataArray = [];
    var labelsArray = [];
    //var black = [];
    var yMin = 0;
    var yMax = 0; 
    var k = 0;

    for (var i=0; i<inputArray.length; i++) {
        var date = new Date(inputArray[i].date);
        var today = new Date();
        var sixMonthsMilliseconds = (1000*60*60*24*30*6);
        var includeInDataSet = true;
        // if the range is limited to the last 6 months check to see if the date is current enough
        if (limitToSixMonths == true) {
            //console.log("date:"+date.getTime() +" today:" +today.getTime() +" six:"+(today.getTime() - sixMonthsMilliseconds));
            includeInDataSet = false;
            if (date.getTime() > (today.getTime() - sixMonthsMilliseconds)) {
                includeInDataSet = true;
            }
        }
        if (includeInDataSet) {
            var dateString = date.toISOString().split('T')[0];
            dateString = dateString.split('-');
            var printDate = dateString[1]+'-'+dateString[2]+'-'+dateString[0];
            var printDateLabel = dateString[1]+'/'+dateString[2]
            if (typeof inputArray[i].overallTonnage != 'undefined') {
                dataArray[k] = [date, inputArray[i].overallTonnage];
                labelsArray[k] = ""; //inputArray[i].overallTonnage;
                if (inputArray[i].overallTonnage > yMax || k==0) {yMax = inputArray[i].overallTonnage;}
                if (inputArray[i].overallTonnage < yMin || k==0) {yMin = inputArray[i].overallTonnage;}
            }
            else if (typeof inputArray[i].equivalentMax != 'undefined') {
                labelsArray[k] = ""; // inputArray[i].equivalentMax;
                dataArray[k] = [date, inputArray[i].equivalentMax];
                if (inputArray[i].equivalentMax > yMax || k==0) {yMax = inputArray[i].equivalentMax;}
                if (inputArray[i].equivalentMax < yMin || k==0) {yMin = inputArray[i].equivalentMax;}
            }
            k += 1;
            // black[i] = [0,dataArray[i][1]]; // zero axis
        }
    }
    // only label the last point
    if (typeof inputArray[0].overallTonnage != 'undefined') {
        labelsArray[labelsArray.length-1] = inputArray[inputArray.length-1].overallTonnage;
    }
    else if (typeof inputArray[0].equivalentMax != 'undefined') {
        labelsArray[labelsArray.length-1] = inputArray[inputArray.length-1].equivalentMax;
    }

    // Add data for new Max and Tonnage
    var labelsArray1 = [""];
    var dataArray1= []
    dataArray1.push(dataArray[dataArray.length-1])
    var date = new Date();
    var dateString = date.toISOString().split('T')[0];
    dateString = dateString.split('-');
    var printDate = dateString[1]+'-'+dateString[2]+'-'+dateString[0];
    var printDateLabel = dateString[1]+'/'+dateString[2]
    if (typeof inputArray[0].overallTonnage != 'undefined') {
        dataArray1.push([date, newTonnage]);
        labelsArray1[1] = Math.round(newTonnage); //inputArray[i].overallTonnage;
        if (newTonnage > yMax) {yMax = newTonnage;}
        if (newTonnage < yMin) {yMin = newTonnage;}
    }
    else if (typeof inputArray[0].equivalentMax != 'undefined') {
        labelsArray1[1] = Math.round(newMax); // inputArray[i].equivalentMax;
        dataArray1.push([date, newMax]);
        if (newMax > yMax) {yMax = newMax;}
        if (newMax < yMin) {yMin = newMax;}
    }
   
    // Set size of graphs
    var minHeight = 250; //40 + (20 * dataArray.length)
    var yRange = yMax - yMin;
    if (yRange < 10) {yRange = 10;}
    var yAxisMax = Math.ceil((yMax + 0.2 * yRange)/10) * 10; //10% padding to allow for label
    var yAxisMin = Math.floor((yMin - 0.1 * yRange)/10) * 10; //10% padding to allow for label

    var today = new Date()
    var xRange = today.getTime() - dataArray[0][0].getTime()
    var xAxisMax = Math.ceil((today.getTime() + 0.17 * xRange)); //17% padding to allow for label
    //console.log(dataArray);

    //var plot = $.jqplot(divLocation, [black, dataArray], {
    var plot = $.jqplot(divLocation, [dataArray,dataArray1], {
        height: minHeight,
        title: "<span style='font-size: 14px;'>" + divLocation + "</span>",
        seriesColors: [
            "#FF9900", "#0099FF"],
        seriesDefaults: {
            // tell the chart it is oriented horizontally.
            //rendererOptions: {
            //     barDirection: 'vertical',
            //},
            // default to not showing dots at the points
            showMarker: false, 
            // default series to x2axis 
            //xaxis: 'x2axis',
        },
        series: [
            {
                showMarker: false,
                pointLabels: {labels: labelsArray, show: true, location: 'w', formatString: "%d"}, // ypadding: 2 }, edgeTolerance: -5,
            },
            {
            showMarker: true,
                pointLabels: {labels: labelsArray1, show: true, location: 'e', formatString: "%d"}, // ypadding: 2 }, edgeTolerance: -5,
            }
        ],
        //axesDefaults: {pad:1.5},
        axes: {
            // Use x2axis to put the labels on top
            xaxis: {
                show: true,
                max: xAxisMax,
                renderer:$.jqplot.DateAxisRenderer,
                //tickInterval:'1 day',
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer
                },
                tickOptions: {
                   formatString: "%d-%b-%y", 
                   angle: -55,
                },
            },
            yaxis: {
                tickOptions: {
                    formatString: "%d"
                },
                max:yAxisMax,
                min:yAxisMin           
            },
        },
    });

    //console.log(forecastPlot);
    //return slope;
}