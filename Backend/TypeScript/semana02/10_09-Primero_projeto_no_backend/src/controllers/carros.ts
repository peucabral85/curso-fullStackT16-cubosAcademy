import { Request, Response } from 'express'
import { knex } from '../database/conexao'
import { Carro } from '../types/tipos'
import { NotFoundError } from '../errors/NotFoundError'

export const listarCarros = async (req: Request, res: Response) => {
    const carros = await knex<Carro>('carros');
    return res.status(200).json(carros);
}

export const detalharCarros = async (req: Request, res: Response) => {
    const { id } = req.params;

    const carro = await knex<Carro>('carros').where({ id: Number(id) }).first();

    if (!carro) {
        throw new NotFoundError("Carro não encontrado.");
    }

    return res.status(200).json(carro);
}

export const cadastrarCarros = async (req: Request, res: Response) => {
    const { marca, modelo, cor, ano, valor } = req.body;

    const carro = await knex<Omit<Carro, 'id'>>('carros').insert({
        marca,
        modelo,
        cor,
        ano,
        valor
    }).returning('*');

    return res.status(201).json(carro[0]);
}

export const atualizarCarros = async (req: Request, res: Response) => {
    const { marca, modelo, cor, ano, valor } = req.body;
    const { id } = req.params;

    const carro = await knex<Carro>('carros').where({ id: Number(id) }).first();

    if (!carro) {
        throw new NotFoundError("Carro não encontrado.");
    }

    await knex<Carro>('carros').update({ marca, modelo, cor, ano, valor }).where({ id: Number(id) });

    return res.status(200).json({ mensagem: "Registro atualizado com sucesso." });
}

export const excluirCarros = async (req: Request, res: Response) => {
    const { id } = req.params;

    const carro = await knex<Carro>('carros').where({ id: Number(id) }).first();

    if (!carro) {
        throw new NotFoundError("Carro não encontrado.");
    }

    await knex<Carro>('carros').delete().where({ id: Number(id) });

    return res.status(200).json({ mensagem: "Exclusão efetuada com sucesso." });
}