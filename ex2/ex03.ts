    // Subtraia o segundo número do primeiro.
    // Entrada: 20, 8
    // Saída esperada: 12

    const numeros: number[]= [20, 8];

    const minus = numeros.reduce((n, nCurrent) => n - nCurrent);

    console.log("O resultado da subtração é:", minus)