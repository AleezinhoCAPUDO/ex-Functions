const itens: string[] = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'banana'];

const contagem = itens.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log("Contagem de itens:", contagem);
