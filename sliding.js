var date = setInterval(myFunction, 10000);
var slideShow = document.getElementById("slider");

  document.addEventListener("DOMContentLoaded", function(timedSlide) {
    console.log("DOM fully loaded and parsed");
    var katyDid = document.getElementById("slider");
    katyDid.innerHTML = "Loading, Please Hold";
  });

function myFunction() {
  console.log(Date());
}

var timedSlide = slideFunction(); setInterval(slideFunction, 22000);
var zeus = document.getElementById("zeus");
var yeah = document.getElementById("yeah");
var alicia = document.getElementById("alicia");
//slideArray = [zeus, alicia, yeah];
//slideArray[0].src = "zeus.jpg";
//slideArray[1].src = "alicia.jpg";
//slideArray[2].src= "yeah.jpg";




function slideFunction() {
  var firstFunctionVar = setTimeout(firstFunction, 1000);
  var secondFunctionVar = setTimeout(secondFunction, 6000);
  var thirdFunctionVar = setTimeout(thirdFunction, 12000);
  var fourthFunctionVar = setTimeout(fourthFunction, 16000);

   images = new Array();
   images[0]="space1.jpg"
   images[1]="space2.jpg"
   images[2]="space3.jpg"
   images[3]="space4.png"

  function firstFunction() {
    slideShow.src = images[0];
    console.log("first image is ",images[0]);
  }

  function secondFunction() {
    slideShow.src = images[1];
   console.log("second image is ", images[1]);
  }

  function thirdFunction() {
    slideShow.src = images[2];
   console.log("third image is ", images[2]);
  }

  function fourthFunction() {
    slideShow.src = images[3];
    console.log("fourth image is ", images[3]);
  }
}