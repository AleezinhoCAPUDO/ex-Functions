const numeros: number[] = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("Soma:", soma); 
