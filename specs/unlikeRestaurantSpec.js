import FavoriteRestaurantsIdb from '../src/scripts/data/FavoriteResto-idb';
import createLikeButtonPresenterWithData from './helper/testFactory';

describe('Unlike a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-button-container"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantsIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should display filled heart when restaurant is already liked', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should NOT display empty heart whean restaurant is already liked', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should able to remove restaurant from list when like button is pressed', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when favorite restaurant not on the list', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });
    await FavoriteRestaurantsIdb.deleteRestaurant(1);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
