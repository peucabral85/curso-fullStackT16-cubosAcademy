const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(lista, nome) {
    lista.push(nome);
    console.log(lista.join(", "));
}

function atenderPaciente(lista) {
    lista.shift();
    console.log(lista.join(", "));
}

function cancelarAtendimento(lista, nome) {
    const indice = lista.indexOf(nome);
    if (indice != -1) {
        lista.splice(indice, 1);
        console.log(lista.join(", "));
    } else {
        console.log("Paciente informado não consta na lista.")
    }
}

cancelarAtendimento(pacientes, "João");