import Slider from "rc-slider";
import "rc-slider/assets/index.css"
import { useState } from "react";
import Plots from "./Plots";

export default function ParamSlider({ boardings, alightings, latitudes, longitudes }) {
    const [ scale, setScale ] = useState(0.01);
    return (
        <div>
            <Slider min={1} max={20} onChange={(e) => {
                setScale( e / 100 );
            }} />
            <Plots boardings={boardings.map((i) => (i * scale))} alightings={alightings.map((i) => (i * scale))} latitudes={latitudes} longitudes={longitudes} />
        </div>
    )
}