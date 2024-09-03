//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300_000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1_000_000;

if (rendaMensalEmCentavos <= 200_000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
} else if (totalJaPagoPeloAluno >= 1_800_000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a dívida de R$ 18000,00 já foi quitada.`);
} else if (mesesDecorridos > 60) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o período de contrato de 60 meses expirou.`);
} else {
    console.log(`O valor da parcela deste mês é de ${(rendaMensalEmCentavos * 0.18 / 100).toLocaleString('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' })} reais`);
}   