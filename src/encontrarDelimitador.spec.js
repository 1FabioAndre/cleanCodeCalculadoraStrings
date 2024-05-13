import encontrarDelimitador from "./encontrarDelimitador";

describe("Encontrar delimitador", () => {
  /*Devuelve 0 si le envias una cadena vacia o no le envias nada*/  
  it("Deberia devolver ; cuando le enviamos una cadena como //[;]", () => {
    expect(encontrarDelimitador("//[;] hola")).toEqual(";");
  });

  it("Deberia devolver - cuando le enviamos una cadena como //[-]", () => {
    expect(encontrarDelimitador("//[-] hola")).toEqual("-");
  });

  it("Deberia devolver null cuando le enviamos una cadena como //", () => {
    expect(encontrarDelimitador("//")).toEqual(null);
  });

  it("Deberia devolver ; cuando le enviamos una cadena vacia", () => {
    expect(encontrarDelimitador("")).toEqual(null);
  });

  it("Deberia devolver ; cuando le enviamos una cadena como []", () => {
    expect(encontrarDelimitador("[]")).toEqual(null);
  });

  it("Deberia devolver - cuando le enviamos una cadena como [-]", () => {
    expect(encontrarDelimitador("//[-] cadena")).toEqual("-");
  });
});