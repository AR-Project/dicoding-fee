import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/component/resto-list.js'
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

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

