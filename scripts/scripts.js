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

let searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest()
})

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

// Fetch data from the API
async function sendApiRequest(){
    let APP_ID = "4b86d843";
    let API_KEY = "422e872a0aaedc20999433998db2b016";
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&q=chicken`);
    console.log(response);
    let data = await response.json();
    console.log(data);
}