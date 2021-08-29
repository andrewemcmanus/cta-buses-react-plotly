import React from 'react'; 
import ParamSlider from './ParamSlider';


export default function Home({ boardings, alightings, latitudes, longitudes }) {
    return (
        <div>
           <ParamSlider boardings={boardings} alightings={alightings} latitudes={latitudes} longitudes={longitudes} /> 
        </div>
        
    )
} 