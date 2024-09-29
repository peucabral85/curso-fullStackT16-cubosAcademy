import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../errors/ApiError';

const controleDeErros = (err: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode ?? 500;
    return res.status(statusCode).json({ mensagem: err.message });
};

export default controleDeErros;