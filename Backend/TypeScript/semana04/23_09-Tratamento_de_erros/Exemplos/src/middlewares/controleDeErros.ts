import { Request, Response, NextFunction } from 'express'
import ApiError from '../errors/ApiError'

const controleErro = (err: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode ?? 500
    return res.status(statusCode).json({ message: err.message });
};

export default controleErro