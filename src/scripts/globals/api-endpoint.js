import CONFIG from "./config";

const imageSize = {
  s: 'small',
  m: 'medium',
  l: 'large',
}

const API_ENDPOINT = {
  LIST_RESTAURANTS: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  REVIEW_RESTAURANT: `${CONFIG.BASE_URL}/review`,
  IMAGE: (imageId, size) => `${CONFIG.BASE_URL}/images/${imageSize[size]}/${imageId}`
}

export default API_ENDPOINT;
