const cpf = "12345678900";
const cnpj = "12345678000199";

function formatCpf(string) {
    if (string.length != 11) {
        return 'Cpf inválido.';
    }
    const bloco1 = string.slice(0, 3);
    const bloco2 = string.slice(3, 6);
    const bloco3 = string.slice(6, 9);
    const bloco4 = string.slice(9);
    return `${bloco1}.${bloco2}.${bloco3}-${bloco4}`;
}

function formatCnpj(string) {
    if (string.length != 14) {
        return 'Cnpj inválido.';
    }
    const bloco1 = string.slice(0, 2);
    const bloco2 = string.slice(2, 5);
    const bloco3 = string.slice(5, 8);
    const bloco4 = string.slice(8, 12);
    const bloco5 = string.slice(12);
    return `${bloco1}.${bloco2}.${bloco3}/${bloco4}-${bloco5}`;
}

console.log(formatCpf(cpf));
console.log(formatCnpj(cnpj));