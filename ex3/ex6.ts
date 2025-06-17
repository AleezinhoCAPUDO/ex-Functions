// 6. Senha válida (mínimo 8 caracteres)?

// Input: "abc123"
// Output: false

function passwordChecker(password: string){
    if(password.length <= 8) {
        return "Sua senha contém 8 caractéres ou menos"
    }if(password.length > 8){
        {
        return "Sua senha contém mais caractéres que o permitido!"
       } 
    }
}
    
console.log(passwordChecker("abc12345"))        // ✅ válida (8)
console.log(passwordChecker("senha12345678"))   // ❌ inválida (14)
console.log(passwordChecker("12345678"))        // ✅ válida (8)
console.log(passwordChecker("abcd"))            // ❌ inválida (4)
console.log(passwordChecker("1234abcd5678"))    // ❌ inválida (12)
console.log(passwordChecker("pass1234"))        // ✅ válida (8)
console.log(passwordChecker("abcdefghijklmno")) // ❌ inválida (15)
console.log(passwordChecker("senha123"))        // ✅ válida (8)
console.log(passwordChecker("senha1234"))       // ❌ inválida (9)
console.log(passwordChecker("senha!@#"))        // ✅ válida (8)
console.log(passwordChecker("a1b2c3d4e5f6"))     // ❌ inválida (12)
console.log(passwordChecker("zxcvbnm1"))        // ✅ válida (8)
console.log(passwordChecker("zxcvbnm123456"))   // ❌ inválida (13)
console.log(passwordChecker("QWERTY12"))        // ✅ válida (8)
console.log(passwordChecker("123456789"))       // ❌ inválida (9)

