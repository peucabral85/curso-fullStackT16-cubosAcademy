const letras = ["A", "a", "B", "C", "E"];

let quantidade = 0;

for (letra of letras) {
    if (letra === "E" || letra === "e") {
        quantidade++;
    }
}
if (quantidade === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if (quantidade === 1) {
    console.log(`Foi encontrada ${quantidade} letra "E" ou "e".`);
} else {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
}
