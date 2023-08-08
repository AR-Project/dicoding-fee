const getRandomFood = async () => {
  try {
    const rawResponse = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    console.log(rawResponse);
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    alert(error)
  }
}

export default getRandomFood;