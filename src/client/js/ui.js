class UI {
    updateTripUI(tripInfo) {
        console.log("tripInfo: ", tripInfo)
        document.getElementById('destination').innerHTML = tripInfo.city
        document.getElementById('tripdate').innerHTML = tripInfo.date
    }

    updateWeatherUI(weatherInfo) {
        console.log("weatherInfo: ", weatherInfo)
        document.getElementById('high').innerHTML = `Temp: ${weatherInfo.temp}`
        // document.getElementById('low').innerHTML = `Long: ${weatherInfo.low}`
        document.getElementById('summary').innerHTML = `Summary: ${weatherInfo.summary}`
    }

    updateImageUI(imageUrl) {
        console.log("imageUrl: ", imageUrl)
        document.getElementById('photo').innerHTML = `<img src="${imageUrl.url}">`
    }

    showTrip() {
        document.getElementById("trip").style.display="block";
    }
}

export const ui = new UI();