// 5. É múltiplo de 3 e 5?

// Input: 15
// Output: true

const numbers= [15];

if(numbers.find((n) => n % 3 === 0 && n % 5 === 0)) {
    console.log("O numero é divisível por 3 e 5!")
} else {
    console.log("O número não é divisíel por 3 e por 5")
};