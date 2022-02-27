
document.getElementById('error').style.display = 'none';

const displayError = () => {
    document.getElementById('error').style.display = 'block';
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';
    const searchResult = document.getElementById('search-result');
    const errorMessage = document.getElementById('error');

    /**
     *! load data
     */
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

    if(searchValue === '') {
        searchResult.innerHTML = `
        <h3 class="text-white text-center mt-5 mx-auto">Enter A Dish Name</h3>
        `
    } else {
        fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayError())
    }
    
}

function displayMeals(meals) {
   const searchResult = document.getElementById('search-result');
    /**
     *! remove previous items
     */
    if(meals === null) {
        searchResult.innerHTML = `
        <h3 class="text-white text-center mt-5 mx-auto">Nothing Found</h3>
        `
    } else {
        searchResult.innerHTML = '';
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card" onclick="loadMealId(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,120)}</p>
            </div>
          </div>
            `
            searchResult.appendChild(div);
        })
    
    }


}

const loadMealId = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
    .catch(error => displayError())
}

const displayMealDetail = meal => {
    const mealDetail = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card','w-50','mx-auto');
    div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Video Instruction</a>
  </div>
    `;
    mealDetail.appendChild(div);
}