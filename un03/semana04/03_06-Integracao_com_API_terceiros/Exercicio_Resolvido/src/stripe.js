const instanciaAxios = require('./api');
const qs = require('qs');

// Cria um novo paymentIntent
const criarCobranca = async (amount, payment_method) => {
    const dadosCobranca = qs.stringify({
        amount,
        currency: 'brl',
        payment_method,
        automatic_payment_methods: {
            enabled: 'true',
            allow_redirects: 'never'
        }
    });

    const { data: cobranca } = await instanciaAxios.post('/payment_intents', dadosCobranca);

    return cobranca;
}

const confirmarCobranca = async (paymentIntentId) => {
    const { data: cobrancaConfirmada } = await instanciaAxios.post(`/payment_intents/${paymentIntentId}/confirm`);

    return cobrancaConfirmada;
}

module.exports = {
    criarCobranca,
    confirmarCobranca
}