import { Request, Response } from 'express';
import { BadRequestError } from '../errors/BadRequestError';
import { NotFoundError } from '../errors/NotFoundError';

export const criarUsuario = async (req: Request, res: Response) => {
    const { nome, idade } = req.body;

    if (!nome) {
        throw new BadRequestError("Campo nome é obrigatório");
    }

    if (!idade) {
        throw new NotFoundError("Idade não encontrada.");
    }

    res.status(200).json({ mensagem: `Tudo certo, ${nome}` });
};