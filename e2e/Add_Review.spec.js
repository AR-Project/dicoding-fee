Feature('Add Review on Detail Page');

Before(({ I }) => {
  I.amOnPage('/');
  const firstRestaurant = locate('resto-item .name').first();
  I.click(firstRestaurant);
});

Scenario('adding a review', async ({ I }) => {
  I.seeElement('resto-detail');
  I.seeElement('#review-form');
  I.click('#review-form #name');
  I.type('e2etestname');
  I.click('#review-form #review');
  I.type('review content secretwordfortest');
  // eslint-disable-next-line codeceptjs/no-pause-in-scenario
  I.click('#review-form button');

  I.see('secretwordfortest');
  I.see('e2etestname');
});
