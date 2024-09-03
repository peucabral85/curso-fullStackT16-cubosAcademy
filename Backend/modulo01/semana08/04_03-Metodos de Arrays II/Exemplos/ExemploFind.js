const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];

const nomes = ['joao', 'ana', 'jose'];
const numeros = [1, 2, 3];

const testeUsuarios = usuarios.find((usuario) => {
    return usuario.nome === 'ana';
});

const testeNomes = nomes.find((nome) => {
    return nome === 'jose';
});

const testeNumeros = numeros.find((numero) => {
    return numero === 4;
});

console.log(testeUsuarios);
console.log(testeNomes);
console.log(testeNumeros);