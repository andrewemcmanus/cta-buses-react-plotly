import React from 'react'; 
import Plot from 'react-plotly.js'


export default function Home({ boardings, alightings, latitudes, longitudes }) {
    return (
        <Plot data={[{
            type: "scattergeo",
            locationmode: "USA-states",
            lat: latitudes,
            lon: longitudes,
            hoverinfo: "text",
            // text: hoverText,
            marker: {
                size: boardings,
                line: {
                    color: "black",
                    width: 2
                },
                sizemode: "area",
            }
        }]}/>
    )
    // return (
    //     Object.keys(data).map((i) => (
    //         <div key={data[i].stop_id}>
    //             <ul>Boardings: {parseFloat(data[i].boardings)}</ul>
    //             <ul>Alightings: {parseFloat(data[i].alightings)}</ul>
    //             {/* <ul>Location: {data[i].location}</ul> */}
    //             <ul>Latitude: {GetCoords(data[i], 'latitude')}</ul>
    //             <ul>Longitude: {GetCoords(data[i], 'longitude')}</ul>
    //         </div>
    //     ))
    // )
} 