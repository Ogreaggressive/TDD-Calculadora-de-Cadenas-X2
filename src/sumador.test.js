import {sumar} from "./sumador.js";

describe("Sumar", () => {
  it("toma en cuenta un solo numero", () => {
    expect(sumar("5")).toEqual(5);
  });
  it("toma en cuenta cadena nula", () => {
    expect(sumar()).toEqual(0);
  });
  it("toma en cuenta 2 numeros", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("toma en cuenta 2 numeros", () => {
    expect(sumar("1,2,3,4")).toEqual(10);
  });
});
