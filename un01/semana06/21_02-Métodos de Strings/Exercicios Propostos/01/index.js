const comentario = "Esse COVID é muito perigoso!";

function verificaComentario(texto) {
    if (texto.toLowerCase().includes("covid") || texto.toLowerCase().includes("pandemia")) {
        console.log("Comentário bloqueado por conter palavras proibidas.");
    } else {
        console.log("Comentário autorizado.");
    }
}

verificaComentario(comentario);

//Outra forma de teste utilizando arrays
//function verificaComentario(texto) {
// const arrayPalavras = texto.toLowerCase().split(" ");
// const palavrasProibidas = ['covid', 'pandemia'];

// if (arrayPalavras.some(elem => palavrasProibidas.includes(elem))) {
//     console.log("Comentário bloqueado por conter palavras proibidas.");
// } else {
//     console.log("Comentário autorizado.");
// }
//}

