function Longitud(cadena) {
    return cadena.length;
}

const texto = prompt("Por favor, introduce una palabra:");
console.log(`La longitud de "${texto}" es: ${Longitud(texto)}`);
