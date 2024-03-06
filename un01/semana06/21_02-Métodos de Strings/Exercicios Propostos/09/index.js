const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
    let arrayNome = nome.trim().split(" ");
    let nickname = "";
    for (let nomes of arrayNome) {
        nickname += nomes.toLowerCase();
    }

    return nome.length > 13 ? `@${nickname.slice(0, 12)}` : `@${nickname}`;;
}

console.log(gerarNickname(nome));