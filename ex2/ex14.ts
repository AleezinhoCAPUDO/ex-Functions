// Converta segundos para minutos e segundos.
// Entrada: 125 segundos
// Saída esperada: 2 minutos e 5 segundos

const totalsecunds: number = 125; 

const minutes = Math.floor(totalsecunds / 60);
const secunds = totalsecunds % 60;

console.log(`A conversão de segundos para minutos fica: ${minutes} minutos e ${secunds} segundos.`);

