let Bolita = document.querySelector(".punto");
let puntos = 0;

let resetear = document.querySelector(".reset");
let total = document.querySelector(".score");

Bolita = Bolita.addEventListener("click",sumar);
resetear = resetear.addEventListener("click",borrar);

total.innerHTML = "Puntuacion: " + puntos;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var t ;
let tiempo = 3000;
function comenzar() {
 t = setInterval(mover, tiempo);
 
}
 
function stop() {
   clearInterval(t);
 }


let b = 30;


function mover() {
   let hola = getRandomInt(200).toString() + "px";
   let chau = getRandomInt(200).toString() + "px";
   document.documentElement.style.setProperty('--a',hola);
   document.documentElement.style.setProperty('--b',chau);
}

function sumar() {
   puntos = puntos + 1;
   total.innerHTML = "Puntuacion: " + puntos;
   tiempo = tiempo - 300;
   console.log(tiempo);
}

function borrar() {
   puntos = 0;
   console.log(puntos);
   a = 30;
   b = 30;
   total.innerHTML = "Puntuacion: " + puntos;
   tiempo = 3000;
   console.log(tiempo);
}
