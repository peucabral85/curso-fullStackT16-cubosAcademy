const numeros = [1, 1, 1, 3, 4, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual);

soma % numeros.length === 0 ? console.log(numeros.length) : console.log(soma % numeros.length);
