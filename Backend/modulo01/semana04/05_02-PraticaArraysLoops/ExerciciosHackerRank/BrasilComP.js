const palavras = ["aveia", "manha", "ave"];
const primeiraLetra = "a";
const segundaLetra = "v";
let temPalavra = false;

for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        temPalavra = true;
        console.log(palavra);
    }
}

if (!temPalavra) {
    console.log("NENHUMA");
}