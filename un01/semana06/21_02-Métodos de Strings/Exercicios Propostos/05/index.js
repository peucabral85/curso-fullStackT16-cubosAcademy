const numeroCartao = '1111222233334444';

const primeirosDigitos = numeroCartao.slice(0, 4)
const ultimosDigitos = numeroCartao.slice(-4);
console.log(primeirosDigitos.padEnd(12, "*") + ultimosDigitos);