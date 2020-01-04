class UI {
    updateCityUI(cityInfo) {
        document.getElementById('lat').innerHTML = `Lat: ${cityInfo.lat}`;
        document.getElementById('long').innerHTML = `Long: ${cityInfo.long}`;
        document.getElementById('country').innerHTML = `Country: ${cityInfo.country}`;
    }

    updateWeatherUI(weatherInfo) {
        document.getElementById('high').innerHTML = `Lat: ${weatherInfo.high}`;
        document.getElementById('low').innerHTML = `Long: ${weatherInfo.low}`;
        document.getElementById('summary').innerHTML = `Country: ${weatherInfo.summary}`;
    }
}

export const ui = new UI();