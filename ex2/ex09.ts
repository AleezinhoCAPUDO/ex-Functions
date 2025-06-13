// Verifique se o número é par ou ímpar.
// Entrada: 7
// Saída esperada: Ímpar

const number: number[]= [7];

const oddOrEven = number.map((number) => number % 2 === 0 ? `${number} é par` : `${number} é impar`);

console.log(oddOrEven)