const numeros: number[] = [4, 10, 14, 21, 35, 42, 50];

const divisivelPor2e5 = numeros.find((n) => n % 2 === 0 && n % 5 === 0);

console.log("Primeiro divisível por 2 e 5:", divisivelPor2e5);  
