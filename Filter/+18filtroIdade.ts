type usuario = {
    nome: string;
    idade: number;
};

const usuarios: usuario[] = [
    {nome: 'McPoze', idade: 29 },
    {nome: 'Oruam', idade: 17},
    {nome: 'Claudomiro', idade: 49},
    {nome: 'Senna', idade: 15},
];

const maiorIdade = usuarios.filter((usuario) => usuario.idade > 18);

console.log("Maiores de idade são:", maiorIdade);