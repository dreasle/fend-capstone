import { countdown } from './countdown'
import { storage } from './storage'
import { ui } from './ui'

// appData = [{city: city, state: state, country: country, date: date, img: img}]

// If trip saved in local storage, display it
const appData = storage.getAppData()
console.log("in app, appData: ", appData)

if (appData) {
    // Update UI to display city, date and weather
    // // Start trip countown
    // countdown.displayCountdown(appData.tripdate)
    updateApp(appData)
    // ui.updateTripUI(appData)
    // ui.showTrip()

} else {
    var tripData = {}
}

function addTrip(event){
    event.preventDefault()

    const tripCity =  document.getElementById('city').value
    console.log("city: ", tripCity)
    
    const tripDate = new Date(document.getElementById('date').value)
    console.log("tripDate: ", tripDate)

    const formData = {city: tripCity, date: tripDate}
    console.log("formData: ", formData)

    // Store data
    storage.setAppData(formData.city, formData.date)
    // storage.setAppData(tripCity, state, country, tripDate);
    
    updateApp(formData)
    // ui.updateTripUI(formData)
    // ui.showTrip()
}

function updateApp(data){

    // const tripCity =  document.getElementById('city').value
    // console.log("city: ", tripCity)
    
    // const tripDate = new Date(document.getElementById('date').value)
    // console.log("tripDate: ", tripDate)


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
                console.log("here")
                ui.updateImageUI(res)
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }
    console.log("before getImage, data.city: ", data.city)
    getImage('http://localhost:8082/image', {city: data.city})

    ui.updateTripUI(data)
    ui.showTrip()

}

export { addTrip }