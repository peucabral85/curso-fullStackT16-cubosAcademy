const knex = require('../connection/conexao');

const cadastrarPostagem = async (req, res) => {
    const { id } = req.usuario;
    const { texto, fotos } = req.body;

    const transacao = await knex.transaction();

    try {
        const postagem = await transacao('postagens').insert({ texto, usuario_id: id }).returning('*');

        const fotosComId = fotos.map(foto => ({ ...foto, postagem_id: postagem[0].id }));

        await transacao('postagens_fotos').insert(fotosComId);

        await transacao.commit();
        return res.status(201).json({ mensagem: "Postagem cadastrada com sucesso!" });

    } catch (error) {
        await transacao.rollback();
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const curtirPostagem = async (req, res) => {
    const { postagemId } = req.params;
    const { id } = req.usuario;

    try {
        const postagem = await knex('postagens').where({ id: postagemId }).first();

        if (!postagem) {
            return res.status(404).json({ mensagem: "Postagem não encontrada." });
        }

        const postagemCurtida = await knex('postagens_curtidas').where({ usuario_id: id, postagem_id: postagem.id }).first();

        if (postagemCurtida) {
            return res.status(409).json({ mensagem: "O usuário já curtiu esta postagem." });
        }

        await knex('postagens_curtidas').insert({ usuario_id: id, postagem_id: postagem.id });

        return res.status(200).json({ mensagem: "Postagem curtida com sucesso." });

    } catch (error) {
        return res.status(200).json({ mensagem: "Erro interno do servidor." });
    }
}

const comentarPostagem = async (req, res) => {
    const { id } = req.usuario;
    const { texto } = req.body;
    const { postagemId } = req.params;

    try {
        const postagem = await knex('postagens').where({ id: postagemId }).first();

        if (!postagem) {
            return res.status(404).json({ mensagem: "Postagem não encontrada." });
        }

        await knex('postagens_comentarios').insert({ usuario_id: id, postagem_id: postagem.id, texto });

        return res.status(201).json({ mensagem: "Comentário adicionado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const mostrarFeed = async (req, res) => {
    const { id } = req.usuario;
    const { offset } = req.query;

    try {
        const postagens = await knex('postagens')
            .where('usuario_id', '!=', id)
            .limit(10)
            .offset(offset ? offset : 0);

        if (postagens.length < 1) {
            return res.status(200).json(postagens);
        }

        for (const postagem of postagens) {
            //usuario
            const usuario = await knex('usuarios')
                .select('imagem', 'username', 'verificado')
                .where({ id: postagem.usuario_id })
                .first();
            postagem.usuario = usuario;

            //fotos
            const fotos = await knex('postagens_fotos')
                .select('imagem')
                .where({ postagem_id: postagem.id });
            postagem.fotos = fotos;

            //curtidas
            const curtidas = await knex('postagens_curtidas')
                .select('usuario_id')
                .where({ postagem_id: postagem.id });
            postagem.curtidas = curtidas.length;

            //curtido pelo usuário logado
            postagem.curtidaPorMim = postagens.find(curtida => curtida.usuario_id === id) ? true : false;

            //comentários
            const comentarios = await knex('postagens_comentarios')
                .select('usuarios.username', 'postagens_comentarios.texto')
                .leftJoin('usuarios', 'usuarios.id', 'postagens_comentarios.usuario_id')
                .where({ postagem_id: postagem.id });
            postagem.comentarios = comentarios;
        }

        return res.status(200).json(postagens);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    cadastrarPostagem,
    curtirPostagem,
    comentarPostagem,
    mostrarFeed
}