const getRandomFood = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  try {
    const rawResponse = await fetch(URL);
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    alert(error);
  }
  return undefined;
};

export default getRandomFood;
