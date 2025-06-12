const aninhado = [[1, 2], [3, 4], [5]];

const achatado = aninhado.reduce((acc, arr) => acc.concat(arr), []);

console.log("Array achatado:", achatado); // [1, 2, 3, 4, 5]
