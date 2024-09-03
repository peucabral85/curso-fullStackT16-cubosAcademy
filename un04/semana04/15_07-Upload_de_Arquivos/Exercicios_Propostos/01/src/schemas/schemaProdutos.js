const joi = require('joi');

const schemaCadastrarProduto = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório.',
        'string.empty': 'O campo nome é obrigatório.',
        'string.base': 'O campo nome deve ser uma string.'
    }),

    estoque: joi.number().integer().min(0).required().messages({
        'any.required': 'O campo estoque é obrigatório.',
        'number.min': 'O valor de estoque informado não deve ser negativo.',
        'number.base': 'O campo estoque deve ser um number.',
        'number.integer': 'O valor de estoque informado deve ser um número inteiro.'
    }),

    preco: joi.number().integer().positive().required().messages({
        'any.required': 'O campo preço é obrigatório.',
        'number.positive': 'O preço informado deve ser positivo.',
        'number.base': 'O valor de preço informado precisa ser um número.',
        'number.integer': 'Por favor, informe o preço em centavos.'
    }),

    categoria: joi.string().messages({
        'string.base': 'Por favor, o campo categoria deve ter o formato de string.',
        'string.empty': 'O campo categoria, se informado, não pode ser vazio.'
    }),

    descricao: joi.string().required().messages({
        'any.required': 'O campo descrição é obrigatório.',
        'string.empty': 'O campo descrição é obrigatório.',
        'string.base': 'O campo descrição deve ser uma string.'
    })
});

const schemaAtualizarProduto = joi.object({
    nome: joi.string().optional(),
    estoque: joi.number().integer().min(0).optional(),
    preco: joi.number().integer().positive().optional(),
    categoria: joi.string().optional(),
    descricao: joi.string().optional()
}).or('nome', 'estoque', 'preco', 'categoria', 'descricao').messages({
    'object.missing': 'Informe ao menos um campo para atualização do produto.'
});

module.exports = {
    schemaCadastrarProduto,
    schemaAtualizarProduto
};