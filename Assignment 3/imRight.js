function left() {
    document.getElementById('left').innerHTML = "I'm right!";
    document.getElementById('right').innerHTML = "ME";
}

function right() {
    document.getElementById('left').innerHTML = "ME";
    document.getElementById('right').innerHTML = "No, I'm right!";
}
