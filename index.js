"use strict";


let buttonColours = ["red", "blue", "green", "yellow"];

// this will be array for to add new color by every step
let gamePattern = [];
let userClickedPattern = [];

var started = true;

var level = 0; // variable of levels

// started function
$(document).keypress(function () {
    if (!!started) {
        nextSequence();
        started = false;
    }
})

// it is the function for to generate random color
function nextSequence() {

    level++; // chanhing 

    $("#level-title").text("Level " + level); //updating h1 by every level

    let randomNumber = Math.floor(Math.random() * 4); // reating random numbers
    let randomChosenColour = buttonColours[randomNumber]; // combine numbers with colors

    gamePattern.push(randomChosenColour); // push color names to array

    let flash = $("#" + randomChosenColour); // choose buttons with same id
    $(flash).fadeOut(100).fadeIn(100); // flash animation in buttons

    // playing audio
    playSound(randomChosenColour);

}

// function for clicking to buttons
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // playing audio
    playSound(userChosenColour);
    // animating
    animatePress(userChosenColour);
})

// audio function
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// animation fucntion
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    // removing animation
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
