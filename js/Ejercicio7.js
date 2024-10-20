function eliminarEspaciosExtremos(cadena) {
    return cadena.trim();
}

const texto = prompt("Introduce una cadena con espacios en blanco en los extremos:");

const resultado = eliminarEspaciosExtremos(texto);
console.log(`Cadena original: "${texto}"`);
console.log(`Cadena sin espacios en blanco: "${resultado}"`);
