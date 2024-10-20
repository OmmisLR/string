function obtenerSubcadena() {
    const cadena = prompt("Introduce una cadena:");
    const inicio = parseInt(prompt("Introduce el índice de inicio:"));
    const fin = parseInt(prompt("Introduce el índice de fin:"));

    const subcadena = cadena.substring(inicio, fin);
    console.log("La subcadena es:", subcadena);
}

obtenerSubcadena();
