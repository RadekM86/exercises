document.addEventListener("DOMContentLoaded", function(){

var first = document.querySelector(".first");
var firstChild = first.firstElementChild;
var thirdChild = firstChild.children[2];

console.log(thirdChild);

var second = document.querySelector('#second');
var secondParent = second.parentElement;
var fourthChild = secondParent.children[3];

console.log(fourthChild);

var third = document.querySelector('*[data-ex]');
var thirdGrandpa= third.parentElement.parentElement;
var lastChild = thirdGrandpa.lastElementChild;
var childFirst = lastChild.firstElementChild;
var middleChild = childFirst.children[Math.ceil((childFirst.children.length)/2-1)];

console.log(middleChild);
})
