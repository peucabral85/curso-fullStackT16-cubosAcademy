const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const programadorAcima20Anos = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Programador' && pessoa.idade > 20;
});

programadorAcima20Anos.length ? console.log(programadorAcima20Anos) : console.log("Não há programadores acima de 20 anos no array.");

const jornalistaAcima30Anos = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Jornalista' && pessoa.idade > 30;
});

jornalistaAcima30Anos.length ? console.log(jornalistaAcima30Anos) : console.log("Não há jornalistas acima de 30 anos no array.");

const jornalistas_ProgramadoresJovens = pessoas.filter((pessoa) => {
    return (pessoa.profissao === 'Programador' || pessoa.profissao === 'Jornalista') && pessoa.idade <= 29;
});

jornalistas_ProgramadoresJovens.length ? console.log(jornalistas_ProgramadoresJovens) : console.log("Não há jornalistas ou programadores(as) jovens no array.");