document.addEventListener("DOMContentLoaded", function(){

var butt1 = document.querySelector("#button1");
var butt2 = document.querySelector("#button2");
var butt3 = document.querySelector("#button3");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");

butt1.addEventListener("click", function(){
    if (!(box1.style.display === "none")){
  box1.style.display = "none"
}else{
  box1.style.display = "block"
}
});
butt2.addEventListener("click", function(){
    box2.style.display = "none";
});
butt3.addEventListener("click", function(){
    box3.style.display = "none";
});

})
