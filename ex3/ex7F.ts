// 7. É palíndromo?

// Input: "Arara"
// Output: É palíndromo

const textPalindrome = "Ame a ema";

function removeSpacesAndAccents(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .join('')
    .toLowerCase();
}

function invertText(text: string): string {
  let invert = '';
  for (let i = text.length - 1; i >= 0; i--) {
    invert += text[i];
  }
  return invert;
}

function palindromeChecker(text: string): string {
  const normalized = removeSpacesAndAccents(text);
  const reversed = invertText(normalized);

  if (normalized === reversed) {
    return 'É palíndromo';
  } else {
    return 'Não é um palíndromo';
  }
}

console.log(palindromeChecker(textPalindrome));
