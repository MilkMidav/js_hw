const processButton = document.getElementById('processButton');
const randomButton = document.getElementById('randomButton');
const logoButton = document.getElementById('logoButton');
const mainContainer = document.getElementById('mainContainer');

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("HTTP-Error: " + response.status);
  }

  return await response.json();
}

function clearContainer() {
  mainContainer.innerHTML = '';
}

function createTitle(titleText) {
  const title = document.createElement('h2');
  title.classList.add('item__name');
  title.textContent = titleText;
  return title;
}

function createImage(imageUrl) {
  const img = document.createElement('img');
  img.classList.add('item__img');
  img.src = imageUrl;
  return img;
}

function createInstruction(instructionText) {
  const instruction = document.createElement('p');
  instruction.classList.add('item__instruction');
  instruction.textContent = instructionText;
  return instruction;
}

function createNotFoundMessage() {
  const notFound = document.createElement('h2');
  notFound.classList.add('item__not_found');
  notFound.textContent = 'No meals found.';
  return notFound;
}

function createIngredientsTable(mealData) {
  const table = document.createElement('table');
  table.classList.add('item__ingredients');
  console.log(mealData.length)
  for (i = 1; i <= Object.keys(mealData).length; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    const ingredient = mealData[ingredientKey];
    const measure = mealData[measureKey];

    if (!ingredient && !measure) break;

    const tr = document.createElement('tr');

    if (ingredient && ingredient.trim() !== '') {
      const tdIngredient = document.createElement('td');
      tdIngredient.textContent = ingredient;
      tr.appendChild(tdIngredient);
    }

    if (measure && measure.trim() !== '') {
      const tdMeasure = document.createElement('td');
      tdMeasure.textContent = measure;
      tr.appendChild(tdMeasure);
    }

    table.appendChild(tr);
  }

  return table;
}

function processInput() {
  const userInput = document.getElementById('userInput').value;
  const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
  updateMealInfo(api);
}

function getRandomMeal() {
  const randomMealsApi = 'https://www.themealdb.com/api/json/v1/1/random.php';
  updateMealInfo(randomMealsApi);
}

async function updateMealInfo(url) {
  try {
    clearContainer();
    const data = await fetchJson(url);

    if (data.meals && data.meals.length > 0) {
      const meal = data.meals[0];
      console.log(meal)
      const mealCard = document.createElement('div');
      mealCard.classList.add('container__item');

      mealCard.appendChild(createTitle(meal.strMeal));
      mealCard.appendChild(createImage(meal.strMealThumb));
      mealCard.appendChild(createIngredientsTable(meal));
      mealCard.appendChild(createInstruction(meal.strInstructions));

      mainContainer.appendChild(mealCard);
    } else {
      mainContainer.appendChild(createNotFoundMessage());
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getMealsByCategory(category) {
  const filteredMealsApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const dataFilteredMealsApi = await fetchJson(filteredMealsApi);

  clearContainer();
  const mealList = document.createElement('div');
  mealList.classList.add('container__meal_list');

  dataFilteredMealsApi.meals.forEach(meal => {
    const mealTitle = document.createElement('h3');
    mealTitle.classList.add('container__meal');
    mealTitle.textContent = meal.strMeal;
    mealList.appendChild(mealTitle);
  });

  mainContainer.appendChild(mealList);

  mealList.addEventListener('mousedown', async (event) => {
    const mealElement = event.target.closest('.container__meal');
    if (mealElement) {
      const mealApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealElement.textContent}`;
      await updateMealInfo(mealApi);
    }
  });
}

async function getStartPage() {
  try {
    clearContainer();
    const categoriesApi = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const data = await fetchJson(categoriesApi);

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('container__ingredients');

    data.categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('ingredient__category');

      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category__title');
      categoryTitle.textContent = category.strCategory;
      categoryDiv.appendChild(categoryTitle);

      const categoryImage = document.createElement('img');
      categoryImage.classList.add('category__img');
      categoryImage.src = category.strCategoryThumb;
      categoryImage.alt = category.strCategory;
      categoryDiv.appendChild(categoryImage);

      categoryDiv.addEventListener('mousedown', () => {
        getMealsByCategory(category.strCategory);
      });

      gridContainer.appendChild(categoryDiv);
    });

    mainContainer.appendChild(gridContainer);
  } catch (error) {
    console.error("Error:", error);
  }
}

getStartPage();

processButton.addEventListener('click', processInput);

randomButton.addEventListener('click', getRandomMeal);

logoButton.addEventListener('click', getStartPage);
