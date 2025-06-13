// Some dois números.
// Entrada: 4, 7
// Saída esperada: 11

    const numeros: number[]= [4,7];

    const somaNumeros = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    console.log("A soma dos números é:", somaNumeros )