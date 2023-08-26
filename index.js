
var sourceimages = ["images/dice1.png" , "images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png" , "images/dice6.png"];

var randomnumber1 = Math.floor( Math.random() * sourceimages.length);


var image1 = document.querySelector(".img1");
// image.setAttribute("src" , "images/dice2.png");

image1.src = sourceimages[randomnumber1];



var randomnumber2 = Math.floor( Math.random() * sourceimages.length);

var image2 = document.querySelector(".img2");

image2.src = sourceimages[randomnumber2];

if (randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML = "Draw";
} else if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Winner Player 1";
} else {
    document.querySelector("h1").innerHTML = "Winner Player 2";
}
    




