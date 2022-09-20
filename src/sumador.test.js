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
  it("toma en cuenta muchos numeros numeros", () => {
    expect(sumar("1,2,3,4")).toEqual(10);
  });
  it("reconoce coma como separador, sino da error", () => {
    expect(sumar("1%2,3,4")).toEqual("cadena no valida");
  });
  it("reconoce guion como separador, sino da error", () => {
    expect(sumar("1-2,3-4")).toEqual(10);
  });
  it("reconoce un delimitador dado por usuario", () => {
    expect(sumar("//[#] 1#2,3#4")).toEqual(10);
  });
  it("numeros mayores a 1000 son ignorados", () => {
    expect(sumar("//[#] 1#2212,3#4")).toEqual(8);
  });
  it("se puede usar delimitadores de cualquier longitud", () => {
    expect(sumar("//[###] 1###2212,3###4")).toEqual(8);
  });
  it("se puede usar delimitadores de expresiones regulares con regex", () => {
    expect(sumar("//[*] 1*2212,3*4")).toEqual(8);
  });
  it("se puede usar delimitadores de expresiones regulares con regex de cualquier longitud", () => {
    expect(sumar("//[***] 1***2212,3***4")).toEqual(8);
  });
});
