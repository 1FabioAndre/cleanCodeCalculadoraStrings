import sumarCadena from "./sumadorCadena";

describe("Sumador de cadenas", () => {
  it("Deberia devolver 0 cuando le enviamos una cadena vacia", () => {
    expect(sumarCadena("")).toEqual(0);
  });

  it("Deberia devolver 0 cuando no le envias ninguna cadena a la funcion", () => {
    expect(sumarCadena()).toEqual(0);
  });
});
