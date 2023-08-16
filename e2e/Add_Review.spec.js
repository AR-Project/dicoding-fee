const DELAY = 2;

Feature('Add Review on Detail Page');

Before(({ I }) => {
  I.amOnPage('/');
  // I.waitForResponse('https://restaurant-api.dicoding.dev/list', 6);
  I.wait(DELAY);
  I.waitForElement('resto-item');
  const firstRestaurant = locate('resto-item .name').first();
  I.click(firstRestaurant);
  I.wait(DELAY);
});

Scenario('adding a review', async ({ I }) => {
  I.waitForElement('resto-detail', 4);
  I.seeElement('#review-form');
  I.click('#review-form #name');
  I.type('e2etestname');
  I.click('#review-form #review');
  I.type('review content secretwordfortest');
  I.click('#review-form button');

  I.see('secretwordfortest');
  I.see('e2etestname');
});
