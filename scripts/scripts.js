const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const recipeDetails = document.querySelector('.meal-details-content');
const closeBtn = document.getElementById('close-btn');

/* Event Listeners */
searchBtn.addEventListener('click', getRecipes);
mealList.addEventListener('click', getMealRecipe);
closeBtn.addEventListener('click', () => {
    recipeDetails.parentElement.classList.remove('showRecipe');
});

/* Call the API to get recipes' ids, names, and images */
function getRecipes(){
    let searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            html += `<div class="search-title">Your Search Results:</div>`
            data.meals.forEach(meal => {
                html += `
                    <div class="recipe-item" data-id="${meal.idMeal}">
                        <div class="recipe-img">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        </div>
                        <div class="recipe-title">
                            <div class="recipe-name">${meal.strMeal}</div>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }
        mealList.innerHTML = html;
    });
}

/* Call the API to get recipes' YouTube links and instructions */
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => getRecipeDetails(data.meals));
    }
}

function getRecipeDetails(recipe){
    recipe = recipe[0];
    let html = `
        <div class="recipe-name-title">${recipe.strMeal}</div>
        <div class="recipe-link">
            <a href="${recipe.strYoutube}" target="_blank">Watch Video</a>
        </div>
        <div class="recipe-details-img">
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        </div>
        <div class="instructions">
            <h4>Instructions:</h4>
            <p class="instruction-details">${recipe.strInstructions}</p>
        </div>
    `;
    recipeDetails.innerHTML = html;
    recipeDetails.parentElement.classList.add('showRecipe');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkBox(id, pid) {
    var checkBox = document.getElementById(id);
    var text = document.getElementById(pid);
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}
