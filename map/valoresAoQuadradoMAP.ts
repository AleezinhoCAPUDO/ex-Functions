const numeros: number[] = [2,4,6,8,10];

const numerosAoCubo = numeros.map((numeros) => numeros ** 3);
const numerosMultiplicados = numeros.map((numeros) => numeros * 19);
const numerosDivididos = numeros.map((numeros) => numeros / 2);

console.log("Os números ao cubo ficam:", numerosAoCubo, "já os números divididos pela metade ficam:", numerosDivididos, "e os númemros vezes 19 ficam:", numerosMultiplicados  );d