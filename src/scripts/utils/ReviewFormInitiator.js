import RestaurantApi from '../data/RestaurantApiSource';

const ReviewFormInitiator = {
  async init({
    id, form, element,
  }) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const review = {
        id,
        name: data.get('name'),
        review: data.get('review'),
      };
      try {
        const newReviews = await RestaurantApi.addReview(review);
        form.reset();
        // eslint-disable-next-line no-param-reassign
        element.reviews = newReviews;
      } catch (error) {
        alert('Tidak bisa menambah review. Periksa jaringan anda.');
      }
    });
  },

};

export default ReviewFormInitiator;
