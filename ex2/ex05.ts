// Multiplique dois números.
// Entrada: 6, 7
// Saída esperada: 42

const numbers: number[]= [6,7];

const sum = numbers.reduce((n, nCurrent) => n * nCurrent);

console.log("Resultado da multiplicação fica:", sum)