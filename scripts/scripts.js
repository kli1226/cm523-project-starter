const ingredients = {
    vegetables: null,
    meat: null,
    seafood: null,
    carbs: null,
    diaries: null,
}

const vegetables = Array.from(document.getElementsByName('veggieChoices'));
const meat = Array.from(document.getElementsByName('meatChoices'));
const seafood = Array.from(document.getElementsByName('seafoodChoices'));
const carbs = Array.from(document.getElementsByName('carbsChoices'));
const diaries = Array.from(document.getElementsByName('diariesChoices'));
// const btn = document.getElementById('print-btn');
// btn.addEventListener('click', getSelections);

let searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', loadRecipes);

function getSelections(){ 
    vegetables.forEach(item => {
      if(item.checked) {
        ingredients.vegetables = item.value;
      }
    });
    meat.forEach(item => {
        if(item.checked) {
          ingredients.meat = item.value;
        }
    });
    seafood.forEach(item => {
        if(item.checked) {
          ingredients.seafood = item.value;
        }
    });
    carbs.forEach(item => {
        if(item.checked) {
          ingredients.carbs = item.value;
        }
    });
    diaries.forEach(item => {
        if(item.checked) {
          ingredients.diaries = item.value;
        }
    });
    console.log(ingredients);
    printOrder(ingredients);
  }
  
function printOrder(selections){
    result.textContent = `Vegetables: ${selections.vegetables} Meat: ${selections.meat} Seafood: ${selections.seafood}`;
}

//////////////////////////////////////////////////////////////////////////////////////////

function checkBox(id, pid) {
    var checkBox = document.getElementById(id);
    var text = document.getElementById(pid);
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

function promptBox() {
    let text;
    let person = prompt("Please enter the ingredient:", "");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = person;
    }
    document.getElementById("selected").innerHTML = text;
  }

//////////////////////////////////////////////////////////////////////////////////////////

const APP_ID = "4b86d843";
const API_KEY = "422e872a0aaedc20999433998db2b016";
const baseURL = `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}`;
const recipeContainer = document.getElementById("recipe-container");

function loadRecipes(){
    const url =`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=4b86d843&app_key=422e872a0aaedc20999433998db2b016&limit=4`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => renderRecipes(data.hits))
        .catch((error) => console.log(error));
        //link the search button to recipe.html
        // window.open("recipe.html", '_blank'); 
}

const renderRecipes = (recipeList=[]) => {
    recipeList.forEach((recipeObj) => {
        const {label:recipeTitle, image:recipeImage,} = recipeObj.recipe;
        const htmlStr = `
        <div class="recipe">
            <div class="recipe-titles">${recipeTitle}</div>
            <div class="recipe-image">
                <img src = ${recipeImage} alt="Recipe"/>
            </div>
        </div>`;
        recipeContainer.insertAdjacentHTML("beforeend", htmlStr);
    });
};