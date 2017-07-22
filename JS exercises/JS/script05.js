//document.addEventListener("DOMContentLoaded", function(){

function Card(power, color, figure){
  this.power = power;
  this.color = color;
  this.figure = figure
}

var kingSpades = new Card(13,"black", "spades");
var queenHearts = new Card(12,"red", "hearts");
var deck = [];
Card.prototype.addToDeck = function(card){
  deck.push(this);
}
Card.prototype.shuffle = function(){

}
Card.prototype.showCard = function(a){
  console.log(deck[a]);
}

kingSpades.addToDeck();
queenHearts.addToDeck();

console.log(deck);
