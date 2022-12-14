
// Change Left Dice Number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceNumber1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceNumber1); 

// Change Right Dice Number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceNumber2 = "/images/dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceNumber2);

// Change Title
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!🎊";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🎊";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}