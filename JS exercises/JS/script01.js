document.addEventListener("DOMContentLoaded", function(){


var targetCard = document.querySelector("#target");
var generate = document.querySelector(".generate");
var counter = 100;
var difficultyLevel = (Math.floor(Math.random()*3)+ 1)*5 ;
console.log(difficultyLevel);
var little = document.querySelectorAll(".little");

function randomize(){
  var targetColor = [];
  for (var i = 0; i < 3; i++) {
  var random = Math.floor(Math.random()*16).toString(16);
    targetColor.push(random)
}
   var hex = targetColor.join("");
   targetCard.style.backgroundColor = "#"+ hex;
   targetCard.innerText = "#" + hex;
   console.log(hex);
   return hex;
};
for (var i = 0; i<little.length ; i++){
     little[i].style.backgroundColor = "#" + randomize2(difficultyLevel+i);
   }

function randomize2(el){
  var oldHex = randomize();
  var newHex = [];
  var newNumber = 0
  for (var i = 0; i < 3; i++) {
    newNumber = parseInt(oldHex[i], 16) + el;
    if (newNumber >16){
    newHex.push(Math.abs(16-newNumber).toString(16));
  }else{
    newHex.push(newNumber.toString(16))
  }
}

  var newHexColor = newHex.join("");
  console.log(newHexColor);
  return newHexColor;
}






/*
function randomize2(){
  var newRGB = [];
  for (var i = 0; i < 3; i++) {
  var random =
   newRGB.push(random)
   //targetCard.style.backgroundColor = targetColor;
}
   //var hex = newColor.join("");
   var hex = newRGB.join("")
   console.log(hex);
   return hex;
};
*/

function count(){
  counter = counter + 20*difficultyLevel;
  if (counter >= 200){
    window.alert("Congratulations!")
  }
}
function countdown(){
  counter = counter -10;
  var showCount = document.querySelector("#counter")
  showCount.innerText = counter;
  if(counter <= 0 ){
    window.alert("Game Over");
    generate.removeEventListener("click", countdown);
    generate.removeEventListener("click", randomize);
  }
}


generate.addEventListener("click", randomize);
generate.addEventListener("click", countdown);


/*
var little = document.querySelectorAll(".little")
function shuffle(){
  for (var i = 0; i < little.length; i++) {
    little[i].innerHTML = randomize();
    little[i].style.backgroundColor = "#" + randomize();
  }
}
*/



/*
function shuffle(){
  var deviation = Math.floor(Math.random()*2);
  var colorTriad = 0
  if (deviation==1) {
    colorTriad = 5;
  }else{
    colorTriad = -5
  }
  var oldColor = targetCard.innerHTML
  var newColor = [];
  for (var i = 1; i < 4; i++) {
    var newInteger = parseInt(oldColor[i], 16) + difficultyLevel*colorTriad;
    console.log(newInteger);
    if (newInteger <=0){
      newColor.push("0");
    }else if(newInteger <=16){
      newColor.push(newInteger.toString(16));
    }else{
      newColor.push("f");
    }
  }
  var newCol = newColor.join("");
  console.log("#" + newCol);
  return newCol;
}

shuffle();


function randomize2(){
  var oldColor = targetCard.innerHTML;
  var newHex = [];
  for (var i = 1; i <4; i++) {
    var newColor = parseInt(oldColor[i], 16)+5*i;
    if (newColor>=16){
      newHex.push(Math.abs(16-newColor))
    }else{
    newHex.push(newColor);
  }}
  console.log("nowy" + newHex);
  var newHexString = newHex.join("");
  console.log("neu" + newHexString);
  return newHexString.toString(16);

}


function colorTriad(){
var little = document.querySelectorAll(".little");
for (var i = 1; i < little.length-1; i++) {
  little[i].style.backgroundColor = "#" + randomize();
}}
*/


});
