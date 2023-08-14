const getRandomFood = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const rawResponse = await fetch(URL);
  const response = await rawResponse.json();
  return response;
};

export default getRandomFood;
