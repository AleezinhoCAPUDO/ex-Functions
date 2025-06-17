// 4. Contar vogais

// Input: "abacaxi"
// Output: 3 vogais

function contadorVogais (texto:string): number {
    return texto
    .toLowerCase()
    .split('')
    .filter(letra => 'aeiou'.includes(letra))
    .length;
}

console.log(contadorVogais("Paralelepipedo"))