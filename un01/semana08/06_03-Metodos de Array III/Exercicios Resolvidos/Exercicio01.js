/*Dado o array de usuários abaixo, faça a ordenação dos resultados de forma crescente, 
segundo o id de cada usuário. Após a ordenação crescente, faça a ordenação decrescente.
*/

const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 }
];

usuarios.sort((a, b) => {
    return a.id - b.id;
});

console.log(usuarios); //1,2,4,11,123

usuarios.sort((a, b) => {
    return b.id - a.id;
});

console.log(usuarios); //123,11,4,2,1