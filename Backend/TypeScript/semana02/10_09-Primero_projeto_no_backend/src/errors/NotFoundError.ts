import { ApiError } from "./ApiError";

export class NotFoundError extends ApiError {
    constructor(mensagem: string) {
        super(mensagem, 404)
    }
}