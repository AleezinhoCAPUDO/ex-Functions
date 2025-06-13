// Obtenha o resto da divisão entre dois números.
// Entrada: 17 % 5
// Saída esperada: 2

const numbers: number[]= [17,5];

const divison = numbers.reduce((n, nCurrent) => n % nCurrent);

console.log("O resto da divisão é:",divison)