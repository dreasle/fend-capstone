/**
 * DarkSky Library
 * Library for getting weather
 * 
 * @version 1.0.0
 * @author Andrea Lehman
 * 
 * Forecast Request
 * https://api.darksky.net/forecast/[key]/[latitude],[longitude]
 * 
 * Time Machine Request
 * https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
 * time is UNIX time
 **/

class Weather {
    // Make a DarkSky GET Request
    async get(city) {
        const usr = 'dreasle';
        const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${usr}`

        const response = await fetch(url);
        try {
            const resData = await response.json();
            const myResData = {
                lat: resData.geonames[0].lat, 
                long: resData.geonames[0].lng, 
                country: resData.geonames[0].countryCode};
            console.log("resData: ", myResData);
            return myResData;
        } catch(error) {
            console.log("ERROR: ", error);
        }
    }
}

export const weather = new Weather();