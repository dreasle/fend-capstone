import './styles/style.scss'
import { updateApp } from './js/app'

// Event listener for generate click event
console.log('about to add click event listener')
document.getElementById('generate').addEventListener('click', updateApp);

export { updateApp }