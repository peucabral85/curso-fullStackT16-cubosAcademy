const pool = require('../connections/conexao');

const listarDados = async (req, res) => {
    const { cep, page, limit } = req.query;

    const offset = (page - 1) * limit;

    const consultaDados = await pool.query(`
        select ce.cep, ce.cidade, ce.estado, cl.temperatura, cl.descricao as tempo,
        n.titulo, n.descricao, n.url, to_char(n.data_hora, 'YYYY-MM-DD HH:MM:SS') as data_hora
        from ceps ce
        inner join clima cl on ce.id = cl.cep_id
        inner join noticias n on ce.id = n.cep_id
        where ce.cep = $1
        order by n.data_hora desc
        limit $2 offset $3`
        , [cep, limit, offset]);

    const noticias = consultaDados.rows.map(dados => {
        return {
            "titulo": dados.titulo,
            "descricao": dados.descricao,
            "url": dados.url,
            "data_hora": dados.data_hora
        }
    });

    const resultado = {
        "pagina": page,
        "cep": consultaDados.rows[0].cep,
        "cidade": consultaDados.rows[0].cidade,
        "estado": consultaDados.rows[0].estado,
        "temperatura": `${consultaDados.rows[0].temperatura} ºC`,
        "tempo": consultaDados.rows[0].tempo,
        noticias
    }

    res.status(201).json(resultado);
}

module.exports = listarDados;