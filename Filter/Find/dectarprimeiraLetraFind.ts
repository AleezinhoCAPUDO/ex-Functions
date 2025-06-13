const palavras: string[] = ['banana', 'uva', 'abacaxi', 'laranja', 'amora'];

const palavraa = palavras.find((palavra) => palavra.startsWith('a') || palavra.startsWith('A'));

console.log("Primeira palavra que começa com A:", palavraa);
