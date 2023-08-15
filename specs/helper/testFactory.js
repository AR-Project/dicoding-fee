import FavoriteRestaurantsIdb from '../../src/scripts/data/FavoriteResto-idb';
import LikeButtonInitiator from '../../src/scripts/utils/LikeButtonInitiator';

const createLikeButtonPresenterWithData = async (data) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    restaurant: data,
    idb: FavoriteRestaurantsIdb,
  });
};

export default createLikeButtonPresenterWithData;
