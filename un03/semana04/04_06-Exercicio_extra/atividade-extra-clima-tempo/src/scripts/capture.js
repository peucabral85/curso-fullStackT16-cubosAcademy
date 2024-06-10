const fs = require('fs');
const readline = require('readline');
const { format } = require('date-fns');
const { instanciaBrasilApi, instanciaOpenWeather, instanciaNewsApi, instanciaIBGE } = require('../api/api');
const pool = require('../connections/conexao');


const lerCepDoArquivo = async (arquivo) => {
    const ceps = [];

    try {
        console.log("Lendo arquivo");
        const rl = readline.createInterface({
            input: fs.createReadStream(arquivo),
            crlfDelay: Infinity
        });

        for await (const linha of rl) {
            ceps.push(linha);
        }

        return ceps;
    } catch (error) {
        console.log('Erro interno do servidor na leitura do arquivo.');
    }
}

const consultaApis = async (cep) => {
    try {
        const { data } = await instanciaBrasilApi.get(`/${cep}`);

        if (Object.keys(data.location.coordinates).length === 0) {
            return `O CEP ${cep} não possui coordenadas geográficas.`;
        }

        const { data: estado } = await instanciaIBGE.get(`/${data.state}`);

        const { longitude, latitude } = data.location.coordinates;
        const { data: dadosClima } = await instanciaOpenWeather.get(`/weather?units=metric&lang=pt_br&lat=${latitude}&lon=${longitude}`);

        const temperatura = dadosClima.main.temp;
        const descricao = dadosClima.weather[0].description;
        const data_hora = format(dadosClima.dt * 1000, 'yyyy-MM-dd HH:mm:ss');

        const { data: dadosNews } = await instanciaNewsApi.get(`/everything?q="${estado.nome}"%20OR%20"${data.city}"`);

        const cepInserido = await pool.query(`
            insert into ceps (cep, cidade, bairro, estado, latitude, longitude)
            values ($1, $2, $3, $4, $5, $6) returning id
            `, [data.cep, data.city, data.neighborhood, data.state, latitude, longitude]
        );

        await pool.query(`
            insert into clima (cep_id, temperatura, descricao, data_hora)
            values ($1, $2, $3, $4) returning id
            `, [cepInserido.rows[0].id, temperatura, descricao, data_hora]
        );

        for (const artigo of dadosNews.articles) {
            const { title, description, url, publishedAt, urlToImage } = artigo;

            if (title !== "[Removed]") {
                await pool.query(`
                    insert into noticias (cep_id, titulo, descricao, url, data_hora, foto_de_capa)
                    values ($1, $2, $3, $4, $5, $6)
                    `, [cepInserido.rows[0].id, title, description, url, publishedAt, urlToImage]
                );
            }
        }

        return `As informações do CEP ${cep} foram inseridas com sucesso.`;

    } catch (error) {
        return 'Erro interno do servidor!';
    }
}

async function main() {
    try {
        const ceps = await lerCepDoArquivo('../ceps.txt');

        console.log("Processando arquivo.");
        for (const cep of ceps) {
            if (cep.length !== 8) {
                console.log(`O CEP ${cep} é inválido. Não possui 8 caracteres.`);
                continue;
            }

            const cepJaExiste = await pool.query(`select * from ceps where cep = $1`, [cep]);
            if (cepJaExiste.rowCount > 0) {
                console.log(`O CEP ${cep} já possui informações no banco de dados.`);
                continue;
            }

            const retornoApis = await consultaApis(cep);
            console.log(retornoApis);
        }
        console.log('Processamento finalizado!');
    } catch (error) {
        console.log("Erro interno do servidor.");
    }
}

main();