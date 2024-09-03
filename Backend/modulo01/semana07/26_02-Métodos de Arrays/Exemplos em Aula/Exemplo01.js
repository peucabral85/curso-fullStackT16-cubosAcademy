//Exemplo utilizando o método join

const frase = "Cubos Academy";

function ReverteString(texto) {
    let array = texto.split("");
    array.reverse();
    let textoInvertido = array.join("");
    console.log(textoInvertido);
}

ReverteString(frase);