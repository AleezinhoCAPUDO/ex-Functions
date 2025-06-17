// 3. Fatorial

// Input: 5
// Output: 120


function fatorial(n:number):number {
    let resultado = 1;
    for(let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    
    return resultado
}

console.log(fatorial(5))


