//Zadanie 1
/*
console.log("Zadanie 1");

var book = {
  title: "Game of thrones",
  author: "George RR Martin",
  numberOfPages: 1000
}
console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);
//Zadanie 2
console.log("Zadanie 2");

var person = {
}
  person.name = "Adam";
  person.age= 17;
  person.sayHello= function(){
    console.log("Hello");
}

console.log(person);
console.log(person.sayHello());

//Zadanie 3
console.log("Zadanie 3");
var train = {
};
console.log(train instanceof Object);
//Zadanie 4
console.log("Zadanie 4");
function Car(brand, color, numberOfKilometers){
  this.brand = brand;
  this.color = color;
  this.numberOfKilometers = numberOfKilometers;
};
Car.prototype.printCarinfo = function(){
  console.log(this.brand, this.color, this.numberOfKilometers);
};
Car.prototype.drive = function(km){
  this.numberOfKilometers += km;
  console.log(this.brand, this.color, this.numberOfKilometers);
};

var mercedes = new Car ("mercedes", "Czarny", 150)
mercedes.printCarinfo();
mercedes.drive(20);
//Zadnaie 5
console.log("Zadanie 5");

Car.dates = [];
Car.prototype.datesNew = function(date){
  this.dates.push(date);
}
Car.prototype.showDates = function(){
  console.log(this.dates);
}
mercedes.dates = ["2001","2005","2012"];
console.log(mercedes.dates);
mercedes.datesNew("2017");
mercedes.showDates();
//Zadanie 6
console.log("Zadanie 6");
var bird = function(type, name){
  this.type= type;
  this.name = name;
  this.getType = function() {
    console.log(this.type, this.name);
  }
}
console.log(bird instanceof Object);
//Zadanie 7
//Zadanie 9
console.log("Zadanie 9");
var Rectangle = function(a,b){
  this.a = a;
  this.b = b;
}
Rectangle.getArea = function(a,b){
    this.result = a*b;
    console.log(this.result);
  }
Rectangle.getPerimeter = function(a,b){
  this.perimeter = 2*a + 2*b;
  console.log(this.perimeter);
}
Rectangle.getArea(2,2);
Rectangle.getPerimeter(3,2);
//Zadanie 10
console.log("Zadanie 10");
var Calculator = function(){
};
Calculator.prototype.add = function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.sum = num1 + num2;
  console.log(num1 + "+" + num2 + "=" + this.sum);
}
Calculator.prototype.multiply = function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.mult = num1 * num2;
  console.log(num1 + "x" + num2 + "=" + this.mult);
}
Calculator.prototype.divide = function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.div = num1 / num2;
  console.log(num1 + "/" + num2 + "=" + this.div);
}
Calculator.prototype.subtract = function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.sub = num1 - num2;
  console.log(num1 + "-" + num2 + "=" + this.sub);
}

var calc1 = new Calculator();

calc1.add(2,2);
calc1.multiply(2,3);
calc1.divide(4,2);
calc1.subtract(6,3);
*/
//Zadanie 0 - 01 Tablice
/*
var sum = 0;
var newTab = [];
function distFromAverage (arguments){
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
  }
   var average = sum / arguments.length
   console.log("Średnia to: " + average);
  for (var j = 0; j < arguments.length; j++) {
    var distance = Math.abs(arguments[j] - average)
    newTab.push(distance);
  }
  console.log(average);
  console.log(distance);
  console.log(newTab);
 }

distFromAverage([1,2,3,4,5,6,7]);
//Zadanie 1
console.log("Zadanie 1 - 1 Tablice");

var array = ["truskawka", "malina", "arbuz", "agrest", "nektaryna", "banan", "ananas"];
console.log("Pierwszy owoc to" + array[0]);
console.log("ostatni owoc to: " + array[array.length-1]);
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
};

//Zadanie 5
console.log("Zadanie 5 - 1 Tablice");
var multiplication = 1;
function multiply (arguments){
  for (var i = 0; i < arguments.length; i++) {
    multiplication = multiplication * arguments[i];
  }
  console.log(multiplication);
  return multiplication;
}
multiply([1,2,3,4,5,6,7]);
//Zadanie 6
console.log("Zadanie 6 - 1 Tablice");

function sortArray(arguments){
  arguments.sort(function(a,b){
    return a-b;
  })
  console.log(arguments);
}
sortArray([1,45,67,2,4,7]);

//Zadanie 7
console.log("Zadanie 7 - 1 Tablice");

function addArrays(tab1, tab2){
var tab3 = [];
if (tab1.length>=tab2.length){
for (var i = 0; i < tab1.length; i++) {
      if (i < tab2.length){
        tab3.push(tab2[i]+tab1[i]);
      }else{tab3.push(tab1[i])}
}}else{
  for (var i = 0; i < tab2.length; i++) {
      if (i < tab1.length){
        tab3.push(tab2[i]+tab1[i]);
      }else{tab3.push(tab2[i])}

}}
console.log(tab3);
return tab3
}
addArrays([1,2,3,4,5,6],[1,1,1,1,1]);

//zadanie 0 - 2 Tablice wielowymiarowe
console.log("zadanie 0 - 2 Tablice wielowymiarowe");
var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];
function checkArray(array){
  var newArray = [];
  var even = true;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j]%2 !==0){
        even = false;
        newArray.push(even)
      }else{
        even = true;
        newArray.push(even);
      }
    }
  }
  console.log(newArray);
};
checkArray(arr);

//Zadanie 5 - 2 Tablice wielowymiarowe
console.log("Zadanie 5 - 2 Tablice wielowymiarowe");
function create2DArray (row, col){
var newRow = 0;
var newCol = [];
var new2DArray = [];
for (var i = 0; i < col; i++) {
  newCol = [];
    for(var j =0; j<row; j++){
    newRow++
    newCol.push(newRow);
  }
  new2DArray.push(newCol)
}
  return new2DArray;
  for (var i = 0; i < new2DArray.length; i++) {
      for (var j = 0; j < new2DArray[i].length; j++) {
          console.log(new2DArray[i][j])
      }
    }
};
create2DArray(4,4);
//Zadanie 0 = 3 Obiekty
String.prototype.upperLower = function(){
  var changed = [];
  var upper = false;
  for (var i = 0; i < this.length; i++) {
    if(this[i]!==' '){
      if(upper){
        changed.push(this[i].toUpperCase());
      }
      else changed.push(this[i].toLowerCase());
      upper = !upper;
    }
    else {
      changed.push(' ');

    }
  }
  console.log(changed.join(' '));
}
var funnyTextWithSpace = "Smieszny tekst".upperLower();
//Drugi sposób - różni się tylko zapisem true / false dla lepszej czytelności

String.prototype.upperLower2 = function(){
  var tab = [];
  var upper = false;
  for (var i = 0; i <this.length; i++){
    if (this[i] !== " "){
      if (upper == true){
        tab.push(this[i].toLowerCase());
        upper = false;
      }else{
        tab.push(this[i].toUpperCase());
        upper = true;
      }
    }else{
      tab.push(" ");
    }
  }
  var joined = tab.join(' ');
  console.log(joined);
}
var funnyTextWithSpace = "Smieszny tekst".upperLower2();

//Zadanie 2
console.log("Zadanie 2 - 3 Obiekty");
var person = {
  name : "John",
  age : 25,
  sayHello: function(){
    console.log("Hello");
  }
};
console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
console.log("Zadanie 3 - 3 Obiekty");

var train = {};

console.log(train instanceof Object);

//Zadanie 4
console.log("Zadanie 4 - 3 Obiekty");
function Car (brand, color, numberOfKilometers){
  this.brand = brand;
  this.color = color;
  this.numberOfKilometers = numberOfKilometers;
}

var mercedes = new Car ("Mercedes", "Black", 150);
console.log(mercedes.brand);

Car.prototype.printCarinfo = function(){
  console.log(this.brand + " " + this.color + " " + this.numberOfKilometers);
}
Car.prototype.drive = function(arguments){
  this.numberOfKilometers += arguments;
}
mercedes.printCarinfo();
mercedes.drive(20);
mercedes.printCarinfo();

//Zadanie 6
console.log("Zadanie 6 - 3 Obeikty");
var bird = {
  type : "wróblowate",
  name : "sikorka",
  getType : console.log(this.type)
};

console.log(bird instanceof Object);

//Zadanie 7
console.log("Zadanie 7 - 3 Obiekty");
var myString = "String";
console.log(myString instanceof String);
console.log(typeof(myString));

var myNumber = 15;
console.log(myNumber instanceof Number);
console.log(typeof myNumber);

//Zadanie 9
console.log("Zadanie 9 - 3 Obiekty");

var Rectangle = function(a,b) {
  this.a = a;
  this.b = b;
}
Rectangle.prototype.getArea = function(a,b){
  console.log("Area is " + this.a * this.b);
}
Rectangle.prototype.getPerimeter = function(a,b){
  console.log("Perimeter is " + (2*this.a+2*this.b));
}

var rect1 = new Rectangle (2,3);
rect1.getArea();
rect1.getPerimeter();
//Zadanie 10
console.log("Zadanie 10 - 3 Obiekty");

var Calculator = function(a,b){
  this.a = a;
  this.b = b;
  this.history = [];
}
Calculator.prototype.add = function(a,b){
  this.result = this.a + this.b
  this.history.push("Added "+this.a+" and " + this.b + " the result was " + this.result)
}

Calculator.prototype.multiply = function(a,b){
  this.result = this.a * this.b
  this.history.push("Multiplied "+this.a+" by " + this.b + " the result was " + this.result)
}

Calculator.prototype.subtract = function(a,b){
  this.result = this.a - this.b
  this.history.push("Subtracted "+this.b+" from " + this.a + " the result was " + this.result)
}
Calculator.prototype.divide = function(a,b){
  this.result = this.a / this.b
  this.history.push("Didived "+this.a+" by " + this.b + " the result was " + this.result)
}

Calculator.prototype.printHistory = function(){
  for (var i = 0; i < this.history.length; i++) {
    console.log(this.history[i]);
  }
}

Calculator.prototype.power = function(a,b){
  this.result = 1;
  for (var i = 0; i< this.b ; i++){
    this.result = this.result * this.a;
  }
  this.history.push(this.a+" power " + this.b + " the result was " + this.result)
}


var calc1 = new Calculator(2,3);
calc1.add();
calc1.multiply();
calc1.divide();
calc1.subtract();
calc1.power();
calc1.printHistory();
*/
document.addEventListener ( "DOMContentLoaded", function(){

  var button = document.querySelector("#button");
  var counter = document.querySelector("#counter");
  var counter1 = 0;



  button.addEventListener('click', function(){
    counter1++;
    button.style.backgroundColor = "aqua";
    counter.innerText = counter1;
    if (counter1 >= 12){
      counter.innerHTML = "<div>koniec liczenia</div>";
    var newDiv = document.createElement("div")
    if (counter1 >=20){
    button.appendChild(newDiv);
    newDiv.classList.add('alert')
    newDiv.innerText = "weź już przestań.."}
  }});
var counter2 = 0;
var seconds = document.querySelector("#seconds");
var times = document.querySelector("#timer");
var interval = setInterval(function(){
  counter2++
  times.innerText = counter2;
  if (counter2 === 30){
    clearInterval(interval)
  }
},1000);


});
