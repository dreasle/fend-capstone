import './styles/style.scss'
import { addTrip } from './js/app'
import { deleteTrip } from './js/app'

// Event listener for add click event
console.log('about to add click event listener')
document.getElementById('addtrip').addEventListener('click', addTrip);

// Event listener for delete click event
console.log('about to add click event listener')
document.getElementById('deletetrip').addEventListener('click', deleteTrip);

export { addTrip, deleteTrip }