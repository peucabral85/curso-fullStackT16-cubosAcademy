const { ListObjectsV2Command, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const clientS3 = require('../connections/conexao');

const uparArquivo = async (path, buffer, mimetype) => {
    const arquivo = await clientS3.send(
        new PutObjectCommand({
            Bucket: process.env.SUPABASE_BUCKET,
            Key: path,
            Body: buffer,
            ContentType: mimetype
        })
    );

    return arquivo;
}

const listarArquivos = async () => {
    const arquivos = await clientS3.send(
        new ListObjectsV2Command({
            Bucket: process.env.SUPABASE_BUCKET
        })
    );

    const resultadoSemPastaVazia = arquivos.Contents
        .filter(item => item.Key !== '.emptyFolderPlaceholder')
        .map((file) => {
            return {
                url: `${process.env.STORAGE_BASEURL}${process.env.SUPABASE_BUCKET}/${file.Key}`,
                path: file.Key
            }
        });

    return resultadoSemPastaVazia;
}

const deletarArquivos = async (path) => {
    await clientS3.send(
        new DeleteObjectCommand({
            Bucket: process.env.SUPABASE_BUCKET,
            Key: path
        })
    );
}

module.exports = {
    uparArquivo,
    listarArquivos,
    deletarArquivos
}