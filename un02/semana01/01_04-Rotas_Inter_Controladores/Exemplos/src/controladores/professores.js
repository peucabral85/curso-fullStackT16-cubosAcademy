const professores = require('../bancodedados');

const filtrarProfessores = (req, res) => {
    const { stack } = req.query;
    let resultado = professores;

    console.log('Cheguei no controlador de listagem do professor.')

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        })
    }

    res.send(resultado);
};

const encontrarUmProfessor = (req, res) => {
    console.log('Rota para encontrar um professor.');
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    })
    res.send(professorEncontrado);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
};