document.addEventListener("DOMContentLoaded", function(){


var targetCard = document.querySelector("#target");
var generate = document.querySelector(".generate");
  var counter = 100;
function randomize(){
  var targetColor = [];
  for (var i = 0; i < 3; i++) {
  var random = Math.floor(Math.random()*16).toString(16);

    targetColor.push(random)
   //targetCard.style.backgroundColor = targetColor;
}
   var hex = targetColor.join("");
   console.log(hex);
   targetCard.style.backgroundColor = "#"+ hex;
};

function randomize2(){
  var newRGB = [];
  for (var i = 0; i < 3; i++) {
  var random = Math.floor(Math.random()*16).toString(16);
   newRGB.push(random)
   //targetCard.style.backgroundColor = targetColor;
}
   //var hex = newColor.join("");
   var hex = newRGB.join("")
   console.log(hex);
   return hex;
};


function count(){
  counter = counter + 20;
  if (counter >= 200){
    window.alert("Congratulations!")

  }
}
function countdown(){
  counter = counter -10;
  var showCount = document.querySelector("#counter")
  showCount.innerText = counter;
  if(counter <= 0 ){
    window.alert("Game Over")
    generate.removeEventListener("click", countdown)
    generate.removeEventListener("click", randomize)
  }
}

generate.addEventListener("click", randomize);
generate.addEventListener("click", countdown)



var rgb1 = randomize2();
var rgb2 = randomize2();
var rgb3 = randomize2();
var rgb4 = randomize2();
var rgb5 = randomize2();

var mixerAdd = document.querySelector("#mixerAdd");
var mixerSubtract = document.querySelector("#mixerSubtract");

var little = document.querySelectorAll(".little")

little[0].innerHTML = rgb1;
little[0].style.backgroundColor = "#"+rgb1;
little[1].innerHTML = rgb2;
little[1].style.backgroundColor = "#"+rgb2;
little[2].innerHTML = rgb3;
little[2].style.backgroundColor = "#"+rgb3;
little[3].innerHTML = rgb4;
little[3].style.backgroundColor = "#"+rgb4;
little[4].innerHTML = rgb5;
little[4].style.backgroundColor = "#"+rgb5;

});
