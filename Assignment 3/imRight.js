// CUNY2x
// Assignment 3 - Don't touch button
// Author: Andrey Shtukenberg
// I'm right javascript portion of the assignment

function left() {
    document.getElementById('left').innerHTML = "I'm right!";
    document.getElementById('right').innerHTML = "ME";
}

function right() {
    document.getElementById('left').innerHTML = "ME";
    document.getElementById('right').innerHTML = "No, I'm right!";
}
