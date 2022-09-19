import {sumar} from "./sumador.js";

describe("Sumar", () => {
  it("toma en cuenta un solo numero", () => {
    expect(sumar(5)).toEqual(5);
  });
  it("toma en cuenta cadena nula", () => {
    expect(sumar()).toEqual(0);
  });
});
