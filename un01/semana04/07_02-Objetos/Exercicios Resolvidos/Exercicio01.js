const pessoa = {
    nome: "Pericles",
    idade: 39,
    altura: 1.72,
    temCnh: true,
    apelidos: ["Peu", "Pepeu"]
};

const textoTemCnh = pessoa.temCnh ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoTemCnh} e os seguinte apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}