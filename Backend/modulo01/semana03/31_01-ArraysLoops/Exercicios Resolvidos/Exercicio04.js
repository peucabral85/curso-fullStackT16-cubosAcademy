const palavra = "abelhas";

quantidadeDeA = 0;

for (let letra of palavra) {
    if (letra === "a") {
        quantidadeDeA++;
    }
}

console.log(`Foram encontradas ${quantidadeDeA} letras 'a' na palavra.`);