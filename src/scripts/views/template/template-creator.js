import icon from './icons';

const createLikeButtonTemplate = () => `
<button aria-label="like this movie" id="likeButton" class="like">
   ${icon.like}
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this movie" id="likeButton" class="like">
  ${icon.liked}
</button>
`;

const reviewFormTemplate = () => `
<form id="review-form">
  <input type="text" name="name" id="name" placeholder="Nama anda" required>
  <textarea name="review" id="review" cols="30" rows="10" placeholder="Bagaimana pendapat anda tentang restaurant ini?" required></textarea >
  <button type="submit">Buat Review</button>
</form>`;

export { createLikeButtonTemplate, createLikedButtonTemplate, reviewFormTemplate };
