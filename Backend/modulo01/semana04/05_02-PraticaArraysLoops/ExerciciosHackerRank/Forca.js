const palavra = "atarefada";
const palpite = "a";
let qtdLetra = 0;

for (let letras of palavra) {
    if (letras === palpite) {
        qtdLetra++;
    }
}
console.log(qtdLetra);