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
    console.log("days to trip: ", daysToTrip)
    getWeather('http://localhost:8082/weather', {city: tripCity, date: tripDate})
}

export { updateApp }