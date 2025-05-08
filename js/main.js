"use strict"

function saludar(){  
    let N = prompt("Cual es tu nombre?");
    let Z = prompt ("Cual es tu apellido?");
    alert("Hola " + N + " " +Z);
    let variable = document.getElementById("123").innerHTML = N;
}
let X = document.getElementById("bt");
X.addEventListener("click",saludar);

let text1 = "Hola soy un ejemplo de js";
let text2 = "Hola soy otro ejemplo";
let text3 = "Stop bro..";

let var1 = document.getElementById("1").innerHTML = text1;
let var2 = document.getElementById("2").innerHTML = text2;
let var3 = document.getElementById("3").innerHTML = text3;

let btt1 = "1";
let btt2 = "2";
let btt3 = "3";
function boton1(botoncito){
    let button1 = "El ultimo fue el " + botoncito;
    let skibidi = document.getElementById("pp").innerHTML = button1;
}

let bt1 = document.getElementById("b1");
bt1.addEventListener("click",() => boton1(btt1));

let bt2 = document.getElementById("b2");
bt2.addEventListener("click",() => boton1(btt2));

let bt3 = document.getElementById("b3");
bt3.addEventListener("click",() => boton1(btt3));


function hola(){
    let ee = document.getElementById("8").value;
    let e2 = document.getElementById("9").value;
    console.log(ee);
    console.log(e2);
    let e3 = document.getElementById("j5").innerHTML = ee + " " + e2;
}

let boton = document.getElementById("88");
boton.addEventListener("click",hola);

function modifyDivv(){
    document.querySelector("#div1").classList.toggle("changeColor");
}

let bttt = document.getElementById("but1");
bttt.addEventListener("click",modifyDivv);