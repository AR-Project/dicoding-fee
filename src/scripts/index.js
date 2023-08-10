import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/component/resto-list.js'
import getRandomFood from './component/service/random-food';
import data from '../public/data/DATA.json'
import App from './views/app';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerCloseBtnElement = document.querySelector('#close-btn')
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('#maincontent');

const app = new App({
  drawer: drawerElement,
  hamburgerBtn: hamburgerButtonElement,
  drawerCloseBtn: drawerCloseBtnElement,
  main: mainElement,
})

// @TODO move to pages
const restoList = document.querySelector('resto-list')
const randomFood = document.querySelector('.random-food-container')

restoList.restaurants = data.restaurants;

document.addEventListener('DOMContentLoaded', async () => {
  const { meals } = await getRandomFood();
  const {
    strMeal: mealName,
    strMealThumb: mealPhoto,
    strInstructions: mealDesc,
    strSource: mealSource
  } = meals[0];

  const title = document.createElement('h2');
  title.innerHTML = mealName;

  const foodImage = document.createElement('img');
  foodImage.src = mealPhoto;
  foodImage.alt = mealName;

  const desc = document.createElement('p');
  const excerpt = mealDesc.split(' ');
  desc.innerHTML = excerpt.length > 40 ? excerpt.slice(0, 40).concat(['...']).join(' ') : excerpt;

  const source = document.createElement('a');
  source.innerHTML = 'Selengkapnya'
  source.href = mealSource;
  source.target = '_blank'


  randomFood.append(foodImage, title, desc, source);
})