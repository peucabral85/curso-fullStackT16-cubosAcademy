import { Request, Response } from 'express'
import { knex } from '../database/conexao'
import { Carro } from '../types/tipos'

export const listarCarros = async (req: Request, res: Response) => {
    try {
        const carros = await knex<Carro>('carros')
        return res.status(200).json(carros)

    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}

export const detalharCarros = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const carro = await knex<Carro>('carros').where({ id: Number(id) }).first()

        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado." })
        }

        return res.status(200).json(carro)

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}

export const cadastrarCarros = async (req: Request, res: Response) => {
    const { marca, modelo, cor, ano, valor } = req.body

    try {
        const carro = await knex<Omit<Carro, 'id'>>('carros').insert({
            marca,
            modelo,
            cor,
            ano,
            valor
        }).returning('*')

        return res.status(201).json(carro[0])

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}

export const atualizarCarros = async (req: Request, res: Response) => {
    const { marca, modelo, cor, ano, valor } = req.body
    const { id } = req.params

    try {
        const carro = await knex<Carro>('carros').where({ id: Number(id) }).first()

        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado." })
        }

        await knex<Carro>('carros').update({ marca, modelo, cor, ano, valor }).where({ id: Number(id) })

        return res.status(200).json({ mensagem: "Registro atualizado com sucesso." })

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." })
    }

}

export const excluirCarros = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const carro = await knex<Carro>('carros').where({ id: Number(id) }).first()

        if (!carro) {
            return res.status(404).json({ mensagem: "Carro não encontrado." })
        }

        await knex<Carro>('carros').delete().where({ id: Number(id) })

        return res.status(200).json({ mensagem: "Exclusão efetuada com sucesso." })

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}