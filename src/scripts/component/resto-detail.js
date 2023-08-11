import icon from '../views/template/icons';

class RestoDetail extends HTMLElement {
  set restaurant(restaurantDetail = {}) {
    this._restaurantDetail = restaurantDetail;
    this.tabIndex = '0';
    this.render();
  }

  render() {
    const {
      pictureId, categories, name,
      rating, address, description,
      city, menus, customerReviews,
    } = this._restaurantDetail;

    const divMaker = (className, content) => {
      const div = document.createElement('div');
      div.classList.add(className);
      div.innerHTML = content;
      return div;
    };

    const customersReviews = () => {
      const reviewsContainer = document.createElement('div');
      reviewsContainer.classList.add('reviews-container');
      const title = document.createElement('h3');
      title.innerHTML = ' Review Pengunjung';
      reviewsContainer.append(title);

      customerReviews.forEach((review) => {
        const singleReview = document.createElement('div');
        singleReview.classList.add('review');
        singleReview.append(
          divMaker('name', review.name),
          divMaker('date', review.date),
          divMaker('review', review.review),
        );
        reviewsContainer.append(singleReview);
      });
      return reviewsContainer.outerHTML;
    };

    const categoryElm = () => {
      let result = '';
      categories.forEach((c) => {
        result += divMaker('category', `#${c.name}`).outerHTML;
      });
      return result;
    };

    this.innerHTML = `
      <h1 class="name">${name}</h1>
      <div class="rating">${icon.star}  ${rating}</div>
      <div class="address">
      ${address}, ${city}
      </div>
      <img 
        class="resto-item-img"
        src="${pictureId}"
        alt="Foto lokasi dari ${name}" />
      <div class="desc">${description}</div>
      <div class="menu-container">
        <h2>Menu</h2>
        ${this._itemMenuGenerator('food', menus)}
        ${this._itemMenuGenerator('drink', menus)}
      </div>
      <div class="categories-container">
        ${categoryElm()}
      </div>
      ${customersReviews()}
    `;
    // @TODO add favorite Button
    // @TODO add review form
  }

  _itemMenuGenerator(type, menus) {
    const itemMenuList = document.createElement('ul');
    menus[`${type}s`].forEach((item) => {
      const list = document.createElement('li');
      list.innerHTML = item.name;
      itemMenuList.append(list);
    });

    const itemMenuElm = document.createElement('div');
    itemMenuElm.classList.add(type);

    itemMenuElm.append(itemMenuList);

    return itemMenuElm.outerHTML;
  }
}

customElements.define('resto-detail', RestoDetail);
