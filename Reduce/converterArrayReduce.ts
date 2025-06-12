const pares: { chave: string, valor: any }[] = [
  { chave: 'nome', valor: 'Ana' },
  { chave: 'idade', valor: 25 },
  { chave: 'cidade', valor: 'São Paulo' },
];

const objeto = pares.reduce((acc, par) => {
  acc[par.chave] = par.valor;
  return acc;
}, {} as Record<string, any>);

console.log("Objeto:", objeto);
