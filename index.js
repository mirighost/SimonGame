"use strict";


let buttonColours = ["red", "blue", "green", "yellow"];

// this will be array for to add new color by every step
let gamePattern = [];
let userClickedPattern = [];

// it is the function for to generate random color
$(document).keypress(function () {
    let randomNumber = Math.floor(Math.random() * 4); // reating random numbers
    let randomChosenColour = buttonColours[randomNumber]; // combine numbers with colors

    gamePattern.push(randomChosenColour); // push color names to array

    let flash = $("#" + randomChosenColour); // choose buttons with same id
    $(flash).fadeOut(100).fadeIn(100); // flash animation in buttons

    // playing audio
    playSound(randomChosenColour);
})

// function for clicking to buttons
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // playing audio
    playSound(userChosenColour);
})

// audio function
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
