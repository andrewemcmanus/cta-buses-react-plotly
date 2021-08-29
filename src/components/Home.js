import React from 'react'; 
import PageIntro from './PageIntro';
import ParamSlider from './ParamSlider';

export default function Home({ boardings, alightings, latitudes, longitudes }) {
    return (
        <div>
            <PageIntro />
           <ParamSlider boardings={boardings} alightings={alightings} latitudes={latitudes} longitudes={longitudes} /> 
        </div>
    )
} 