const palavras = ['sol', 'computador', 'céu', 'livro', 'lua', 'universo', 'ar', 'casa'];


const fivecct = palavras.filter((p) => p.length < 5);

const mcl = fivecct.map((p) => p.charAt(0).toUpperCase() + p.slice(1));

console.log(mcl)