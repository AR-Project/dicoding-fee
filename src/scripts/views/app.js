import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/DrawerInitiator';
import errorSplash from './overlay/error';

class App {
  constructor({
    drawer, hamburgerBtn, drawerCloseBtn, main, loading, skipLinkElem, body,
  }) {
    this._drawer = drawer;
    this._hamburgerBtn = hamburgerBtn;
    this._drawerCloseBtn = drawerCloseBtn;
    this._main = main;
    this._loading = loading;
    this._skipLinkElem = skipLinkElem;
    this._body = body;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      drawer: this._drawer,
      hamburgerBtn: this._hamburgerBtn,
      drawerCloseBtn: this._drawerCloseBtn,
      main: this._main,
    });
  }

  async renderPage() {
    this._preRender();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._main.innerHTML = await page.render();
      // await this._sleep(3000); // Uncomment for simulate loading
      await page.afterRender();
    } catch {
      this._cleanUpFail();
    } finally {
      this._cleanUpAnyway();
    }
  }

  _preRender() {
    errorSplash.remove();
  }

  _cleanUpFail() {
    errorSplash.show(this._main);
  }

  _cleanUpAnyway() {
    window.scrollTo(0, 0);
    this._skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      this._main.focus();
    });
  }

  _sleep(delay) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
}

export default App;
