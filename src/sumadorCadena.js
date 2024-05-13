function sumarCadena(cadena=""){
    if(cadena === ""){
        return 0;
    }
    var numeros = cadena.split(/,|-/);
    var suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma = suma + Number(numeros[i]);
    }
    return suma;
}

export default sumarCadena;