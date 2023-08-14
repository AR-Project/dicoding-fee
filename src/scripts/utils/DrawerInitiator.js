const DrawerInitiator = {
  init({
    drawer, hamburgerBtn, drawerCloseBtn, main,
  }) {
    const navigations = document.querySelectorAll('#drawer a');
    navigations.forEach((nav) => {
      nav.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });

    hamburgerBtn.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    drawerCloseBtn.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
