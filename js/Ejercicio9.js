function capitalizarPrimeraLetra(cadena) {
    if (cadena.length === 0) return ""; 
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

const texto = prompt("Introduce una cadena:");
const resultado = capitalizarPrimeraLetra(texto);
console.log(`Cadena con la primera letra en mayúsculas: "${resultado}"`);
