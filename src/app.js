/* eslint-disable */
import "./style.css";
import "bootstrap";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
function generarExcusa() {
  let quien = ["Mi madre", "Mi gato", "La vecina", "El cocodrilo"];
  let accion = [
    "rompió",
    "arañó",
    "mojó",
    "descuartizó",
    "pisoteó",
    "robó",
    "manipuló",
    "se comió"
  ];
  let que = [
    "el coche",
    "mis deberes",
    "mi cara",
    "la ventana",
    "mi regalo",
    "el puzzle",
    "el movil",
    "las patatas"
  ];
  let cuando = [
    "ayer",
    "ahora mismo",
    "cuando estaba de camino",
    "hace dos dias",
    "la semana pasada",
    "pues no se"
  ];
  const persona = quien[Math.floor(Math.random() * quien.length)];
  const acto = accion[Math.floor(Math.random() * accion.length)];
  const objeto = que[Math.floor(Math.random() * que.length)];
  const tiempo = cuando[Math.floor(Math.random() * cuando.length)];

  const respuestaFinal = `${persona} ${acto} ${objeto} ${tiempo}`;
  document.getElementById("resultado").innerHTML = respuestaFinal;
}
document.getElementById("Generarexcusa").addEventListener("click", () => {
  generarExcusa();
});
