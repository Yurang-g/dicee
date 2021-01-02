var randomNUMBER1 = Math.floor(Math.random() * 6) + 1;
var randomDICEimage = "dice" + randomNUMBER1 + ".png";
var randomIMAGEsrc = randomDICEimage;
var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomIMAGEsrc);


var randomNUMBER2 = Math.floor(Math.random() * 6) + 1;
var randomDICEimage2 ="dice" + randomNUMBER2 + ".png";
var randomIMAGEsrc2 = randomDICEimage2;
var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomIMAGEsrc2);

 if(randomNUMBER1 > randomNUMBER2) {
   document.querySelector("h1").innerHTML = "⛳ Player 1 Wins !!";
 }
 else if(randomNUMBER2 > randomNUMBER1) {
   document.querySelector("h1").innerHTML = "Player 2 Wins !! ⛳";
 }
else{
  document.querySelector("h1").innerHTML = "Draw !! ಠ_ಠ";
}
