
    function printVerticalStripChart(divLocation, inputArray, bodyWeight) {
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

    for (var i=0; i<inputArray.length; i++) {
        var date = new Date(inputArray[i].date);
        var dateString = date.toISOString().split('T')[0];
        dateString = dateString.split('-');
        var printDate = dateString[1]+'-'+dateString[2]+'-'+dateString[0];
        var printDateLabel = dateString[1]+'/'+dateString[2]
        if (typeof inputArray[i].overallTonnage != 'undefined') {
            dataArray[i] = [date, inputArray[i].overallTonnage];
            labelsArray[i] = ""; //inputArray[i].overallTonnage;
            if (inputArray[i].overallTonnage > yMax || i==0) {yMax = inputArray[i].overallTonnage;}
            if (inputArray[i].overallTonnage < yMin || i==0) {yMin = inputArray[i].overallTonnage;}
        }
        else if (typeof inputArray[i].equivalentMax != 'undefined') {
            labelsArray[i] = ""; // inputArray[i].equivalentMax;
            dataArray[i] = [date, inputArray[i].equivalentMax-bodyWeight];
            if (inputArray[i].equivalentMax-bodyWeight > yMax || i==0) {yMax = inputArray[i].equivalentMax-bodyWeight;}
            if (inputArray[i].equivalentMax-bodyWeight < yMin || i==0) {yMin = inputArray[i].equivalentMax-bodyWeight;}
        }
        // black[i] = [0,dataArray[i][1]]; // zero axis
    }
    // only label the last point
    if (typeof inputArray[0].overallTonnage != 'undefined') {
        labelsArray[labelsArray.length-1] = inputArray[inputArray.length-1].overallTonnage;
    }
    else if (typeof inputArray[0].equivalentMax != 'undefined') {
        labelsArray[labelsArray.length-1] = inputArray[inputArray.length-1].equivalentMax-bodyWeight;
    }
   
    var minHeight = 300; //40 + (20 * dataArray.length)
    var yRange = yMax - yMin;
    if (yRange < 10) {yRange = 10;}
    var yAxisMax = Math.ceil((yMax + 0.2 * yRange)/10) * 10; //10% padding to allow for label
    var yAxisMin = Math.floor((yMin - 0.1 * yRange)/10) * 10; //10% padding to allow for label
    //console.log(dataArray);

    //var plot = $.jqplot(divLocation, [black, dataArray], {
    var plot = $.jqplot(divLocation, [dataArray], {
        height: minHeight,
        title: "<span style='font-size: 14px;'>" + divLocation + "</span>",
        seriesColors: [
            "#0099FF"],
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
                showMarker: true,
                pointLabels: {labels: labelsArray, show: true, location: 'nw'}, // ypadding: 2 }, edgeTolerance: -5,
            },
        ],
        //axesDefaults: {pad:1.5},
        axes: {
            // Use x2axis to put the labels on top
            xaxis: {
                show: true,
                renderer:$.jqplot.DateAxisRenderer,
                //tickInterval:'1 day',
                rendererOptions:{
                    tickRenderer:$.jqplot.CanvasAxisTickRenderer
                },
                tickOptions: {
                   formatString: "%d-%b-%y", 
                   angle: -90,
                },
            },
            yaxis: {
                max:yAxisMax,
                min:yAxisMin           
            },
        },
    });

    //console.log(forecastPlot);
    //return slope;
}