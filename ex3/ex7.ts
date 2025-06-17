// 7. Está entre 10 e 20?

// Input: 15
// Output: true


function betweenNumber (numero: number) {
    if(numero >= 10 && numero <= 20 ){
        return "Seu número está entre 10 e 20"
    }else {
        return "seu número não se encontra entre 10 e 20"
    }
}






console.log(betweenNumber(5));     // false
console.log(betweenNumber(10));    // true
console.log(betweenNumber(15));    // true
console.log(betweenNumber(20));    // true
console.log(betweenNumber(25));    // false
console.log(betweenNumber(9));     // false
console.log(betweenNumber(11));    // true
console.log(betweenNumber(21));    // false
console.log(betweenNumber(19));    // true
console.log(betweenNumber(100));   // false
