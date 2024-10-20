function verificar() {
    var cadena = prompt("Introduce una cadena de texto:");
    var palabraInicio = prompt("La palabra con la que debe iniciar es:");
    var empiezaCon = cadena.startsWith(palabraInicio);
    console.log("La cadena comienza con '" + palabraInicio + "': " + empiezaCon);
}

verificar();
