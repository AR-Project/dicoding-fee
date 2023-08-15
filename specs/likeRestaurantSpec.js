import FavoriteRestaurantsIdb from '../src/scripts/data/FavoriteResto-idb';
import createLikeButtonPresenterWithData from './helper/testFactory';

describe('Liking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-button-container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show empty heart button when restaurant not yet liked', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });

    // Assert
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should NOT show filled heart button when restaurant is not yet liked', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should able to like a restaurant', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantsIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should NOT add restaurant twice into idb', async () => {
    await createLikeButtonPresenterWithData({ id: 1 });
    await FavoriteRestaurantsIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should NOT add restaurant when it has no id', async () => {
    await createLikeButtonPresenterWithData({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
