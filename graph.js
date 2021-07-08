
    function printVerticalStripChart(divLocation, inputArray) {
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

    for (var i=0; i<inputArray.length; i++) {
        var date = new Date(inputArray[i].date);
        var dateString = date.toISOString().split('T')[0];
        dateString = dateString.split('-');
        var printDate = dateString[1]+'-'+dateString[2]+'-'+dateString[0];
        var printDateLabel = dateString[1]+'/'+dateString[2]
        if (typeof inputArray[i].overallTonnage != 'undefined') {
            dataArray[i] = [date, inputArray[i].overallTonnage];
            labelsArray[i] = ""; //inputArray[i].overallTonnage;
        }
        else if (typeof inputArray[i].equivalentMax != 'undefined') {
            labelsArray[i] = ""; // inputArray[i].equivalentMax;
            dataArray[i] = [date, inputArray[i].equivalentMax];
        }
        // black[i] = [0,dataArray[i][1]]; // zero axis
    }
    // only label the last point
    if (typeof inputArray[0].overallTonnage != 'undefined') {
        labelsArray[labelsArray.length-1] = inputArray[inputArray.length-1].overallTonnage;
    }
    else if (typeof inputArray[0].equivalentMax != 'undefined') {
        labelsArray[labelsArray.length-1] = inputArray[inputArray.length-1].equivalentMax;
    }
   
    var minHeight = 300; //40 + (20 * dataArray.length)

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
                pointLabels: {labels: labelsArray, show: true, location: 'nw', edgeTolerance: -5 },
            }
        ],
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
                pad: 2,
        //         renderer: $.jqplot.CategoryAxisRenderer,
        //         tickOptions: {
        //             //angle: -40,
        //             show: true,
        //         }, 
        //         rendererOptions: {
        //             tickRenderer:$.jqplot.CanvasAxisTickRenderer,
        //         },              
            },
        },
    });

    //console.log(forecastPlot);
    //return slope;
}