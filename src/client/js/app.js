import { countdown } from './countdown';
import { ui } from './ui';


function updateApp(event){

    event.preventDefault()

    const tripCity =  document.getElementById('city').value;
    console.log("city: ", tripCity);
    
    const tripDate = new Date(document.getElementById('date').value);
    console.log("tripDate: ", tripDate);

    // Start trip countown
    const daysToTrip = countdown.displayCountdown(tripDate);    
    
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
                ui.updateWeatherUI(res)
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }
    getWeather('http://localhost:8082/weather', {city: tripCity, date: tripDate})

    // Async POST request to get image
    const getImage = async ( url = '', data = {})=>{
        try {
            console.log("data: ", data)
            const response2 = await fetch(url, {
                method: 'POST', 
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(function(res) {
                console.log("here")
                ui.updateImageUI(res)
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }
    console.log("before getImage, tripCity: ", tripCity)
    getImage('http://localhost:8082/image', {city: tripCity})
}

export { updateApp }