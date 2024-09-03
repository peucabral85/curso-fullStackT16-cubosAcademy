const lista = [12, 18, 27];

const verificaIdade = lista.filter((numero) => numero >= 18);

if (verificaIdade.length) {
    const verificaCacula = verificaIdade.reduce((acumulador, valorAtual) => {
        return valorAtual < acumulador ? valorAtual : acumulador;
    });
    console.log(verificaCacula);
} else {
    console.log("CRESCA E APARECA");
}