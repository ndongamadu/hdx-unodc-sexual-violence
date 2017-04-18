// $.get('data/heatmapdata.csv', function(data) {
//     // Split the lines
//     var lines = data.split('\n');
//
//     // Iterate over the lines and add categories or series
//     $.each(lines, function(lineNo, line) {
//         var items = line.split(',');
//
//         // header line containes categories
//         if (lineNo == 0) {
//             $.each(items, function(itemNo, item) {
//                 if (itemNo > 0) options.xAxis.categories.push(item);
//             });
//         }
//
//         // the rest of the lines contain data with their name in the first
//         // position
//         else {
//             var series = {
//                 data: []
//             };
//             $.each(items, function(itemNo, item) {
//                 if (itemNo == 0) {
//                     series.name = item;
//                 } else {
//                     series.data.push(parseFloat(item));
//                 }
//             });
//
//             options.series.push(series);
//
//         }
//
//     });
//
//     // Create the chart
//     var chart = new Highcharts.Chart(options);
// });
Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 110,
        plotBorderWidth: 1
    },


    title: {
        text: 'United Nations Office on Drugs and Crime | Sexual violence'
    },

    xAxis: {
        categories: cat,
    },

    yAxis: {
        categories: ['2003','2004','2005','2006','2007','2008','2009','2010','2011'],
        title: null
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b><br><b>' +
                this.point.value + '</b> SV cases in <br>'+this.series.yAxis.categories[this.point.y];
        }
    },

    series: [{
        name: 'SV number',
        borderWidth: 1,
        data : datas,
				dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }]

});
