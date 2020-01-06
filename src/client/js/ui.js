class UI {
    updateTripUI(tripInfo) {
        document.getElementById('destination').innerHTML = tripInfo.city
        document.getElementById('tripdate').innerHTML = tripInfo.date
    }

    updateWeatherUI(weatherInfo) {
        document.getElementById('high').innerHTML = `Temp: ${weatherInfo.temp}`
        document.getElementById('summary').innerHTML = `Summary: ${weatherInfo.summary}`
    }

    updateImageUI(imageUrl) {
        document.getElementById('photo').innerHTML = `<img src="${imageUrl.url}">`
    }

    showTrip() {
        document.getElementById("trip").style.display="grid";
    }

    hideTrip() {
        document.getElementById("trip").style.display="none";
    }

    clearForm() {
        console.log("clearForm")
        document.getElementById('city').innerHTML = "Enter city"
        document.getElementById('date').innerHTML = ""
    }

    showForm() {
        document.getElementById("form").style.display="block";
    }

    hideForm() {
        document.getElementById("form").style.display="none";
    }
}

export const ui = new UI();