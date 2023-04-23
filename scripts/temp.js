let searchBtnTemp = document.querySelector('#recipe-container');
searchBtnTemp.addEventListener('click', loadRecipes);


const APP_ID = "4b86d843";
const API_KEY = "422e872a0aaedc20999433998db2b016";
const baseURL = `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}`;
const recipeContainer = document.getElementById("recipe-container");

function loadRecipes(){
    const url =`https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=4b86d843&app_key=422e872a0aaedc20999433998db2b016&limit=4`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => renderRecipes(data.hits))
        .catch((error) => console.log(error));
        //link the search button to recipe.html
        // window.open("recipe.html", '_blank'); 
}

const renderRecipes = (recipeList=[]) => {
    recipeList.forEach((recipeObj) => {
        const {label:recipeTitle, image:recipeImage, url:recipeLink} = recipeObj.recipe;
        const htmlStr = `
        <div class="recipe">
            <div class="recipe-image">
                <img src = ${recipeImage} alt="Recipe"/>
            </div>
            <div class="recipe-title">${recipeTitle}</div>
            <a href="${recipeLink}" target="_blank" class="recipe-btn">Get Recipe</a>
        </div>`;
        recipeContainer.insertAdjacentHTML("beforeend", htmlStr);
    });
};