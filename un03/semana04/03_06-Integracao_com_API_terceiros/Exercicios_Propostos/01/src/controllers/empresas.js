const instanciaCompanyEnrichment = require("../api/api");
const fs = require('fs/promises');

const detalhaEmpresa = async (req, res) => {
    const { domain } = req.query;

    try {
        const { data } = await instanciaCompanyEnrichment.get(`/?domain=${domain}`);

        if (data.name) {
            const dadosEmpresa = JSON.parse(await fs.readFile('./src/data/empresas.json'));
            dadosEmpresa.push(data);

            await fs.writeFile('./src/data/empresas.json', JSON.stringify(dadosEmpresa, null, 2));
        }

        return res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

module.exports = detalhaEmpresa;