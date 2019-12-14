"use strict";

// this will be array for to add new color by every step
let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

// it is the function for to generate random color
function nextSequence() {
    let randomNumber = Math.floor((Math.random() * 4)); //creating random numbers
    let randomChosenColour = buttonColours[randomNumber]; //combine numbers with colors
    gamePattern.push(randomChosenColour); //push color names to array
    console.log(gamePattern)
}
nextSequence()
