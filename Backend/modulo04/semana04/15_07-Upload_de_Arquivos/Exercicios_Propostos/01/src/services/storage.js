const { ListObjectsV2Command, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { clientS3 } = require('../connections/conexao');

const uparImagem = async (path, buffer, mimetype) => {
    const imagem = await clientS3.send(
        new PutObjectCommand({
            Bucket: process.env.STORAGE_BUCKET,
            Key: path,
            Body: buffer,
            ContentType: mimetype
        })
    );

    return {
        path,
        url: `https://${process.env.STORAGE_BUCKET}.${process.env.STORAGE_ENDPOINT}/${path}`
    }
}

const listarArquivos = async () => {
    const imagens = await clientS3.send(
        new ListObjectsV2Command({
            Bucket: process.env.STORAGE_BUCKET
        })
    );

    const resultadoSemPastaVazia = imagens.Contents
        .filter(item => item.Key !== '.emptyFolderPlaceholder')
        .map((file) => {
            return {
                url: `${process.env.STORAGE_BASEURL}${process.env.STORAGE_BUCKET}/${file.Key}`,
                path: file.Key
            }
        });

    return resultadoSemPastaVazia;
}

const deletarImagens = async (path) => {
    await clientS3.send(
        new DeleteObjectCommand({
            Bucket: process.env.STORAGE_BUCKET,
            Key: path
        })
    );
}

module.exports = {
    uparImagem,
    listarArquivos,
    deletarImagens
}