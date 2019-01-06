function formSubmit(form){
    if(document.getElementById("password").value !== "12345678"){
        document.getElementById("form").style = "max-height: 12.3em; transition: min-height 0.25s ease-in;";
        document.getElementById("output").innerHTML = "Incorrect!";
        document.getElementById("output").style = "background-color: #9A3E65; display: block;"
    } else {
        document.getElementById("output").innerHTML = "Correct!";
        document.getElementById("output").style = "background-color: #006E51; display: block;"
    }

}
