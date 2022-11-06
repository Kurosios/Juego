let Bolita = document.querySelector(".punto");
let Stop = document.querySelector(".stop");
let faltan = document.querySelector(".faltan")
let resetear = document.querySelector(".reset");
let total = document.querySelector(".score");
let start = document.querySelector(".start");
let puntos = 0;
let b = 60;
let num = 1;
var dk;
var plus;
var pato;
tiempo =1000;
Bolita = Bolita.addEventListener("click",sumar);
Stop = Stop.addEventListener("click",detener);
resetear = resetear.addEventListener("click",borrar);
start = start.addEventListener("click",comenzar);



total.innerHTML = "Puntuacion: " + puntos;
faltan.innerHTML = "Quedan: " + b + " segundos restantes";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



function comenzar () {
   dk = setInterval(mover,tiempo);
   pato = setInterval(descontador,1000);
   plus = setInterval(detener,60000);
   
}

function descontador (){
   b = b - 1;
   faltan.innerHTML = "Quedan: " + b + " segundos restantes";
   if (b == 0) {
      pato = clearInterval(pato);
   } 
}

function aumentar () {
   if ( tiempo > 250) {
   clearInterval(dk);
   tiempo = tiempo - 50;
   dk = setInterval(mover,tiempo);}
}

function detener (){
   dk = clearInterval(dk);
   pato = clearInterval(pato);
}
function mover() {
   let hola = getRandomInt(200).toString() + "px";
   let chau = getRandomInt(200).toString() + "px";
   document.documentElement.style.setProperty('--a',hola);
   document.documentElement.style.setProperty('--b',chau);
}

function sumar() {
   puntos = puntos + 1;
   total.innerHTML = "Puntuacion: " + puntos;
   mover();
   aumentar();
   console.log(tiempo);
}

function borrar() {
   puntos = 0;
   console.log("puntos: "+ puntos);
   b = 60;
   total.innerHTML = "Puntuacion: " + puntos;
   detener();
   tiempo = 1000;
   console.log("Tiempo: " + tiempo);

}
