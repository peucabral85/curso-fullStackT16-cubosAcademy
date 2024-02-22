function replaceAll(TextoOriginal, virgula, ponto) {
    while (TextoOriginal !== TextoOriginal.replace(virgula, ponto)) {
        TextoOriginal = TextoOriginal.replace(virgula, ponto);
    }
    return TextoOriginal;
}

const numero = "1,350,000";
console.log(replaceAll(numero, ",", "."));