// Adicione 10 a um número qualquer.
// Entrada: 25
// Saída esperada: 35

const numero: number[]= [25];

const adicao = numero.reduce((acumulador, valorTotal) => acumulador + valorTotal, 10);

//const adicao = numero.map((n) => n + 10);

console.log("A adição resulta em:", adicao)