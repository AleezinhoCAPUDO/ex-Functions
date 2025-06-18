const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverse(num: number[]) {

    let result = '';

    for (let i = 0; i < num.length; i++) {
        const reversedNumbers = num[num.length - 1 - i];
        if (reversedNumbers % 2 === 0) {
         result += reversedNumbers;

        }
    }
    console.log(result)
    
}
reverse(numbers)