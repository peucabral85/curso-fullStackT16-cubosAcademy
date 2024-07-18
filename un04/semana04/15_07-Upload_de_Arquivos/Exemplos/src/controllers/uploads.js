const { uparArquivo, listarArquivos, deletarArquivos } = require("../services/storage");

const uparArquivosBucket = async (req, res) => {
    const { file } = req;

    try {
        const arquivo = await uparArquivo(
            `imagens/${file.originalname}`,
            file.buffer,
            file.mimetype
        );

        return res.status(200).json(arquivo);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const uparMultiplosArquivosBucket = async (req, res) => {
    const { files } = req;

    const resultado = [];

    try {

        for (const file of files) {
            const arquivo = await uparArquivo(
                `imagens/multiplas/${file.originalname}`,
                file.buffer,
                file.mimetype
            );

            resultado.push(arquivo);
        }

        return res.status(200).json(resultado);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const listarArquivosBucket = async (req, res) => {
    try {
        const arquivos = await listarArquivos();

        return res.status(200).json(arquivos);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const deletarArquivosBucket = async (req, res) => {
    const { file } = req.query;

    try {
        await deletarArquivos(file);

        return res.status(200).json({ mensagem: "Arquivo excluído com sucesso!" });
    } catch (error) {
        if (error.name === 'NoSuchKey') {
            return res.status(404).json({ mensagem: "Arquivo não encontrado." });
        }
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    uparArquivosBucket,
    uparMultiplosArquivosBucket,
    listarArquivosBucket,
    deletarArquivosBucket
}