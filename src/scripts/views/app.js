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
    // TODO
  }

}

export default App;