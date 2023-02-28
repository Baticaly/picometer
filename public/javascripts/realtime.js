// var options = {
//     series: [{
//         name: "Desktops",
//         data: [10, 41, 35, 51, 10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 41, 35, 51, 49, 62, 69, 91, 148, 49, 62, 69, 91, 148]
//     }],
//     chart: {
//         id: 'chart1',
//         group: 'social',
//         height: 150,
//         type: 'area',
//         zoom: {
//             type: 'x',
//             enabled: true,
//             autoScaleYaxis: true
//         },
//         toolbar: {
//             autoSelected: 'zoom'
//         }
//     },
//     dataLabels: { enabled: false },
//     stroke: { curve: 'straight' },
//     title: {
//         text: 'Product Trends by Month',
//         align: 'left'
//     },
//     fill: {
//         type: 'gradient',
//         gradient: {
//             shadeIntensity: 1,
//             inverseColors: false,
//             opacityFrom: 0.5,
//             opacityTo: 0,
//             stops: [0, 90, 100]
//         },
//     },
//     grid: {
//         row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//         },
//     },
//     tooltip: { enabled: false }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();

// var options2 = {
//     series: [{
//         name: "Desktops",
//         data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 41, 35, 51, 49, 62, 69, 91, 148]
//     }],
//     chart: {
//         id: 'chart2',
//         group: 'social',
//         height: 150,
//         type: 'area',
//         zoom: {
//             type: 'x',
//             enabled: true,
//             autoScaleYaxis: true
//         },
//         toolbar: {
//             autoSelected: 'zoom',
//             tools: { pan: false }
//         }
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: { curve: 'straight' },
//     title: {
//         text: 'Product Trends by Month',
//         align: 'left'
//     },
//     fill: {
//         type: 'gradient',
//         gradient: {
//             shadeIntensity: 1,
//             inverseColors: false,
//             opacityFrom: 0.5,
//             opacityTo: 0,
//             stops: [0, 90, 100]
//         },
//     },
//     grid: {
//         row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//         },
//     },
//     tooltip: { enabled: false }
// };

// var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
// chart2.render();


function generateMinuteWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y =
            (Math.sin(i / trigoStrength) * (i / trigoStrength) +
                i / trigoStrength +
                1) *
            (trigoStrength * 2);

        series.push([x, y]);
        baseval += 300000;
        i++;
    }
    return series;
}

var trigoStrength = 3;