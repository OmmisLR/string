function convertirASnakeCase() {
    var frase = prompt("Introduce una frase:");
    var palabras = frase.split(" ");
    var snakeCase = "";

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i].toLowerCase();
        snakeCase += palabra;

        if (i < palabras.length - 1) {
            snakeCase += "_"; 
        }
    }

    console.log("Frase en snake_case: " + snakeCase);
}

convertirASnakeCase();
