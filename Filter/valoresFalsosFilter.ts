const misturados: any = [1, 6, null, 19, undefined, '', 10];

const filtrados = misturados.filter(Boolean);

console.log("Sem valores falsos", filtrados);