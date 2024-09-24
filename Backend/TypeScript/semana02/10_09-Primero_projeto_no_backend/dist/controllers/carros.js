"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCarros = exports.atualizarCarros = exports.cadastrarCarros = exports.detalharCarros = exports.listarCarros = void 0;
const conexao_1 = require("../database/conexao");
const listarCarros = async (req, res) => {
    try {
        const carros = await (0, conexao_1.knex)('carros');
        return res.status(200).json(carros);
    }
    catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};
exports.listarCarros = listarCarros;
const detalharCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado." });
        }
        return res.status(200).json(carro);
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};
exports.detalharCarros = detalharCarros;
const cadastrarCarros = async (req, res) => {
    const { marca, modelo, cor, ano, valor } = req.body;
    try {
        const carro = await (0, conexao_1.knex)('carros').insert({
            marca,
            modelo,
            cor,
            ano,
            valor
        }).returning('*');
        return res.status(201).json(carro[0]);
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};
exports.cadastrarCarros = cadastrarCarros;
const atualizarCarros = async (req, res) => {
    const { marca, modelo, cor, ano, valor } = req.body;
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado." });
        }
        await (0, conexao_1.knex)('carros').update({ marca, modelo, cor, ano, valor }).where({ id: Number(id) });
        return res.status(200).json({ mensagem: "Registro atualizado com sucesso." });
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};
exports.atualizarCarros = atualizarCarros;
const excluirCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado." });
        }
        await (0, conexao_1.knex)('carros').delete().where({ id: Number(id) });
        return res.status(200).json({ mensagem: "Exclusão efetuada com sucesso." });
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};
exports.excluirCarros = excluirCarros;
