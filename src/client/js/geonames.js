/**
 * Geonames Library
 * Library for getting location coordinates from City names
 * 
 * @version 1.0.0
 * @author Andrea Lehman
 * 
 * 
 **/

class Geonames {
    
    // Make a Geonames API GET Request
    async get(city) {
        const usr = 'dreasle';
        const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${usr}`

        const response = await fetch(url);
        try {
            const resData = await response.json();
            const myResData = {
                lat: resData.geonames[0].lat, 
                long: resData.geonames[0].lng, 
                state: resData.geonames[0].adminCode1,
                country: resData.geonames[0].countryCode};
            console.log("resData: ", myResData);
            return myResData;
        } catch(error) {
            console.log("ERROR: ", error);
        }
    }
}

export const geonames = new Geonames();