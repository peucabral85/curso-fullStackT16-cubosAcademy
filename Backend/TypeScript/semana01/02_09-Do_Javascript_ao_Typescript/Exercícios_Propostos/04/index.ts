const cidades: string[] =
    [
        "Salvador",
        "São Paulo",
        "Brasilia",
        "Recife",
        "Rio de Janeiro",
    ];

const filtrarCaracteres = (cidades: string[]): string[] => {
    const verificaCidade: string[] = cidades.filter(cidade => cidade.length <= 8);
    return verificaCidade;
}

console.log(filtrarCaracteres(cidades));