//Kółko i krzyżyk

document.addEventListener("DOMContentLoaded", function(){


var board = [];
var row = [];

var input = document.querySelectorAll(".input");
var row = document.querySelectorAll("tr");
var col = document.querySelectorAll("td");
var player = document.querySelector("#player")
var counter=0;

for (var i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function(){
  counter ++
    if (counter%2 ===0){
    this.classList.add("checkedX")
    this.innerText = "X";
    player.innerText = "Gracz2"
  }else{
    this.classList.add("checkedO")
    this.innerText = "O";
    player.innerText = "Gracz1"
  }

})}







})
