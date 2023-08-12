import RestaurantApi from '../../data/RestaurantApiSource';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/LikeButtonInitiator';
import ReviewFormInitiator from '../../utils/ReviewFormInitiator';
import { reviewFormTemplate } from '../template/template-creator';

const Detail = {
  async render() {
    const restoDetail = document.createElement('resto-detail');
    const likeButtonContainer = document.createElement('div');
    likeButtonContainer.id = 'like-button-container';

    return `
      ${restoDetail.outerHTML}
      ${likeButtonContainer.outerHTML}
      ${reviewFormTemplate()}
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantResult = await RestaurantApi.getDetail(url.id);
    const restaurantDetailElm = document.querySelector('resto-detail');
    restaurantDetailElm.restaurant = restaurantResult;

    ReviewFormInitiator.init({
      id: restaurantResult.id,
      form: document.querySelector('#review-form'),
      element: restaurantDetailElm,
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      restaurant: {
        id: restaurantResult.id,
        name: restaurantResult.name,
        city: restaurantResult.city,
        pictureId: restaurantResult.pictureId,
        rating: restaurantResult.rating,
        description: restaurantResult.description,
      },
    });
  },
};

export default Detail;
