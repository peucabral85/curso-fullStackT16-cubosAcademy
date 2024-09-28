import { Crud } from "./Crud";
import { TPessoa } from "./Types/TPessoa";

export class Pessoa extends Crud<TPessoa> {
    listarPorEmail(email: string): TPessoa {
        const emailEncontrado = this.dados.find(dado => dado.email === email)
        if (!emailEncontrado) {
            throw new Error(`Email não encontrado.`);
        }

        return emailEncontrado
    }
}