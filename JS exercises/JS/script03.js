document.addEventListener("DOMContentLoaded", function(){

  var generate = document.querySelector(".generate");
  var counter = 100;

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

  generate.addEventListener("mouseover", function(){
    this.style.backgroundColor = "#555";
  })
  generate.addEventListener("mouseup", function(){
    this.style.backgroundColor = "AAA";
  })
  generate.addEventListener("mouseout", function(){
    this.style.backgroundColor = "AAA";
  })
  generate.addEventListener("click", function(){
    this.style.backgroundColor = "#333";
  })
  generate.addEventListener("click", targetColor);
  generate.addEventListener("click", littleHelpers);

  generate.addEventListener("click", countdown);

function targetColor(){
  var color = [];
  for	(var i = 0; i<3; i++){
  	var one = randomize();
    color.push(one);
  }
  var joined = color.join(", ");
  div.innerHTML = "R:" + color[0] + "<br>" + "G:"+ color[1]+ "<br>" + "B:"+color[2];
  div.style.backgroundColor = "rgb(" + joined + ")";
}
function randomize(){
var random = (Math.floor(Math.random()*17))*15
return random;
}

function randomThree(){
var random2 = Math.floor(Math.random()*3)
return random2;
}

var div = document.querySelector("#color");
var color = [];
for	(var i = 0; i<3; i++){
	var one = randomize();
  color.push(one);
}
var joined = color.join(", ");
div.innerHTML = "R:" + color[0] + "<br>" + "G:"+ color[1]+ "<br>" + "B:"+color[2];
div.style.backgroundColor = "rgb(" + joined + ")";

var little = document.querySelectorAll(".little");

function littleHelpers(){
  var cards = [];
  for (var j = 0; j<3; j++){
  	var thirds = color[j]*randomThree()
    if (thirds <=255){
   cards.push(thirds);
  	}else{cards.push(0)}
  }
  var helpColor1 = [];
  helpColor1.push(color[0]);
  helpColor1.push(color[2]);
  helpColor1.push(color[1]);
  var joinedHelp1 = helpColor1.join(", ")
  var helpColor2 = color.reverse();
  var joinedHelp2 = helpColor2.join(", ")
  var helpColor3 = helpColor1.reverse();
  var joinedHelp3 = helpColor3.join(", ")
  little[0].style.backgroundColor = "rgb(" +  joinedHelp1 +")"
  little[0].innerHTML = helpColor1.join("<br>")
  little[1].style.backgroundColor = "rgb(" +  joinedHelp2 +")"
  little[1].innerHTML = helpColor2.join("<br>")
  little[2].style.backgroundColor = "rgb(" +  joinedHelp3 +")"
  little[2].innerHTML = helpColor3.join("<br>")

}

var cards = [];
for (var j = 0; j<3; j++){
	var thirds = color[j]*randomThree()
  if (thirds <=255){
 cards.push(thirds);
	}else{cards.push(0)}
}
var helpColor1 = [];
helpColor1.push(color[0]);
helpColor1.push(color[2]);
helpColor1.push(color[1]);
var joinedHelp1 = helpColor1.join(", ")
var helpColor2 = color.reverse();
var joinedHelp2 = helpColor2.join(", ")
var helpColor3 = helpColor1.reverse();
var joinedHelp3 = helpColor3.join(", ")
little[0].style.backgroundColor = "rgb(" +  joinedHelp1 +")"
little[0].innerHTML = helpColor1.join("<br>")
little[1].style.backgroundColor = "rgb(" +  joinedHelp2 +")"
little[1].innerHTML = helpColor2.join("<br>")
little[2].style.backgroundColor = "rgb(" +  joinedHelp3 +")"
little[2].innerHTML = helpColor3.join("<br>")


})
