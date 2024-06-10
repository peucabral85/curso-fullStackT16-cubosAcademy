const axios = require('axios');
const { keyOpenWeather, keyNewsApi } = require('../keys/keysApi');

const instanciaBrasilApi = axios.create({
    baseURL: 'https://brasilapi.com.br/api/cep/v2'
});

const instanciaOpenWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: `${keyOpenWeather}`
    }
});

const instanciaNewsApi = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        apiKey: `${keyNewsApi}`
    }
});

const instanciaIBGE = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
});

module.exports = {
    instanciaBrasilApi,
    instanciaOpenWeather,
    instanciaNewsApi,
    instanciaIBGE
}