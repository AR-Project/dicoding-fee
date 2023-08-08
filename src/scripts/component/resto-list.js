import './resto-item.js';

class RestoList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = ''
    this.tabIndex = '0';
    this._restaurants.forEach(item => {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.restaurant = item;

      this.appendChild(restoItemElement);
    });
  }
}

customElements.define('resto-list', RestoList);