"use strict"
//menu responsive
document.querySelector(".btn-menu").addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".desplegable").classList.toggle("show");
}

//cruz para cerrar
document.querySelector(".btn-cruz").addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".desplegable").classList.toggle("cerrar");
}