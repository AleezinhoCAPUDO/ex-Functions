// Calcule a média aritmética de três valores.
// Entrada: 4, 6, 10
// Saída esperada: 6,67

const numbers: number[]= [4,6,10];

const sum = numbers.reduce((n, nCurrent) => n + nCurrent, 0);

const arithmeticMean = sum / numbers.length;

console.log("A média aritmética será:" arithmeticMean.toFixed(2))