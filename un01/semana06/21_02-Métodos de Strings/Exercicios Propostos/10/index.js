const nomeArquivo = 'Foto da Familia.pdf';

function validaArquivos(nome) {
    const extensaoArquivo = nome.lastIndexOf(".");
    if (nome.slice(extensaoArquivo + 1) === 'jpg' || nome.slice(extensaoArquivo + 1) === 'jpeg'
        || nome.slice(extensaoArquivo + 1) === 'gif' || nome.slice(extensaoArquivo + 1) === 'png') {
        console.log("Arquivo válido.")
    } else {
        console.log("Arquivo inválido.")
    }
}

validaArquivos(nomeArquivo);
