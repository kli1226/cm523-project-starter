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
const btn = document.getElementById('print-btn');
btn.addEventListener('click', getSelections);

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

function checkBox() {
    var checkBox = document.getElementsByTagName('input');
    var text = document.getElementById("text");
    if (checkBox.checked == true){
       text.style.display = "block";
    //    <p id="text" style="display:none">Tomato</p>
    } else {
       text.style.display = "none";
    }
}