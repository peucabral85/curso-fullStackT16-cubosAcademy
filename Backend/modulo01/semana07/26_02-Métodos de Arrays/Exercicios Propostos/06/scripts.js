const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

function buscaDono(pet) {
    let donoEncontrado;
    for (const usuario of usuarios) {
        if (usuario.pets.includes(pet)) {
            donoEncontrado = usuario;
        }
    }
    if (donoEncontrado) {
        console.log(`O dono(a) do(a) ${pet} é o(a) ${donoEncontrado.nome}.`);
    } else {
        console.log(`Que pena ${pet}, não encontramos seu dono(a).`);
    }
}

buscaDono("Lessie");