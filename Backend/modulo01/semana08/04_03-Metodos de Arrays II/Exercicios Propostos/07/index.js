const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function buscaEndereco(cep, enderecos) {
    const enderecoEncontrado = enderecos.find((endereco) => {
        return endereco.cep === cep;
    })
    enderecoEncontrado ? console.log(enderecoEncontrado.rua) : console.log('Cep não encontrado.');
}

buscaEndereco(00222444, enderecos);
