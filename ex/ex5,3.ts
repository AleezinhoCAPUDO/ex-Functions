const transacoes = [
  { descricao: 'Compra mercado', valor: 50 },
  { descricao: 'Venda produto', valor: 120 },
  { descricao: 'Transferência recebida', valor: 300 },
  { descricao: 'Lanche', valor: 25 },
  { descricao: 'Freelance', valor: 150 }
];


const acimade100 = transacoes.filter((acm)=> acm.valor > 100);

const somaGastos = acimade100.reduce((acc, acm) => acc + acm.valor, 0);

console.log(somaGastos)