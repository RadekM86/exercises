//Zadanie 1
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
