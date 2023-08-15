import RestaurantApi from '../../data/RestaurantApiSource';
import { createRestaurantListSkeleton } from '../template/template-creator';

const Home = {
  async render() {
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    const title = document.createElement('h1');
    title.id = 'skiplink-target';
    title.innerHTML = 'Jelajah Isi Piring';

    const desc = document.createElement('p');
    desc.innerHTML = `Kami menampilkan beberapa tempat
    makan yang cocok dengan selera anda.`;

    const restoList = document.createElement('resto-list');
    restoList.restaurants = createRestaurantListSkeleton(20);

    contentElement.append(
      title,
      desc,
      restoList,
    );

    return contentElement.outerHTML;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.getList();
    const restoList = document.querySelector('resto-list');
    restoList.restaurants = restaurants;
  },
};

export default Home;
