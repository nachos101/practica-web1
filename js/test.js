"use strict"

function generarElemento(){
    let x = document.getElementById("text1").value;
    let y = "<li> " + x + " </li> ";
    document.getElementById("qw").insertAdjacentHTML("beforeend", y);
    document.getElementById("text1").value = "";
}

let botoon = document.getElementById("btt");
botoon.addEventListener("click",generarElemento);

