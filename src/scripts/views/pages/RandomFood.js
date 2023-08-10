import getRandomFood from "../../data/RandomFoodSource";

const RandomFood = {
  async render() {
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    const title = document.createElement('h1');
    title.id = 'skiplink-target',
      title.innerHTML = 'Bingung makan apa?'

    const desc = document.createElement('p');
    desc.innerHTML = 'Kalau ingin masak sendiri, coba resep hari ini'

    const randomFoodContainer = document.createElement('div');
    randomFoodContainer.classList.add('random-food-container');

    contentElement.append(
      title,
      desc,
      randomFoodContainer,
    )

    return contentElement.outerHTML;
  },

  async afterRender() {
    // Prepare Data
    const { meals } = await getRandomFood();
    const {
      strMeal: mealName,
      strMealThumb: mealPhoto,
      strInstructions: mealDesc,
      strSource: mealSource
    } = meals[0];

    const title = document.createElement('h2');
    title.innerHTML = mealName;

    const foodImage = document.createElement('img');
    foodImage.src = mealPhoto;
    foodImage.alt = mealName;

    const desc = document.createElement('p');
    const excerpt = mealDesc.split(' ');
    desc.innerHTML = excerpt.length > 40 ? excerpt.slice(0, 40).concat(['...']).join(' ') : excerpt;

    const source = document.createElement('a');
    source.innerHTML = 'Selengkapnya'
    source.href = mealSource;
    source.target = '_blank'

    // Append Data
    const randomFood = document.querySelector('.random-food-container')
    randomFood.append(foodImage, title, desc, source);
  }
}

export default RandomFood;
