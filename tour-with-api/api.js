const loadUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

loadUser();

const displayUser = user => {
    console.log(user);
}

const loadMeals = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

loadMeals('fish');

const displayMeals = meals => {
    const container = document.getElementById('meals');
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <button onclick="loadMealDetails('${meal.strMeal}')">Click Me</button>
        `;
        container.appendChild(div);
        // console.log(meal);
    })

}

const loadMealDetails = mealName => {
    console.log(mealName);
}