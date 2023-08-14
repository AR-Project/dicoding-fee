import icon from '../template/icons';

const errorSplash = {
  /**
   *
   * @param {HTMLDivElement} main
   */
  show(main, message) {
    main.before(this._template(message));
  },

  remove() {
    if (document.getElementById('error-splash')) {
      document.getElementById('error-splash').remove();
    }
  },

  _template(message = 'Refresh browser anda') {
    const container = document.createElement('section');
    container.id = 'error-splash';
    const header = document.createElement('h1');
    header.innerHTML = 'Error';
    const desc = document.createElement('p');
    desc.innerText = message;

    container.innerHTML = `${icon.error}${header.outerHTML}${desc.outerHTML}`;

    return container;
  },
};

export default errorSplash;
