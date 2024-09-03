const axios = require('axios');
const keyCompanyEnrichment = require('../keys/keysApi');

const instanciaCompanyEnrichment = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1',
    params: {
        api_key: `${keyCompanyEnrichment}`
    }
});

module.exports = instanciaCompanyEnrichment;