import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import DrawerInitiator from "../utils/DrawerInitiator";

class App {
  constructor({ drawer, hamburgerBtn, drawerCloseBtn, main }) {
    this._drawer = drawer;
    this._hamburgerBtn = hamburgerBtn;
    this._drawerCloseBtn = drawerCloseBtn;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      drawer: this._drawer,
      hamburgerBtn: this._hamburgerBtn,
      drawerCloseBtn: this._drawerCloseBtn,
      main: this._main,
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
