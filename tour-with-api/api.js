const loadUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

loadUser();

const displayUser = user => {
    console.log(user);
}
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const loadMeals = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
loadMeals('fish');
const searchMeal = () => {
    const input = document.getElementById('food-input').value;
    // display spinner
    toggleSpinner('block');
    document.getElementById('meals').innerHTML = '';
    loadMeals(input);
    document.getElementById('food-input').value = '';
}

const displayMeals = meals => {
    const container = document.getElementById('meals');
    if(!meals) {
        container.innerHTML = `No Result Found`;
    }
    meals?.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.strIngredient18 ? meal.strIngredient18 : ''}</p>
        <button onclick="loadMealDetails('${meal.strMeal}')">Click Me</button>
        `;
        container.appendChild(div);
        // console.log(meal);
    })
    toggleSpinner('none');
}

const loadMealDetails = mealName => {
    console.log(mealName);
}