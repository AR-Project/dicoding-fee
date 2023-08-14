const loadingScreen = {
  /**
   *
   * @param {HTMLDivElement} main
   */
  show(main) {
    const { scrollTop } = document.documentElement;
    main.append(this._template(scrollTop));

    this._disableScroll(scrollTop);
  },

  remove() {
    document.querySelector('#loading-container-full').remove();
    this._enableScroll();
  },

  _template(scrollTop) {
    const container = document.createElement('section');
    container.id = 'loading-container-full';
    const loadingText = document.createElement('h1');
    loadingText.innerHTML = 'loading';

    container.innerHTML = `${this._spinner}${loadingText.outerHTML}`;
    container.style.top = scrollTop;

    return container;
  },

  _disableScroll(scrollTop) {
    window.onscroll = () => {
      window.scrollTo({
        top: scrollTop,
        behavior: 'instant',
      });
    };
  },

  _enableScroll() {
    window.onscroll = () => {};
  },

  _spinner: `
  <div class="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
};

export default loadingScreen;
