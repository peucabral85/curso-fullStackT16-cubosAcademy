const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const filtraUsuarios = usuarios.filter((usuario) => {
    return usuario.idade >= 18 && usuario.idade <= 65
});

if (filtraUsuarios.length) {
    const verificaCnh = filtraUsuarios.every((usuario) => {
        return usuario.habilitado;
    });

    verificaCnh ? console.log('Todos passaram no teste.') : console.log('Todos precisam estar habilitados.');
} else {
    console.log('Não há usuários entre 18 a 65 anos.')
}