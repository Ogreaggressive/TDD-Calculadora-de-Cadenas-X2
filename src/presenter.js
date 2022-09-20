import {sumar} from "./sumador.js";

let cad = document.querySelector("#cadena");
const button = document.querySelector("#addButton");

const res = document.querySelector("#resultado");


button.addEventListener("click", (event) => {
  event.preventDefault();
  
  let respuesta = sumar(cad.value)
  res.innerHTML = "<p>" + respuesta + "</p>" 
});
