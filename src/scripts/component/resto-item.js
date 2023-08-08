class RestoItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.tabIndex = '0';
    this.render();
  }

  render() {
    const description = this._restaurant.description.split(' ').slice(0, 20).concat(['...']).join(' ')


    this.innerHTML = `
    <img 
      class="resto-item-img" 
      src="${this._restaurant.pictureId}" 
      alt="Foto lokasi ${this._restaurant.name}"
    />
    <div class="rating">&bigstar;${this._restaurant.rating}
    </div>
    <div class="name">${this._restaurant.name}</div>
    <div class="city">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
      ${this._restaurant.city}
    </div>
    <div class="desc">${description}</div>
    `;
  }
}

customElements.define('resto-item', RestoItem);
