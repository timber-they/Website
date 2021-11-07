fetch('https://global-warming.org/api/temperature-api')
.then(response => response.json())
.then(data => {
    console.log(data.result.map(tuple => [parseFloat(tuple.time), (parseFloat(tuple.station) + parseFloat(tuple.land)) / 2]));
    var plotDataStation = {
        x: data.result.map(tuple => parseFloat(tuple.time)),
        y: data.result.map(tuple => tuple.station),
        type: 'scatter',
        name: 'Station'
    };
    var plotDataLand = {
        x: data.result.map(tuple => parseFloat(tuple.time)),
        y: data.result.map(tuple => tuple.land),
        type: 'scatter',
        name: 'Land'
    };
    var layout = {
        plot_bgcolor: "rgba(0,0,0,0)",
        paper_bgcolor: "rgba(0,0,0,0)"
    }
    Plotly.newPlot('plot', [plotDataStation, plotDataLand], layout);
    document.getElementById("content").innerHTML = getTemp(data.result[data.result.length-1]) + "°C";
});

function getTemp(tuple){
    return (parseFloat(tuple.station) + parseFloat(tuple.land)) / 2;
}
