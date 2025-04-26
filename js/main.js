"use strict"

function saludar(){
    
    let N = prompt("Cual es tu nombre?");
    let Z = prompt ("Cual es tu apellido?");
    alert("Hola " + N + " " +Z);
    let variable = document.getElementById("123").innerHTML = N;
}

let text1 = "Hola soy un ejemplo de js";
let text2 = "Hola soy otro ejemplo";
let text3 = "Stop bro..";

let var1 = document.getElementById("1").innerHTML = text1;
let var2 = document.getElementById("2").innerHTML = text2;
let var3 = document.getElementById("3").innerHTML = text3;

function boton1(){
    let button1 = "El ultimo fue el 1"
    let var4 = document.getElementById("pp").innerHTML = button1;
}

function boton2(){
    let button1 = "El ultimo fue el 2"
    let var4 = document.getElementById("pp").innerHTML = button1;
}

function boton3(){
    let button1 = "El ultimo fue el 3"
    let var4 = document.getElementById("pp").innerHTML = button1;
}

function hola(){
    let ee = document.getElementById("8").value;
    let e2 = document.getElementById("9").value;
    console.log(ee);
    console.log(e2);
    let e3 = document.getElementById("j5").innerHTML = ee + " " + e2;
}

let boton = document.getElementById("88");
boton.addEventListener("click",hola);

