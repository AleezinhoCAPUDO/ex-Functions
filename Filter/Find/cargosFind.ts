type Usuario = {
  nome: string;
  cargo: string;
};

const usuarios: Usuario[] = [
  { nome: 'Lucas', cargo: 'user' },
  { nome: 'Ana', cargo: 'moderator' },
  { nome: 'Bruna', cargo: 'admin' },
  { nome: 'Carlos', cargo: 'admin' },
];

const primeiroAdmin = usuarios.find((usuario) => usuario.cargo === 'admin');

console.log("Primeiro admin:", primeiroAdmin);
