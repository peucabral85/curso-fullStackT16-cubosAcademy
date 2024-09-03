const texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer";

const contaPalavras = texto
    .trim()
    .split(" ")
    .filter((palavras) => palavras !== '').length;
console.log(contaPalavras);