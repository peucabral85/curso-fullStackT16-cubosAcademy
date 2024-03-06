/* De acordo com o array de professores abaixo, com suas 
respectivas stacks, faça o seguinte:

a) filtrar todos os professores de backend
b) filtrar todos os professores de frontend
*/

const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
];

const filtroBackend = professores.filter((professor) => {
    return professor.stack === 'backend';
});

const filtroFrontend = professores.filter((professor) => {
    return professor.stack === 'frontend';
});

filtroBackend.length ? console.log(filtroBackend) : console.log("Não foram encontrados professores de Backend.");

filtroFrontend.length ? console.log(filtroFrontend) : console.log("Não foram encontrados professores de Frontend.");



