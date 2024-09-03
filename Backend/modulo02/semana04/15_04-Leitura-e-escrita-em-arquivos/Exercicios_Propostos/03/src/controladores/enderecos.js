const { buscarEndereco } = require('utils-playground');
const { readFile, writeFile } = require('fs/promises');

const buscaEndereco = async (req, res) => {
    const { cep } = req.params;

    try {
        const enderecos = JSON.parse(await readFile('./src/banco-de-dados/enderecos.json'));

        let endereco = enderecos.find(endereco => endereco.cep.replace('-', '') === cep);

        if (endereco) {
            return res.status(200).json(endereco);
        }

        endereco = await buscarEndereco(cep);

        if (endereco.erro) {
            return res.status(400).json({ mensagem: 'Endereço não encontrado' });
        }

        enderecos.push(endereco);

        await writeFile('./src/banco-de-dados/enderecos.json', JSON.stringify(enderecos));

        return res.json(endereco);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }

}

module.exports = {
    buscaEndereco
} 