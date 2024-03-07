const pessoas = ['Ana', 'Jaqueline', 'Miguel', 'Pedro', 'Eunice', 'davi'];

//Ordenação crescente
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas); //'Ana', 'davi', 'Eunice', 'Jaqueline', 'Miguel', 'Pedro'

//Ordenação decrescente
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas); // 'Pedro', 'Miguel', 'Jaqueline', 'Eunice', 'davi', 'Ana'