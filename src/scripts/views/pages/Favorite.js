import FavoriteRestaurantsIdb from "../../data/FavoriteResto-idb";

const Favorite = {
  async render() {
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.classList.add('content-favorite');

    const title = document.createElement('h1')
    title.id = 'skiplink-target'
    title.innerHTML = 'Yang Kamu Suka'

    const desc = document.createElement('p')
    desc.classList.add('favorite-page-desc')
    desc.innerHTML = `Restoran yang kamu suka, semua disini.`

    contentElement.append(
      title,
      desc,
      document.createElement('resto-list')
    );

    return contentElement.outerHTML;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    const restoList = document.querySelector('resto-list');
    const favoriteDesc = document.querySelector('.favorite-page-desc')
    const contentElement = document.querySelector('.content-favorite')

    restoList.restaurants = restaurants;
    if (restaurants.length == 0) {
      favoriteDesc.innerHTML = 'Yah masih kosong. Tenang. Like restoran yang kamu suka di halaman utama.'
      const backToHome = document.createElement('a');
      backToHome.classList.add('favorite-back-to-home')
      backToHome.href = '#'
      backToHome.innerHTML = 'Kembali ke halaman utama'
      contentElement.append(backToHome)
    }

  }
}

export default Favorite;

