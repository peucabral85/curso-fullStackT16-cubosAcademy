/*Dado o array de usuarios abaixo, utilize o reduce para filtrar o usuário que possui a maior
 idade dentre os elementos do array e retorne o objeto completo com os dados do usuário encontrado.
 */

const usuarios = [
    { id: 11, nome: "joao", idade: 23 },
    { id: 2, nome: "maria", idade: 18 },
    { id: 4, nome: "ana", idade: 30 },
    { id: 1, nome: "rodrigo", idade: 17 },
    { id: 123, nome: "rodrigo", idade: 17 },
]

const maiorIdade = usuarios.reduce((acumulador, valorAtual) => {
    let maiorValor = acumulador;
    return valorAtual.idade > maiorValor.idade ? maiorValor = valorAtual : maiorValor;
});

console.log(maiorIdade);