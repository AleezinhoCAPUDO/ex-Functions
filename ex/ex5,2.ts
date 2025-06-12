    const usuarios = [
    { nome: "Carlos", sobrenome: "Silva", idade: 28 },
    { nome: "Ana", sobrenome: "Oliveira", idade: 34 },
    { nome: "Marcos", sobrenome: "Souza", idade: 22 },
    { nome: "Beatriz", sobrenome: "Almeida", idade: 19 },
    { nome: "João", sobrenome: "Pereira", idade: 41 },
    { nome: "Lívia", sobrenome: "Costa", idade: 25 }
    ];

    const limiteIdade = usuarios.filter((il) => il.idade < 30).map((il) => `${il.nome}${il.sobrenome}`).sort();






































    // const limiteIdade = usuarios.filter((lI) => lI.idade < 30).map((lI) =>`${lI.nome}${lI.sobrenome}`).sort();

    // console.log(limiteIdade)


