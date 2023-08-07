import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../public/data/DATA.json'

console.log('Hello Coders! :)');

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerCloseBtnElement = document.querySelector('#close-btn')
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');




hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});


drawerCloseBtnElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})

mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})

data.restaurants.forEach(restaurant => {
  console.log(restaurant.name);
});