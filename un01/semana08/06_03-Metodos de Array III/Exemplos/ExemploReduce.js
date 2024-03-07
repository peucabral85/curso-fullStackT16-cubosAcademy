const array = [0, 1, 2, 3, 4];

// como somar todos os numeros de um array usando o for
// let somaTotal = array[0];

// for (let i = 1; i < array.length; i++) {
//     const elementoAtual = array[i];

//     somaTotal = somaTotal + elementoAtual;
// }

// console.log(somaTotal);


//Somar valores de um array usando reduce()

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
});

console.log(valorReduce);


//Somar valores de um array usando reduce() adicionando 20

const valorReduce2 = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 20);

console.log(valorReduce2);