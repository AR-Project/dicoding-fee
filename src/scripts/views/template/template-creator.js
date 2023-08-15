import icon from './icons';

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
   ${icon.like}
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  ${icon.liked}
</button>
`;

const reviewFormTemplate = () => `
<form id="review-form">
  <input type="text" name="name" id="name" placeholder="Nama anda" required>
  <textarea name="review" id="review" cols="30" rows="10" placeholder="Bagaimana pendapat anda tentang restaurant ini?" required></textarea >
  <button type="submit">Buat Review</button>
</form>`;

const createRestaurantListSkeleton = (count) => {
  const result = [];
  const restoItemSkeleton = {
    id: '#',
    pictureUrlSmall: '/images/placeholder.png',
    name: 'Loading',
    description: 'Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading ',
    pictureId: '',
    city: 'Loading',
    rating: 0,
  };

  for (let index = 0; index < count; index += 1) {
    result.push(restoItemSkeleton);
  }

  return result;
};

const createRestaurantDetailSkeleton = () => ({
  id: 'loading',
  name: 'loading',
  description: 'loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading ',
  city: 'loading',
  address: 'loading',
  pictureId: 'loading',
  pictureUrlSmall: '/images/placeholder.png',
  pictureUrlarge: '/images/placeholder.png',
  categories: [{ name: 'loading' }],
  menus: {
    foods: [{ name: 'loading' }, { name: 'loading' }, { name: 'loading' }, { name: 'loading' }],
    drinks: [{ name: 'loading' }, { name: 'loading' }, { name: 'loading' }, { name: 'loading' }],
  },
  rating: 0,
  customerReviews: [
    {
      name: 'loading',
      review: 'loading',
      date: 'loading',
    },
    {
      name: 'loading',
      review: 'loading',
      date: 'loading',
    },
  ],
});

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  reviewFormTemplate,
  createRestaurantListSkeleton,
  createRestaurantDetailSkeleton,
};
