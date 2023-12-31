const assert = require('assert');

const DELAY = 2;
const TIME_OUT = 4;

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty list of Favorite Page ', ({ I }) => {
  I.wait(DELAY);
  I.seeElement('.content-favorite');
  I.see('kosong', '.content-favorite');
});

Scenario('liking one restaurant ', async ({ I }) => {
  // Favorite Page
  I.seeElement('.content-favorite');
  I.see('kosong', '.content-favorite');

  // Home Page
  I.amOnPage('/');
  // I.waitForResponse('https://restaurant-api.dicoding.dev/list', 6);
  I.wait(DELAY);
  I.waitForText('Jelajah Isi Piring');
  I.waitForElement('resto-list', TIME_OUT);
  I.waitForElement('resto-item', TIME_OUT);
  const firstRestaurant = locate('resto-item .name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  // Homepage - ACTION
  I.click(firstRestaurant);
  I.wait(DELAY);

  // Detail Page via Homepage
  // I.waitForResponse('https://restaurant-api.dicoding.dev/detail/', 6);
  I.waitForElement('#likeButton', TIME_OUT);

  // Detail Page - ACTION
  I.click('#likeButton');

  // Favorite Page
  I.amOnPage('/#/favorite');
  I.wait(DELAY);
  I.waitForElement('resto-list', TIME_OUT);
  I.waitForElement('resto-item', TIME_OUT);
  const likedRestaurantName = await I.grabTextFrom(locate('resto-item .name').first());

  // Assert
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
