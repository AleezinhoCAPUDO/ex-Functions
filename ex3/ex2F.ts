// 2. Inverter string

// Input: "hello"
// Output: "olleh"

function invertText(texto:string):string {
    let invert = '';
    for(let i = texto.length -1; i >= 0; i--) {
        invert += texto[i];
    }
    return invert
}



 const wordToReverse = "Paralélepipedo";

//  const reversedWord = wordToReverse.split('').join('')

 console.log("Sua palavra aos contra fica:", invertText(wordToReverse).split('').join(''))

