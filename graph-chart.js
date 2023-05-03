var ctx = document.getElementById(divLocation).getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelsArray,
        datasets: [
            {
                label: 'Data Array',
                data: dataArray,
                backgroundColor: '#FF9900',
                borderColor: '#FF9900',
                fill: false,
                yAxisID: 'y-axis-1'
            },
            {
                label: 'Data Array 1',
                data: dataArray1,
                backgroundColor: '#0099FF',
                borderColor: '#0099FF',
                fill: false,
                yAxisID: 'y-axis-1'
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: divLocation,
            fontSize: 14
        },
        legend: {
            display: true,
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        day: 'DD-MMM-YY'
                    },
                    min: xAxisMin,
                    max: xAxisMax,
                },
                ticks: {
                    maxTicksLimit: 10,
                    autoSkip: true,
                    maxRotation: 0,
                    minRotation: 0
                },
            }],
            yAxes: [{
                id: 'y-axis-1',
                position: 'left',
                ticks: {
                    beginAtZero: true,
                    suggestedMax: yAxisMax,
                    suggestedMin: yAxisMin,
                    precision: 0,
                    userCallback: function (value, index, values) {
                        return value.toLocaleString();
                    }
                }
            }]
        }
    }
});
