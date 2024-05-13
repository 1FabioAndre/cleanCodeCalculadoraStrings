function encontrarDelimitador(cadena) {
    var delimitador = cadena.match(/^\/\/\[(.+)\]/);
    if (delimitador && delimitador[1]) {
        return delimitador[1];
    } else {
        return null;
    }
}

export default encontrarDelimitador;