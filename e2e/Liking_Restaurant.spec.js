const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty list of Favorite Page ', ({ I }) => {
  I.seeElement('.content-favorite');
  I.see('kosong', '.content-favorite');
});

Scenario('liking one restaurant ', async ({ I }) => {
  I.seeElement('.content-favorite');
  I.see('kosong', '.content-favorite');

  I.amOnPage('/');

  I.see('Jelajah Isi Piring');
  I.seeElement('resto-list');
  I.seeElement('resto-item');
  const firstRestaurant = locate('resto-item .name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-list');
  I.seeElement('resto-item');
  const likedRestaurantName = await I.grabTextFrom(locate('resto-item .name').first());
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('disliking one restaurant ', async ({ I }) => {
  // Favorite Page
  I.seeElement('.content-favorite');
  I.see('kosong', '.content-favorite');

  // Homepage
  I.amOnPage('/');

  I.see('Jelajah Isi Piring');
  I.seeElement('resto-list');
  I.seeElement('resto-item');
  const firstRestaurant = locate('resto-item .name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Detail page via homepage
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Favorite Page
  I.amOnPage('/#/favorite');
  I.seeElement('resto-list');
  I.seeElement('resto-item');
  const firstLikedRestaurant = locate('resto-item .name').first();
  const likedRestaurantName = await I.grabTextFrom(firstLikedRestaurant);
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // Detail page via favorite page
  I.click(firstLikedRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Favorite Page
  I.amOnPage('/#/favorite');

  I.seeElement('.content-favorite');
  I.see('kosong', '.content-favorite');
});
