import './styles/style.scss'
import { addTrip } from './js/app'

// Event listener for generate click event
console.log('about to add click event listener')
document.getElementById('addtrip').addEventListener('click', addTrip);

export { addTrip }