import ApiError from "./ApiError";

export class BadRequestError extends ApiError {
    constructor(mensagem: string) {
        super(mensagem, 400)
    }
}