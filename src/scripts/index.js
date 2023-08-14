import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/resto-detail.css';
import '../styles/overlay.css';
import './component/resto-list';
import './component/resto-detail';
import swRegister from './utils/sw-register';
import App from './views/app';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerCloseBtnElement = document.querySelector('#close-btn');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('#maincontent');
const loading = document.querySelector('#loading-container');
const skipLinkElem = document.querySelector('.skip-link');

const app = new App({
  drawer: drawerElement,
  hamburgerBtn: hamburgerButtonElement,
  drawerCloseBtn: drawerCloseBtnElement,
  main: mainElement,
  loading,
  skipLinkElem,
  body: document.body,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
