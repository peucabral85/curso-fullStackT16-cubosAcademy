/* Crie uma função que percorra um array com nomes de arquivos. 
A função deve verificar se possui ao menos um arquivo com a 
extensão ".bat". Caso exista, deverá exibir a mensagem 
"vírus detectado", caso contrário, deverá exibir a mensagem 
"nenhum vírus encontrado".
*/

const nomesArquivos = ["imagem.jpg", "office.exe", "teste.bat"];

// Utilizando o método endsWith

function verificaVirus(arrayArquivos) {
    const resultado = arrayArquivos.some((arquivos) => {
        return arquivos.endsWith('.bat');
    });

    resultado ? console.log("Vírus detectado.") : console.log("Nenhum vírus detectado.");
};

verificaVirus1(nomesArquivos);


//Utilizando métodos lastIndexOf() e slice()

// function verificaVirus(arrayArquivos) {
//     const resultado = arrayArquivos.some((arquivos) => {
//         const indice = arquivos.lastIndexOf('.');
//         return arquivos.slice(indice) === '.bat';
//     });

//     resultado ? console.log("Vírus detectado.") : console.log("Nenhum vírus detectado.");
// };

// verificaVirus(nomesArquivos);