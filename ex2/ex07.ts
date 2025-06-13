// Divida o primeiro número pelo segundo.
// Entrada: 20, 4
// Saída esperada: 5

const numbers: number[]= [20,4];

const division = numbers.reduce((n, nCurrent) => n / nCurrent);

console.log("O resultado da divisão fica:", division)