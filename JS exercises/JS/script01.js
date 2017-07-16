document.addEventListener("DOMContentLoaded", function(){


var targetCard = document.querySelector("#target");
var generate = document.querySelector(".generate");
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


generate.addEventListener("click", randomize);


});
