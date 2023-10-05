"use strict";
// Muestra el popup cuando se hace clic en el botón
const boton = document.querySelector("#boton");
boton.addEventListener("click", mostrarPopup);

// Muestra el popup
function mostrarPopup() {
  const popup = document.querySelector(".popup");
  popup.classList.remove("ocultar");
  popup.classList.add("visible");

  const doc = document.querySelector(".doc");
  doc.classList.add("visible");
  doc.classList.add("ocultar");
  // Gira la imagen
  const load = document.querySelector(".load");
  const giro = setInterval(() => {
    load.style.transform = `rotate(${Math.random() * 360}deg)`;
  }, 600);

  // Agrandar la imagen
  load.style.transform = `scale(1.2)`;
  load.style.transition = "transform 0.5s";

  // Redirección después de 2 segundos
  setTimeout(() => {
    window.location.href = "index.html";
    clearInterval(giro);
  }, 5000);
}
//------------------Efecto mostrar--------------
const mostrar = document.querySelector(".btn-menu");

//menu responsive

mostrar.addEventListener("click", aparecer);
function aparecer() {
  const desplegable = document.querySelector(".desplegable");
  desplegable.classList.add("mostrar");
}

//------------------Efecto ocultar--------------

//------------------Efecto agrandar--------------
const agrandar = document.querySelector(".agrandar");

agrandar.addEventListener("click", () => {
  // Agrandar
  agrandar.style.transform = "scale(1.5)";

  // Espera un cuarto de segundo
  setTimeout(() => {
    // Muestra el botón
    agrandar.style.opacity = 1;
    agrandar.style.transform = "scale(1)";
  }, 250);
});
