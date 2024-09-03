const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' }
];

const nomes = ['joao', 'ana', 'rodrigo'];
const numeros = [1, 2, 3, 4];

const testeCarros = carros.findIndex((carro) => {
    return carro.nome === 'corola';
});

const testeNomes = nomes.findIndex((nome) => {
    return nome === 'jose';
});

const testeNumeros = numeros.findIndex((numero) => {
    return numero === 4;
});

console.log(testeCarros);
console.log(testeNomes);
console.log(testeNumeros);