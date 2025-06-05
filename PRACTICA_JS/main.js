"USE STRICT"

let nombres = [];

function mostrar(){
    let lista = document.getElementById("listado");
    lista.innerHTML = "";
    for(let n of nombres){
        lista.innerHTML = lista.innerHTML + "<li>" + n + "</li>";
    }
}

function agregar(){
 let nombre = document.getElementById("name").value;
 nombres.push(nombre);
 mostrar();
}

function sortear(){
    let N = Math.floor(Math.random()*nombres.length);
    let aux = document.getElementById("ganador");
    aux.innerHTML = nombres[N];
}

let btn2 = document.getElementById("btn1");
let btn = document.getElementById("ADD");
btn.addEventListener("click",()=>agregar());
btn2.addEventListener("click",()=>sortear());
