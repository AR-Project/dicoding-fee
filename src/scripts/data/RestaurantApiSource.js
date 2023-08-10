import API_ENDPOINT from "../globals/api-endpoint";



class RestaurantApi {

  /**
   * Fetch list of restaurant from API
   * @returns {{id: string, name: string, description: string, pictureId: string, city: string, rating: number }[]} RestaurantSimpleInfo - Array of restaurant information
   */
  static async getList() {
    const rawResponse = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    const response = await rawResponse.json();
    return response.restaurants.map(restaurant => ({
      ...restaurant,
      pictureId: API_ENDPOINT.IMAGE(restaurant.pictureId, 's'),
    })); // Array of restaurant
  }

  /**
   * Fetch the detail of a restaurant
   * @param {string} restaurantId 
   * @returns {{
   * id: string, 
   * name: string, 
   * description: string, 
   * city: string, 
   * address: string, 
   * pictureId: string, 
   * categories: {name: string}[], 
   * menus: {
   *  food: {name: string}[], 
   *  drinks: {name: string}[], 
   * rating: number, 
   * customerReviews: {
   *  name: string, 
   *  review: string, 
   *  date: string}[]}
   * }} Object contains detailed information of restauran
   */
  static async getDetail(restaurantId) {
    const rawResponse = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(restaurantId));
    const response = await rawResponse.json();
    return response.restaurant;
  }

  /**
   * 
   * @param {string} query 
   * @returns {{id: string, name: string, description: string, pictureId: string, city: string, rating: number }[]} RestaurantSimpleInfo - Array of restaurant information
   */
  static async search(query) {
    const rawResponse = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
    const response = await rawResponse.json();
    return response.restaurants;
  }

  /**
   * 
   * @param {{id: string, name: string, review: string}} reviewPayload  
   * @returns {{name: string, review: string, date: string}[]} Array contain object of review content
   */
  static async addReview({ id, name, review }) {
    const rawResponse = await fetch(API_ENDPOINT.REVIEW_RESTAURANT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    })
    const response = await rawResponse.json();
    return response.customerReviews;
  }
}

export default RestaurantApi;
