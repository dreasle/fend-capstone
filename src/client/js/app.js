import { displayCountdown } from './countdown'
import { storage } from './storage'
import { ui } from './ui'

// If trip saved in local storage, display it
const appData = storage.getAppData()
if (appData) {
    // Update UI to display city, date and weather
    updateApp(appData)
} else {
    ui.hideTrip()
}

// Add trip
function addTrip(event){
    event.preventDefault()

    const tripCity = document.getElementById('city').value
    const htmlDate = document.getElementById('date').value
    const tripDate = new Date(htmlDate+"T00:00:00")
    const formData = {city: tripCity, date: tripDate}

    // Store data
    storage.setAppData(formData.city, formData.date)
    
    updateApp(formData)
}

// Update app
function updateApp(data){
    // Start trip countown
    const daysToTrip = displayCountdown(data.date)
    
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
    getWeather('http://localhost:8082/weather', data)

    // Async POST request to get image
    const getImage = async ( url = '', data = {})=>{
        try {
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
                if(res){
                    ui.updateImageUI(res)
                }
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }
    getImage('http://localhost:8082/image', {city: data.city})

    // Update UI
    ui.hideForm()
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
        ui.clearForm()
        ui.showForm()
    }
}

export { addTrip, deleteTrip }