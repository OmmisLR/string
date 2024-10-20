function reemplazarPalabra() {
    var cadena = prompt("Introduce una cadena de texto:");
    var palabraOriginal = prompt("¿Qué palabra quieres reemplazar?");
    var nuevaPalabra = prompt("¿Con qué palabra quieres reemplazarla?");
    var resultado = cadena.replaceAll(palabraOriginal, nuevaPalabra);
    console.log("Cadena original: " + cadena);
    console.log("Cadena modificada: " + resultado);
}

reemplazarPalabra();
