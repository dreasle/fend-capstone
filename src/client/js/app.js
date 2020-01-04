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
    
    // THIS IS WHAT SHOULD HAPPEN
    // Get the city info from geonames
    // Then update the city ui
    // Then pass the city info to darksky to get the weather info
    // Then update the weather ui


    // Get city info from geonames and update ui
    const cityInfo = geonames.get(city) // I SHOULD PROB MOVE THIS TO SERVER*******************
    .then(cityInfo => ui.updateCityUI(cityInfo))
    // .then(weatherInfo => ui.updateWeatherUI(weatherInfo))
    .catch(err => console.log(err));

    console.log('cityInfo:', cityInfo)
}

export { updateApp }