const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja", "acerola", "manga", "limao"];

let numErros = 0;

for (let palavra of palavras) {
    if (palavra[0] != letra) {
        numErros++;
    }
}
console.log(numErros);