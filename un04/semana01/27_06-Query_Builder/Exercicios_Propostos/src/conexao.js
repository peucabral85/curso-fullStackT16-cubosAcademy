const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'seuUsuarioBd',
        password: 'suaSenhaBD',
        database: 'market_cubos'
    }
});

module.exports = knex;
