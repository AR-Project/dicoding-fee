const assert = require('assert');

const DELAY = 2;
const TIME_OUT = 4;

Feature('Disliking Restaurant');

Before(({ I }) => {
  // On Favorite Page
  I.amOnPage('/#/favorite');
  I.wait(DELAY);
});

Scenario('disliking one restaurant ', async ({ I }) => {
  // Still On Favorite Page
  I.seeElement('.content-favorite');
  I.see('kosong', '.content-favorite');

  // On Homepage
  I.amOnPage('/');

  // I.waitForResponse('https://restaurant-api.dicoding.dev/list', 6);
  I.wait(DELAY);

  I.waitForText('Jelajah Isi Piring');
  I.waitForElement('resto-list', TIME_OUT);
  I.waitForElement('resto-item', TIME_OUT);
  const firstRestaurant = locate('resto-item .name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  // On Homepage - ACTION - Navigate to Detail
  I.click(firstRestaurant);
  I.wait(DELAY);

  // On Detail page
  I.waitForElement('#likeButton', TIME_OUT);

  // On Detail page - ACTION - Liking a restaurant
  I.click('#likeButton');

  // On Favorite Page
  I.amOnPage('/#/favorite');
  I.wait(DELAY);
  I.waitForElement('resto-list', TIME_OUT);
  I.waitForElement('resto-item', TIME_OUT);
  const firstLikedRestaurant = locate('resto-item .name').first();
  const likedRestaurantName = await I.grabTextFrom(firstLikedRestaurant);

  // Assert - Make sure register like action is success
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // On Favorite Page - ACTION - Navigate to Detail page
  I.click(firstLikedRestaurant);

  // On Detail page
  I.wait(DELAY);
  I.waitForElement('#likeButton');

  // On Detail Page - ACTION - Unregister Like Restaurant
  I.click('#likeButton');

  // On Favorite Page
  I.amOnPage('/#/favorite');
  I.wait(DELAY);

  // Assert
  I.waitForElement('.content-favorite');
  I.see('kosong', '.content-favorite');
});
