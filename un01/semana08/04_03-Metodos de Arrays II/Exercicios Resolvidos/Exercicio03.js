/* Crie uma função que receba o nome da marca de um carro e 
um array de objetos contendo as propriedades nome, marca, ano
e cor. A função deve encontrar os dados do carro, a partir do 
nome da marca, no array passado como argumento e deve exibir 
todos os dados como retorno.
*/

const carros = [
    { nome: 'hb20', marca: 'hyundai', ano: 2020, cor: 'azul' },
    { nome: 'fusca', marca: 'volkswagen', ano: 1985, cor: 'vermelho' },
    { nome: 'onix', marca: 'chevrolet', ano: 2018, cor: 'prata' },
    { nome: 'toro', marca: 'fiat', ano: 2023, cor: 'branco' }
];

function encontraCarro(marca, arrayCarros) {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca.toLowerCase() === marca.toLowerCase();
    });

    resultado ? console.log(resultado) : console.log(`Não foram encontrados veículos da ${marca}.`);
};

encontraCarro('Fiat', carros);