const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Malaquias', 'Murilo', 'José', "Miguel"];
const tamanhoDoGrupo = 4;


function dividirGrupo(arrayGrupo, tamanho) {
    let grupo = [];
    let indice = 1;
    while (arrayGrupo.length > tamanho) {
        grupo = arrayGrupo.splice(0, tamanho);
        console.log(`Grupo ${indice}: ${grupo.join(", ")}.`);
        indice++;
    }
    console.log(`Grupo ${indice}: ${arrayGrupo.join(", ")}.`);
}

dividirGrupo(nomes, tamanhoDoGrupo);