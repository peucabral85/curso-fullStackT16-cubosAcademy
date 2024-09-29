export class ApiError extends Error {
    public statusCode: number;

    constructor(mensagem: string, statusCode: number) {
        super(mensagem);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}