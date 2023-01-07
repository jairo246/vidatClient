import { Coordinates } from "../interfaces/requests/GoogleMapsRequest.interface";

const key = "AIzaSyCh53DQ1Df7Hcn9Hh1-cZudsRMeq0FnRWs";
export const urlLocationData = "https://maps.googleapis.com/maps/api/geocode/json?";

export const RequestLocationData = async (coordinates:Coordinates) => {
    const uri = `latlng=${coordinates.latitude},${coordinates.longitude}&sensor=true&key=${key}`

    const data = {
        latlng: `${coordinates.latitude},${coordinates.longitude}`,
        sensor: true,
        key: key
    }

    const requestOptions: RequestInit = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {'Content-Type': 'application/json'},
        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
    };  // parses JSON response into native JavaScript objects

    return await fetch(urlLocationData+uri, requestOptions)
        .then(res => res.json())
        .then(res => {
            return(res.results[0])
        });

}