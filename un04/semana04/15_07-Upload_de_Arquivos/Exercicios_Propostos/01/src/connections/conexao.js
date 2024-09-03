const { S3Client } = require('@aws-sdk/client-s3');

const clientS3 = new S3Client({
    forcePathStyle: true,
    region: process.env.STORAGE_REGION,
    endpoint: `https://${process.env.STORAGE_ENDPOINT}`,
    credentials: {
        accessKeyId: process.env.STORAGE_KEYID,
        secretAccessKey: process.env.STORAGE_APPKEY
    }
});

const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    }
});

module.exports = {
    knex,
    clientS3
};