/*Dado o array de carros abaixo, crie uma função que receba dois argumentos, o array de carros
 e o campo a ser ordenado. A função deve retornar os resultados ordenados de acordo com o campo 
 informado no segundo argumento.
 */

const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" }
];

function ordenaCarros(arrayCarros, campo) {
    arrayCarros.sort((a, b) => {
        return a[campo].localeCompare(b[campo]);
    })
    console.log(arrayCarros);
}

ordenaCarros(carros, 'nome');