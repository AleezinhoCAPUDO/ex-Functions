// Subtraia um custo do valor da carteira e divida o que sobrou entre 3 pessoas.
// Entrada: Carteira = 100, Custo = 40
// Saída esperada: Cada um recebe 20

const wallet: number[]= [100, 40];

const costs = wallet.reduce((n, nCurrent) => n - nCurrent);

const distribution = costs / 3;

console.log("Cada pessoa vai receber:", distribution)


