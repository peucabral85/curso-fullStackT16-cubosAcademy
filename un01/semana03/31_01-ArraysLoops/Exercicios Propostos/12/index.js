const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
}

console.log(filaDeDentro);
console.log(filaDeFora);
