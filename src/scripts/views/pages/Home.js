import RestaurantApi from "../../data/RestaurantApiSource";

const Home = {
  async render() {
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    const title = document.createElement('h1')
    title.id = 'skiplink-target'
    title.innerHTML = 'Jelajah Isi Piring'

    const desc = document.createElement('p')
    desc.innerHTML = `Kami menampilkan beberapa tempat
    makan yang cocok dengan selera anda.`

    contentElement.append(
      title,
      desc,
      document.createElement('resto-list')
    );

    return contentElement.outerHTML;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.getList();
    const restoList = document.querySelector('resto-list');
    restoList.restaurants = restaurants;

  }
}

export default Home;
