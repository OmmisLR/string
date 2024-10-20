function contarFrecuencia() {
    var cadena = prompt("Introduce una cadena:");
    var frecuencia = {};

    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena[i];
        if (frecuencia[caracter]) {
            frecuencia[caracter] += 1;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    console.log("Frecuencia de caracteres:", frecuencia);
}

contarFrecuencia();
