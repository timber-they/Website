fetch('https://global-warming.org/api/temperature-api')
.then(response => response.json())
.then(data => {
    console.log(data.result.map(tuple => [parseFloat(tuple.time), getTemp(tuple)]));
    var averageData = data.result
        .filter((el, i) => i >= 12)
        .map((el, i) => 
            ({
                time: el.time, 
                value: data.result
                    .filter((el2, j) => j <= i && i-j < 12)
                    .map(el2 => getTemp(el2))
                    .reduce((prev, current) => prev + current) / 12
            }));
    var plotDataStation = {
        x: data.result.map(tuple => parseFloat(tuple.time)),
        y: data.result.map(tuple => tuple.station),
        mode: 'markers',
        name: 'Station',
        marker: {
            color: 'rgb(92, 92, 92)'
        }
    };
    var plotDataLand = {
        x: data.result.map(tuple => parseFloat(tuple.time)),
        y: data.result.map(tuple => tuple.land),
        mode: 'markers',
        name: 'Land',
        marker: {
            color: 'rgb(191, 190, 190)'
        }
    };
    var plotDataAverage = {
        x: averageData.map(tuple => tuple.time),
        y: averageData.map(tuple => tuple.value),
        mode: 'scatter',
        name: 'Yearly average',
        line: {
            color: 'rgb(219, 64, 82)',
            width: 4
        }
    };
    var layout = {
        plot_bgcolor: "rgba(0,0,0,0)",
        paper_bgcolor: "rgba(0,0,0,0)",
        height: 1000
    };
    Plotly.newPlot('plot', [plotDataLand, plotDataStation, plotDataAverage], layout);
    document.getElementById("content").innerHTML = getTemp(data.result[data.result.length-1]).toFixed(2) + "°C";
});

function getTemp(tuple){
    return (parseFloat(tuple.station) + parseFloat(tuple.land)) / 2;
}
