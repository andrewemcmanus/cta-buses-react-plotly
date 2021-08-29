import React from 'react'; 
import Plot from 'react-plotly.js'

export default function Plots({ boardings, alightings, latitudes, longitudes }) {
    if (!boardings || !alightings || !latitudes || !longitudes) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div>
                <Plot data={[{
                type: "scattergeo",
                locationmode: "USA-states",
                lat: latitudes,
                lon: longitudes,
                hoverinfo: "text",
                // text: hoverText,
                marker: {
                    size: boardings,
                    color: "blue",
                    line: {
                        color: "black",
                        width: 0.5
                    },
                    sizemode: "area",
                }
            }]} layout={{
                title: 'Oct 2012 Average Weekday Bus Boardings',
                showlegend: false,
                geo: {
                    fitbounds: 'locations',
                    // control ability to zoom after confining to fitbounds?
                    scope: 'usa',
                    projection: {
                        type: 'albers usa'
                    },
                    showland: true,
                    landcolor: 'rgb(217, 217, 217)',
                    subunitwidth: 1,
                    countrywidth: 1,
                    subunitcolor: 'rgb(255,255,255)',
                    countrycolor: 'rgb(255,255,255)'
                },
            }} />
            <Plot data={[{
                type: "scattergeo",
                locationmode: "USA-states",
                lat: latitudes,
                lon: longitudes,
                hoverinfo: "text",
                // text: hoverText,
                marker: {
                    size: alightings,
                    color: "red",
                    line: {
                        color: "black",
                        width: 0.5
                    },
                    sizemode: "area",
                }
            }]} layout={{
                title: 'Oct 2012 Average Weekday Bus Alightings',
                showlegend: false,
                geo: {
                    fitbounds: 'locations',
                    // control ability to zoom after confining to fitbounds?
                    scope: 'usa',
                    projection: {
                        type: 'albers usa'
                    },
                    showland: true,
                    landcolor: 'rgb(217, 217, 217)',
                    subunitwidth: 1,
                    countrywidth: 1,
                    subunitcolor: 'rgb(255,255,255)',
                    countrycolor: 'rgb(255,255,255)'
                },
            }} />
            </div>
            
        )
    }
    
} 