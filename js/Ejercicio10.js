function contarLetra(cadena, letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === letra.toLowerCase()) { 
            contador++;
        }
    }
    return contador;
}

const texto = prompt("Introduce una cadena:");
const letraBuscada = prompt("Introduce la letra que deseas contar:");

const resultado = contarLetra(texto, letraBuscada);
console.log(`Cadena ingresada: "${texto}"`);
console.log(`La letra "${letraBuscada}" aparece ${resultado} veces en la cadena.`);
