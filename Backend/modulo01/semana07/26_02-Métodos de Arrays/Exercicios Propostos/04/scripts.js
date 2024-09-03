const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function controleAtendimento(lista, tipoOp, nome) {
    if (tipoOp === "agendar") {
        lista.push(nome);
    } else {
        lista.shift();
    }
    console.log(lista.join(", "));
}

controleAtendimento(pacientes, "atender");
controleAtendimento(pacientes, "agendar", "Miguel");