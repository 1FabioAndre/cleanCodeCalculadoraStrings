import encontrarDelimitador from "./encontrarDelimitador";

function sumarCadena(cadena=""){
    if(cadena === ""){
        return 0;
    }

    var delimitador = encontrarDelimitador(cadena);

    if(delimitador){
        // Si se encuentra un delimitador personalizado, dividir la cadena usando ese delimitador
        var numeros = cadena.split(" ")[1].split(delimitador);
        var suma = 0;
        
        // Sumar los números
        for (let i = 0; i < numeros.length; i++) {
            var numero = Number(numeros[i]);
            if(numero <= 1000){
                suma += numero;
            }
        }
        
        return suma;
    }
    else{
        var numeros = cadena.split(/,|-|;/);
        var suma = 0;
        for(let i = 0; i < numeros.length; i++){
            var numero = Number(numeros[i]);
            if(numero <= 1000){
                suma += numero;
            }
            
        }
        return suma;
    }
}

export default sumarCadena;