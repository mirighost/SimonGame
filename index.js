"use strict";


let buttonColours = ["red", "blue", "green", "yellow"];

// this will be array for to add new color by every step
let gamePattern = [];
let userClickedPattern = [];

var started = false;

var level = 0; // variable of levels

// started function
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// function for clicking to buttons
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // playing audio
    playSound(userChosenColour);
    // animating
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
})

// for to check answer
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

// start game when it is game over
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

// it is the function for to generate random color, flashing, playing audio (MAIN FUNCTION)
function nextSequence() {

    userClickedPattern = [];
    level++; // chanhing level

    $("#level-title").text("Level " + level); //updating h1 by every level

    let randomNumber = Math.floor(Math.random() * 4); // reating random numbers
    let randomChosenColour = buttonColours[randomNumber]; // combine numbers with colors

    gamePattern.push(randomChosenColour); // push color names to array

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // flash animation in buttons

    // playing audio
    playSound(randomChosenColour);
}



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