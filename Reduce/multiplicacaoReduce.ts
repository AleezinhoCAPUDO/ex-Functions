const numeros: number[] = [1, 2, 3, 4];

const produto = numeros.reduce((acc, n) => acc * n, 1);

console.log("Produto:", produto); // 24
