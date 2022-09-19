import {sumar} from "./sumador.js";

const first = document.querySelector("#primer-numero");
const button = document.querySelector("#addButton");

const res = document.querySelector("#resultado");


button.addEventListener("submit", (event) => {
  event.preventDefault();
});
