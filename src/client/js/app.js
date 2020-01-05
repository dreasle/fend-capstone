import { countdown } from './countdown';
// import { geonames } from './geonames';
import { ui } from './ui';


function updateApp(event){

    event.preventDefault()

    const tripCity =  document.getElementById('city').value;
    console.log("city: ", tripCity);
    
    const tripDate = new Date(document.getElementById('date').value);
    console.log("tripDate: ", tripDate);

    // Start trip countown
    countdown.displayCountdown(tripDate);
    

    // THIS IS WHAT SHOULD HAPPEN
    // Get the city info from geonames
    // Then update the city ui
    // Then pass the city info to darksky to get the weather info
    // Then update the weather ui
    
    
    // Async POST request to get city info
    // const getCityInfo = async ( url = '', cityName)=>{
    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST', 
    //             credentials: 'same-origin', 
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: cityName
    //         })
    //         .then(res => res.json())
    //         .then(function(res) {
    //             ui.updateCityUI(res) // send correct data here
    //             // document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
    //             // document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
    //             // document.getElementById('text').innerHTML = `Text: <br>${res.text}`
    //         })
    //     } catch(error) {
    //         console.log("ERROR: ", error)
    //     }
    // }
    // getCityInfo('http://localhost:8082/geonames', tripCity)
    
    
    // Async POST request to get weather
    const getWeather = async ( url = '', data = {})=>{
        try {
            const response = await fetch(url, {
                method: 'POST', 
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(function(res) {
                // ui.updateCityUI(res) // send correct data here
                ui.updateWeatherUI(res)
                // document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
                // document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
                // document.getElementById('text').innerHTML = `Text: <br>${res.text}`
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }
    getWeather('http://localhost:8082/weather', {city: tripCity, date: tripDate})
}


    // Get city info from geonames and update ui
    // const cityInfo = geonames.get(city) // I SHOULD PROB MOVE THIS TO SERVER*******************

    // .then(cityInfo => ui.updateCityUI(cityInfo))
    // .then(weatherInfo => ui.updateWeatherUI(weatherInfo))
    // .then(cityInfo => ui.updateWeatherUI(cityInfo))
    // .then()
    // .catch(err => console.log(err));

    // function getExample() {
    //     // preprocessing
    //     return promiseA(…).then(makeAhandler(…));
    // }
    

// function makeAhandler(…) {
//     return function(resultA) {
//         // some processing
//         return promiseB(…).then(makeBhandler(resultA, …));
//     };
// }
// function makeBhandler(resultA, …) {
//     return function(resultB) {
//         // more processing
//         return // anything that uses the variables in scope
//     };
// }

export { updateApp }