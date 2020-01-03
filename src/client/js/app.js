import { geonames } from './geonames';
import { countdown } from './countdown';
import { ui } from './ui';

function updateApp(e){
    const city =  document.getElementById('city').value;
    console.log("city: ", city);
    
    const tripDate = new Date(document.getElementById('date').value);
    console.log("tripDate: ", tripDate);

    // Start trip countown
    countdown.displayCountdown(tripDate);
    
    // Get city info from geonames and update ui
    const cityInfo = geonames.get(city)
    .then(cityInfo => ui.updateCityUI(cityInfo))
    .catch(err => console.log(err));
}

export { updateApp }