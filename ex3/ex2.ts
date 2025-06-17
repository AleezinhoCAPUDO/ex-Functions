// 2. É maior de idade?

// Input: 17
// Output: false

const age: number= 17;

function ofLegalAge(age: number): boolean {
    return age >= 18;
};

console.log("É de maior cidadão?", ofLegalAge(age))