import { countdown } from './countdown'
import { storage } from './storage'
import { ui } from './ui'

// If trip saved in local storage, display it
const appData = storage.getAppData()
if (appData) {
    // Update UI to display city, date and weather
    updateApp(appData)
}

// Add trip
function addTrip(event){
    event.preventDefault()

    const tripCity = document.getElementById('city').value
    const tripDate = new Date(document.getElementById('date').value)
    const formData = {city: tripCity, date: tripDate}

    // Store data
    storage.setAppData(formData.city, formData.date)
    
    updateApp(formData)
}

// Update app
function updateApp(data){
    // Start trip countown
    const daysToTrip = countdown.displayCountdown(data.date)
    
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
    getWeather('http://localhost:8082/weather', {city: data.city, date: data.tripdate})

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
                console.log("res: ", res)
                if(res){
                    ui.updateImageUI(res)
                }
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }
    console.log("before getImage, data.city: ", data.city)
    getImage('http://localhost:8082/image', {city: data.city})

    // Update UI
    ui.updateTripUI(data)
    ui.showTrip()

}

// Delete trip
function deleteTrip(event){
    event.preventDefault()

    // Show confirmation alert
    if (confirm("Are you sure?")) {
        ui.hideTrip()
        storage.clearAppData()
    }
}

export { addTrip, deleteTrip }