import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/DrawerInitiator';

class App {
  constructor({
    drawer, hamburgerBtn, drawerCloseBtn, main, loading,
  }) {
    this._drawer = drawer;
    this._hamburgerBtn = hamburgerBtn;
    this._drawerCloseBtn = drawerCloseBtn;
    this._main = main;
    this._loading = loading;

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
    this._showLoading();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._main.innerHTML = await page.render();
      // await this._sleep(1500); // Uncomment for simulate loading
      await page.afterRender();
      this._hideLoading();
    } catch (error) {
      alert('Ada masalah. Silahkan refresh browser anda');
    }
  }

  _sleep(delay) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  _showLoading() {
    this._main.style.display = 'none';
    this._loading.style.display = 'flex';
  }

  _hideLoading() {
    this._main.style.display = 'block';
    this._loading.style.display = 'none';
  }
}

export default App;
