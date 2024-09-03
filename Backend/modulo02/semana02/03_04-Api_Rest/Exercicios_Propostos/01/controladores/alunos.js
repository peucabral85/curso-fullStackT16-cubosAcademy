let { alunos, identificadorAluno } = require('../dados/bancoDeDados');
const { cursos } = require('../dados/cursos');

const verificaId = (id) => {
    if (Number(id) < 0 || Number(id) % 1 !== 0 || isNaN(id)) {
        return true;
    }
    return false;
}

const verificaDados = (nome, sobrenome, idade, curso) => {
    if (!nome || !sobrenome || !idade || !curso) {
        return true;
    } else if (nome.trim() === '' || sobrenome.trim() === '' || curso.trim() === '') {
        return true;
    }
    return false;
}

const verificaIdade = (idade) => {
    if (Number(idade) < 18) {
        return true;
    }
    return false;
}

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
}

const obterAluno = (req, res) => {
    const { id } = req.params;

    if (verificaId(id)) {
        return res.status(400).json({ mensagem: 'O ID dever ser um número válido.' });
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
    }

    return res.status(200).json(aluno);
}

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (verificaDados(nome, sobrenome, idade, curso)) {
        return res.status(400).json({ mensagem: 'É obrigatório informar todos os dados e que os dados sejam válidos.' });
    }

    if (verificaIdade(idade)) {
        return res.status(400).json({ mensagem: 'Não foi possível realizar o cadastro. Aluno é menor de idade.' });
    }

    const verificaCurso = cursos.find((cursoBd) => {
        return cursoBd === curso;
    });

    if (!verificaCurso) {
        return res.status(400).json({ "mensagem": "O curso informado não é válido. Cadastro não realizado." });
    }

    const aluno = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno);

    return res.status(201).send();
}

const excluirALuno = (req, res) => {
    const { id } = req.params;

    if (verificaId(id)) {
        return res.status(400).json({ mensagem: 'O ID dever ser um número válido.' });
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id);
    });

    return res.status(200).json(aluno);
}

const substituirAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    if (verificaDados(nome, sobrenome, idade, curso)) {
        return res.status(400).json({ mensagem: 'É obrigatório informar todos os dados e que os dados sejam válidos.' });
    }

    if (verificaIdade(idade)) {
        return res.status(400).json({ mensagem: 'Não foi possível realizar a substituição. Idade informada menor que 18 anos.' });
    }

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!alunoEncontrado) {
        return res.status(404).json({ mensagem: 'Não foi possível realizar a substituição. Aluno não encontrado.' });
    }

    const verificaCurso = cursos.find((cursoBd) => {
        return cursoBd === curso;
    });

    if (!verificaCurso) {
        return res.status(400).json({ "mensagem": "O curso informado não é válido. Substituição não realizada." });
    }

    alunoEncontrado.nome = nome;
    alunoEncontrado.sobrenome = sobrenome;
    alunoEncontrado.idade = idade;
    alunoEncontrado.curso = curso;

    res.status(201).json({ "mensagem": "Substituição efetuada." });
}

const alterarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    if (verificaIdade(idade)) {
        return res.status(400).json({ mensagem: 'Não foi possível realizar a alteração. Idade informada menor que 18 anos.' });
    }

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!alunoEncontrado) {
        return res.status(404).json({ mensagem: 'Não foi possível realizar a alteração. Aluno não encontrado.' });
    }

    if (curso) {
        const verificaCurso = cursos.find((cursoBd) => {
            return cursoBd === String(curso);
        });

        if (!verificaCurso) {
            return res.status(400).json({ "mensagem": "O curso informado não é válido. Alteração não realizada." });
        }
    }

    alunoEncontrado.nome = nome ?? alunoEncontrado.nome;
    alunoEncontrado.sobrenome = sobrenome ?? alunoEncontrado.sobrenome;
    alunoEncontrado.idade = idade ?? alunoEncontrado.idade;
    alunoEncontrado.curso = curso ?? alunoEncontrado.curso;

    res.status(201).json({ "mensagem": "Alteração realizada." });
}

module.exports = {
    listarAlunos,
    obterAluno,
    cadastrarAluno,
    excluirALuno,
    substituirAluno,
    alterarAluno
}