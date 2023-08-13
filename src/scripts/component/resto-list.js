import './resto-item';

class RestoList extends HTMLElement {
  set restaurants(restaurants = []) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((item) => {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.restaurant = item;

      this.appendChild(restoItemElement);
    });
  }
}

customElements.define('resto-list', RestoList);
