const { S3Client } = require('@aws-sdk/client-s3');

const client = new S3Client({
    forcePathStyle: true,
    region: process.env.STORAGE_REGION,
    endpoint: process.env.STORAGE_ENDPOINT,
    credentials: {
        accessKeyId: process.env.STORAGE_ACCESS_KEY,
        secretAccessKey: process.env.STORAGE_SECRET_KEY
    }
});

module.exports = client;