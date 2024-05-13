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

  /*Si le envias una cadena que contiene dos numeros, deberia devolver la suma de esos numeros*/
  it("Deberia devolver la suma de dos numeros cuando le enviamos una cadena que contiene dos numeros y se separa por comas EJM 2,3 = 5", () => {
    expect(sumarCadena("2,3")).toEqual(5);
  });

  it("Deberia devolver la suma de dos numeros cuando le enviamos una cadena que contiene dos numeros y se separa por comas EJM 10,500 = 510", () => {
    expect(sumarCadena("500,10")).toEqual(510);
  });

  /*Si le envias una cadena que contiene tres numeros SEPARADOS POR COMA, deberia devolver la suma de esos numeros*/
  it("Deberia devolver la suma de tres numeros cuando le enviamos una cadena que contiene tres numeros y se separa por comas EJM 2,3,30 = 35", () => {
    expect(sumarCadena("2,3,30")).toEqual(35);
  });

  it("Deberia devolver la suma de tres numeros cuando le enviamos una cadena que contiene tres numeros y se separa por comas EJM 10,3,40 = 53", () => {
    expect(sumarCadena("10,3,40")).toEqual(53);
  });

  /*Si le envias una cadena que contiene tres numeros SEPARADOS POR - o , deberia devolver la suma de esos numeros*/
  it("Deberia devolver la suma de tres numeros cuando le enviamos una cadena que contiene tres numeros y se separa por comas EJM 2,3-10 = 15", () => {
    expect(sumarCadena("2,3-10")).toEqual(15);
  });

  it("Deberia devolver la suma de tres numeros cuando le enviamos una cadena que contiene tres numeros y se separa por comas EJM 2,3,30 = 35", () => {
    expect(sumarCadena("2-10-100")).toEqual(112);
  });

  // El usuario ingresa el delimitador [delim]
  it("Deberia devolver la suma de tres numeros cuando le enviamos un delimitador [;] cadena que contiene tres numeros y se separa por comas EJM 2;3;10 = 15", () => {
      expect(sumarCadena("//[;] 2;3;10")).toEqual(15);
  });

});
