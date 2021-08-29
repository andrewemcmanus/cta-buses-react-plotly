import { useEffect, useState } from "react";
import ParseCoords from "./parseCoords";
import Papa from "papaparse";

// import function that adjusts scaling, color? that's used by event handler in slider
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
            for (let i = 0; i < locs.length; i++) {
                if (!locs[i]) {
                    lats.push('');
                    longs.push('');
                } else {
                    lats.push(ParseCoords(locs[i], 'latitude'));
                    longs.push(ParseCoords(locs[i], 'longitude'));
                }
            }
            setBoardings(boards);
            setAlightings(alights);
            setLatitudes(lats);
            setLongitudes(longs);
        }
        busData();
        
    }, []);
    const busData = { boardings: boardings, alightings: alightings, latitudes: latitudes, longitudes: longitudes };
    // console.log(busData);        
    return busData;
} 
