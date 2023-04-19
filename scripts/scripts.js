function checkBox() {
    var checkBox = document.getElementById("card_tomato");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
       text.style.display = "block";
       <p id="text" style="display:none">Tomato</p>
    } else {
       text.style.display = "none";
    }
}