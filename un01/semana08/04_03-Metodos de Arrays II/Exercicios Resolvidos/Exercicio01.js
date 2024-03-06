/* Crie uma função que receba um array de objetos de usuários 
que contém as propriedades nome e idade. A função deve validar 
se todos os usuários são maiores de idade. Caso todos os usuários 
sejam maiores, deverá exibir a mensagem "Festa liberada!", caso 
contrário, deverá exibir a mensagem "Possui menor de idade".
*/

const convidados = [
    { nome: 'Pedro', idade: 26 },
    { nome: 'João', idade: 24 },
    { nome: 'Maria', idade: 18 },
    { nome: 'Lucas', idade: 17 }
];

function verificaMaiorIdade(arrayObjetos) {
    const resultado = arrayObjetos.every(function (convidado) {
        return convidado.idade >= 18;
    });

    resultado ? console.log("Festa Liberada.") : console.log("Possui menor de idade.");
}

verificaMaiorIdade(convidados);