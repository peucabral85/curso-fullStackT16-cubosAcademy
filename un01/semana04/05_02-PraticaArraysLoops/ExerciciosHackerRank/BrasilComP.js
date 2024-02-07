const palavras = ["aveia", "manha", "ave"];
const primeiraLetra = "c";
const segundaLetra = "v";
let temPalavra = false;

for (let palavra of palavras) {
    for (let i = 0; i < 1; i++) {
        if (palavra[i] === primeiraLetra && palavra[i + 1] === segundaLetra) {
            temPalavra = true;
            console.log(palavra);
        }
    }
}
if (!temPalavra) {
    console.log("NENHUMA");
}