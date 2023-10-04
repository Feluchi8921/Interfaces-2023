"use strict"
//------------------Efecto mostrar--------------
const mostrar= document.querySelector(".btn-menu");

//menu responsive
mostrar.addEventListener("click", mostrar);
function mostrar() {
    document.querySelector(".desplegable").classList.mostrar("show");
};

//------------------Efecto ocultar--------------
const ocultar= document.querySelector(".btn-cruz");

//cruz para cerrar
ocultar.addEventListener("click", ocultar);
function ocultar() {
    document.querySelector(".desplegable").classList.ocultar("cerrar");
};

//------------------Efecto agrandar--------------
const agrandar=document.querySelector(".agrandar");

agrandar.addEventListener("click", ()=>{
// Agrandar
agrandar.style.transform = "scale(1.5)";

// Espera un cuarto de segundo
setTimeout(() => {
  // Muestra el botón
  agrandar.style.opacity = 1;
  agrandar.style.transform = "scale(1)";
}, 250);
});

