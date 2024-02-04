//crie uma lista com 5 países
const nomeDePaises = ['brasil', 'argentina', 'uruguai', 'colombia', 'chile'];
console.log(nomeDePaises);

//adicione um país do fim da lista
nomeDePaises.push('paraguai');
console.log(nomeDePaises);

//remova um país do fim da lista
nomeDePaises.pop();
console.log(nomeDePaises);

//adicione um país ao ínicio da lista
nomeDePaises.unshift('peru');
console.log(nomeDePaises);

//remova um país do inicio da lista
nomeDePaises.shift();
console.log(nomeDePaises);

//imprima o último país da lista
console.log(nomeDePaises[nomeDePaises.length - 1]);

//imprima o 2º país da lista
console.log(nomeDePaises[1]);

//imprima o país de índice 2 da lista
console.log(nomeDePaises[2]);