  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
document.onkeydown = checkKey;

function checkKey(e) {

  if (e.keyCode == "38"){
    changeVertical(-1)
  }
  else if (e.keyCode == "40"){
    changeVertical(1)
  }
  else if (e.keyCode == "37"){
    changeHorizontal(-1)
  }
  else if (e.keyCode == "39"){
    changeHorizontal(1)
  }
}
var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;

var mainIndex = 0;

var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

function changeHorizontal(shift) {

  if(mainIndex == 0) {
    headIndex += shift

    if(headIndex < 0)
      headIndex = 5

    if(headIndex > 5)
      headIndex = 0

    head.src = "./images/head" + headIndex + ".png"
  }

  if(mainIndex == 1) {
    bodyIndex += shift

    if(bodyIndex < 0)
      bodyIndex = 5

    if(bodyIndex > 5)
      bodyIndex = 0

    body.src = "./images/body" + bodyIndex + ".png"
  }

  if(mainIndex == 2) {
    shoesIndex += shift

    if(shoesIndex < 0)
      shoesIndex = 5

    if(shoesIndex > 5)
      shoesIndex = 0

    shoes.src = "./images/shoes" + shoesIndex + ".png"
  }
}

function changeVertical(shift) {
  mainIndex += shift
  
  if (mainIndex < 0)
      mainIndex = 2
  
  if (mainIndex > 2)
      mainIndex = 0
}

// function changeClownHead() {
//   var headSrc = "./images/head".concat(headIndex, ".png")
//   document.getElementById("head").src= headSrc;
//   for (var i = 0 ; i < headIndex; i++){
   
//   }
// }
// changeClownHead()

console.log("Dress The Clown!")