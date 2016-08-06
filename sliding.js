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

var timedSlide = slideFunction(); setInterval(slideFunction, 40000);
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
  var fifthFunctionVar = setTimeout(fifthFunction, 22000);
  var sixthFunctionVar = setTimeout(sixthFunction, 28000);
  var seventhFunctionVar = setTimeout(seventhFunction, 34000);

   images = new Array();
   images[0]="space5.jpg"
   images[1]="img1.jpg"
   images[2]="img2.jpg"
   images[3]="img3.png"
   images[4]="img4.jpg"
   images[5]="img5.jpg"
   images[6]="img6.jpg"

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

  function fifthFunction() {
    slideShow.src = images[4];
    console.log("fifth image is ", images[4]);
  }

  function sixthFunction() {
    slideShow.src = images[5];
    console.log("sixth image is ", images[5]);
  }

  function seventhFunction() {
    slideShow.src = images[6];
    console.log("seventh image is ", images[6]);
  }
}