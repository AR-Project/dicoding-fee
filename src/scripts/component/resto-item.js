import icon from '../views/template/icons';

class RestoItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      id: restaurantId, pictureUrlSmall, name, rating, city,
    } = this._restaurant;
    const description = this._restaurant.description.split(' ').slice(0, 20).concat(['...']).join(' ');

    this.innerHTML = `
      <a href="#/detail/${restaurantId}">
        <img 
          class="resto-item-img" 
          src="${pictureUrlSmall}" 
          alt="Foto lokasi ${name}"
          loading="lazy"
        />
        <div class="rating">${icon.star}${rating}</div>
        <div class="name"><h3>${name}</h3></div>
        <div class="city">${icon.map}${city}</div>
        <div class="desc">${description}</div>
      </a>
      `;
  }
}

customElements.define('resto-item', RestoItem);
