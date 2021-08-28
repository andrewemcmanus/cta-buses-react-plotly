export default function ParseCoords(input, type) {
    let singlequotes = input;
    let doublequotes = singlequotes.replace(/'/g, '"')
    const jsoninput = JSON.parse(doublequotes);
        // console.log(jsoninput);
    const latitude = parseFloat(jsoninput.latitude);
    const longitude = parseFloat(jsoninput.longitude);
    if (type === 'latitude') {
        return latitude;
    };
    if (type === 'longitude') {
        return longitude;
    };

}