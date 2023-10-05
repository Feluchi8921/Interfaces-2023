"use strict"
//------------------Efecto mostrar--------------
const mostrar= document.querySelector(".btn-menu");

//menu responsive
mostrar.addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".desplegable").classList.toggle("show");
};

//------------------Efecto ocultar--------------
//const ocultar= document.querySelector(".btn-cruz");

//cruz para cerrar
//ocultar.addEventListener("click", toggleMenu);
//function toggleMenu() {
//    document.querySelector(".desplegable").classList.toggle("cerrar");
//};

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

