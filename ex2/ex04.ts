// Subtraia uma penalidade de 100 pontos.
// Entrada: Penalidade = 15
// Saída esperada: 85

const penalty: number[]= [100, 15];

const result = penalty.reduce((n, nCurrent) => n - nCurrent);

console.log("The subtracted penalty becomes:", result)

