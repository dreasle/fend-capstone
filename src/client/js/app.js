import { geonames } from './geonames';

function updateCityUI(cityInfo) {
    document.getElementById('lat').innerHTML = `Lat: ${cityInfo.lat}`;
    document.getElementById('long').innerHTML = `Long: ${cityInfo.long}`;
    document.getElementById('state').innerHTML = `State: ${cityInfo.state}`;
    document.getElementById('country').innerHTML = `Country: ${cityInfo.country}`;

}

// Function to run when generate button is clicked
function updateApp(e){
    // Get city info from geonames
    const city =  document.getElementById('zip').value;
    console.log("city: ", city)
    const cityInfo = geonames.get(city)
    .then(cityInfo => updateCityUI(cityInfo))
    .catch(err => console.log(err));
}

export { updateApp }