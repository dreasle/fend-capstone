class UI {
    updateCityUI(cityInfo) {
        document.getElementById('lat').innerHTML = `Lat: ${cityInfo.lat}`;
        document.getElementById('long').innerHTML = `Long: ${cityInfo.long}`;
        document.getElementById('country').innerHTML = `Country: ${cityInfo.country}`;
    }

    updateWeatherUI(weatherInfo) {
        console.log("weatherInfo: ", weatherInfo)
        document.getElementById('high').innerHTML = `Temp: ${weatherInfo.temp}`;
        // document.getElementById('low').innerHTML = `Long: ${weatherInfo.low}`;
        document.getElementById('summary').innerHTML = `Summary: ${weatherInfo.summary}`;
    }
}

export const ui = new UI();