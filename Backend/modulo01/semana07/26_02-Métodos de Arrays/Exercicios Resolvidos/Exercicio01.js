const frase = "Cubos Academy";

function ReverteString(texto) {
    let array = texto.split("");
    array.reverse();
    let textoInvertido = "";
    for (let letra of array) {
        textoInvertido += letra;
    }
    console.log(textoInvertido);
}

ReverteString(frase);