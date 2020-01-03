class UI {
    updateCityUI(cityInfo) {
        document.getElementById('lat').innerHTML = `Lat: ${cityInfo.lat}`;
        document.getElementById('long').innerHTML = `Long: ${cityInfo.long}`;
        // document.getElementById('state').innerHTML = `State: ${cityInfo.state}`;
        document.getElementById('country').innerHTML = `Country: ${cityInfo.country}`;
    }
}

export const ui = new UI();