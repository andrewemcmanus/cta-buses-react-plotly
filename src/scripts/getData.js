import { useEffect, useState } from "react";
import ParseCoords from "./parseCoords";
import Papa from "papaparse";


export default function GetBusData() {
    const [ boardings, setBoardings ] = useState([]);
    const [ alightings, setAlightings ] = useState([]);
    const [ latitudes, setLatitudes ] = useState([]);
    const [ longitudes, setLongitudes ] = useState([]);
    useEffect(() => {
        const busData = async () => {
                    const res = await fetch(
                'https://gist.githubusercontent.com/andrewemcmanus/4afc26c12341ac5f07231f08e705bd05/raw/dbfd87da3f68f8d50df0b72c61d6777f08aaba72/stop_id-board-alight-location.csv')
            // console.log(res.body);
            const reader = res.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value) // the csv text
            const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
            const rows = results.data // array of objects
            console.log(rows);
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }

            // const stop_ids = unpack(rows, 'stop_id');
            const boards = unpack(rows, 'boardings');
            const alights = unpack(rows, 'alightings');
            const locs = unpack(rows, 'location');
            const lats = [];
            const longs = [];
            const scaleboards = [];
            const scalealights =[];
            for (let i = 0; i < boards.length; i++) {
                scaleboards.push(boards[i] * 0.05);
            };
            for (let i = 0; i < alights.length; i++) {
                scalealights.push(alights[i] * 0.05);
            }
                // latitude = GetCoords(location, 'latitude');
                // longitude = GetCoords(location, 'longitude');
                // color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
                // citySize = [],
                // hoverText = [],
                // scale = 50000;
            for (let i = 0; i < locs.length; i++) {
                if (!locs[i]) {
                    lats.push('');
                    longs.push('');
                } else {
                    lats.push(ParseCoords(locs[i], 'latitude'));
                    longs.push(ParseCoords(locs[i], 'longitude'));
                }
            }
            setBoardings(scaleboards);
            setAlightings(scalealights);
            setLatitudes(lats);
            setLongitudes(longs);
        }
        busData();
        // csv('https://gist.githubusercontent.com/andrewemcmanus/4afc26c12341ac5f07231f08e705bd05/raw/dbfd87da3f68f8d50df0b72c61d6777f08aaba72/stop_id-board-alight-location.csv', function(err, rows){

        //     function unpack(rows, key) {
        //         return rows.map(function(row) { return row[key]; });
        //     }

        //     // const stop_ids = unpack(rows, 'stop_id');
        //     const boards = unpack(rows, 'boardings');
        //     const alights = unpack(rows, 'alightings');
        //     const locs = unpack(rows, 'location');
        //     const lats = [];
        //     const longs = [];
        //         // latitude = GetCoords(location, 'latitude');
        //         // longitude = GetCoords(location, 'longitude');
        //         // color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        //         // citySize = [],
        //         // hoverText = [],
        //         // scale = 50000;
        //     for (let i = 0; i < locs.length; i++) {
        //         if (!locs[i]) {
        //             lats.push('');
        //             longs.push('');
        //         } else {
        //             lats.push(ParseCoords(locs[i], 'latitude'));
        //             longs.push(ParseCoords(locs[i], 'longitude'));
        //         }
        //     }


    
    

            // for ( var i = 0 ; i < cityPop.length; i++) {
            //     var currentSize = cityPop[i] / scale;
            //     var currentText = cityName[i] + " pop: " + cityPop[i];
            //     citySize.push(currentSize);
            //     hoverText.push(currentText);
            // }

    // useEffect(() => {
            

    //         // var layout = {
    //         //     title: '2014 US City Populations',
    //         //     showlegend: false,
    //         //     geo: {
    //         //         scope: 'usa',
    //         //         projection: {
    //         //             type: 'albers usa'
    //         //         },
    //         //         showland: true,
    //         //         landcolor: 'rgb(217, 217, 217)',
    //         //         subunitwidth: 1,
    //         //         countrywidth: 1,
    //         //         subunitcolor: 'rgb(255,255,255)',
    //         //         countrycolor: 'rgb(255,255,255)'
    //         //     },
    //         // };

    //         // Plotly.newPlot("myDiv", data, layout, {showLink: false});

    //         // });

    
        //     setBoardings(boards);
        //     setAlightings(alights);
        //     setLatitudes(lats);
        //     setLongitudes(longs);
    // }, [])
    }, []);
    const busData = { boardings: boardings, alightings: alightings, latitudes: latitudes, longitudes: longitudes };
    console.log(busData);        
    return busData;
} 
