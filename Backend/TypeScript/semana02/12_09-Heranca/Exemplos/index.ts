import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Programador } from "./Programador";
import { Vendedor } from "./Vendedor";

const guido = new Programador('Guido', 300000, ['javascript', 'php'])
const ana = new Gerente('Ana', 400000, '12345')
const joao = new Vendedor('João', 300000, 120000)

// console.log(joao.calcularSalario());
// console.log(guido, ana, joao);
console.log(ana.validarSenha('12345'));

