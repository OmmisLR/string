const dividirCadenaEnPalabras = () => {
    let cadena = prompt("Introduce una cadena de texto:");
    let palabras = cadena.split(" "); 
    return palabras;
};
let resultado = dividirCadenaEnPalabras();
console.log("Las palabras son:", resultado);
console.log("La cantidad de palabras es:", cantidadPalabras);
contarPalabras();
