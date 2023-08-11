import RestaurantApi from "../../data/RestaurantApiSource";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return document.createElement('resto-detail').outerHTML;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantResult = await RestaurantApi.getDetail(url.id)
    const restaurantDetailElm = document.querySelector('resto-detail');
    restaurantDetailElm.restaurant = restaurantResult
  }
}

export default Detail;
