// CUNY2x
// Assignment 3 - Bonus - Sphere Calculations
// Author: Andrey Shtukenberg
// Calculates a sphere's volume with a given volume

function formSubmit(form){
    let r = document.getElementById("radius").value;
    let x = Math.PI * 4 * Math.pow(r, 3) / 3;
    document.getElementById("form").style = "max-height: 12.3em; transition: min-height 0.25s ease-in;";
    document.getElementById("result-container").style = "display: block;";
    document.getElementById("result").innerHTML = "Sphere's volume with radius " + String(r) + "\:";
    document.getElementById("output").innerHTML = String(x);
    document.getElementById("output").style = "background-color: #4DCEAF; display: block;";
}
