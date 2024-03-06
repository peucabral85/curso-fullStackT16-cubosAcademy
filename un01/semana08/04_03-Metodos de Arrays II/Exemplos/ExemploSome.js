const nomes = ['joao', 'joao', 'jose', 'rodrigo'];
const numeros = [4, 5, 9, 7];

const testeNomes = nomes.some((nome) => {
    return nome === 'maria';
});

const testeNumeros = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(testeNomes);
console.log(testeNumeros);