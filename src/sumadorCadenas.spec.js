import sumarCadena from "./sumadorCadena";

describe("Sumador de cadenas", () => {
  /*Devuelve 0 si le envias una cadena vacia o no le envias nada*/  
  it("Deberia devolver 0 cuando le enviamos una cadena vacia", () => {
    expect(sumarCadena("")).toEqual(0);
  });

  it("Deberia devolver 0 cuando no le envias ninguna cadena a la funcion", () => {
    expect(sumarCadena()).toEqual(0);
  });

  /*Si le envias una cadena que solo contiene un numero, deberia devolver ese numero*/
  it("Deberia devolver el mismo numero cuando le enviamos una cadena que contiene un numero EJM 2", () => {
    expect(sumarCadena("2")).toEqual(2);
  });
  it("Deberia devolver el mismo numero cuando le enviamos una cadena que contiene un numero EJM 10", () => {
    expect(sumarCadena("10")).toEqual(10);
  });

});
