import encontrarDelimitador from "./encontrarDelimitador";

function sumarCadena(cadena=""){
    if(cadena === ""){
        return 0;
    }

    var delimitador = encontrarDelimitador(cadena);

    if(delimitador){
        // Si se encuentra un delimitador personalizado, dividir la cadena usando ese delimitador
        var numeros = obtenerNumerosConDelimitador(cadena, delimitador);
        return sumarNumeros(numeros);

    }
    else{
        var numeros = obtenerNumerosPorSeparadores(cadena);
        return sumarNumeros(numeros);
    }
}

export default sumarCadena;

function obtenerNumerosConDelimitador(cadena, delimitador) {
    return cadena.split(" ")[1].split(delimitador).map(Number);
}

function obtenerNumerosPorSeparadores(cadena) {
    return cadena.split(/,|-|;/).map(Number);
}

function sumarNumeros(numeros) {
    var suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        var numero = numeros[i];
        if (numero <= 1000) {
            suma += numero;
        }
    }
    return suma;
}
