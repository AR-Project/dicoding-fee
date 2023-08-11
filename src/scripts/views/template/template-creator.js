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

export { createLikeButtonTemplate, createLikedButtonTemplate };
