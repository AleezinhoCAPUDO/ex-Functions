const numeros: number[] = [10,42,23,78,11];

// const numerospares = numeros.filter((numeros) => numeros % 2 === 0);

// const quadrado = numerospares.map((numerospares) => numerospares ** 2);

// const soma = quadrado.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0);


const contas = numeros.filter((n) => n  % 2 === 0).map((n) => n ** 2).reduce((acc,n) => acc + n, 0);

console.log("o valor total é:", contas)
