// 1. Soma de dois números

// Input: (3, 7)
// Output: 10

const numbersSum: number[]= [3,7];

const sum = numbersSum.reduce((n, nCurrent) => n + nCurrent, 0)

console.log("A soma dos números dão o resutlado:", sum)