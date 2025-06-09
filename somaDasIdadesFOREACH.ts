    interface UsuarioType {
        nome: string;
        idade: number;
        email: string;
    }


    const listaUsuarios: UsuarioType[] = [
    { nome: "Ana Silva", idade: 28, email: "ana.silva@exemplo.com" },
    { nome: "Bruno Souza", idade: 34, email: "bruno.souza@exemplo.com" },
    { nome: "Carla Oliveira", idade: 25, email: "carla.oliveira@exemplo.com" },
    { nome: "Daniel Santos", idade: 41, email: "daniel.santos@exemplo.com" },
    { nome: "Eduarda Costa", idade: 22, email: "eduarda.costa@exemplo.com" },
    { nome: "Felipe Martins", idade: 30, email: "felipe.martins@exemplo.com" },
    { nome: "Gabriela Rocha", idade: 27, email: "gabriela.rocha@exemplo.com" },
    {
        nome: "Henrique Almeida",
        idade: 36,
        email: "henrique.almeida@exemplo.com",
    },
    { nome: "Isabela Lima", idade: 29, email: "isabela.lima@exemplo.com" },
    { nome: "João Pedro", idade: 33, email: "joao.pedro@exemplo.com" },
    { nome: "Karina Teixeira", idade: 24, email: "karina.teixeira@exemplo.com" },
    { nome: "Leonardo Nunes", idade: 39, email: "leonardo.nunes@exemplo.com" },
    { nome: "Marina Ribeiro", idade: 26, email: "marina.ribeiro@exemplo.com" },
    {
        nome: "Nathan Fernandes",
        idade: 31,
        email: "nathan.fernandes@exemplo.com",
    },
    { nome: "Olívia Moura", idade: 23, email: "olivia.moura@exemplo.com" },
    { nome: "Paulo Vitor", idade: 35, email: "paulo.vitor@exemplo.com" },
    { nome: "Queila Dias", idade: 40, email: "queila.dias@exemplo.com" },
    { nome: "Rafael Pinto", idade: 32, email: "rafael.pinto@exemplo.com" },
    { nome: "Sabrina Melo", idade: 27, email: "sabrina.melo@exemplo.com" },
    { nome: "Tiago Cunha", idade: 38, email: "tiago.cunha@exemplo.com" },
    { nome: "Ursula Farias", idade: 30, email: "ursula.farias@exemplo.com" },
    { nome: "Victor Lemos", idade: 28, email: "victor.lemos@exemplo.com" },
    { nome: "Wesley Barros", idade: 37, email: "wesley.barros@exemplo.com" },
    { nome: "Xênia Monteiro", idade: 26, email: "xenia.monteiro@exemplo.com" },
    { nome: "Yara Andrade", idade: 25, email: "yara.andrade@exemplo.com" },
    { nome: "Zeca Bastos", idade: 45, email: "zeca.bastos@exemplo.com" },
    { nome: "Amanda Torres", idade: 29, email: "amanda.torres@exemplo.com" },
    { nome: "Bernardo Campos", idade: 33, email: "bernardo.campos@exemplo.com" },
    { nome: "Camila Rezende", idade: 27, email: "camila.rezende@exemplo.com" },
    { nome: "Diego Azevedo", idade: 36, email: "diego.azevedo@exemplo.com" },
    { nome: "Elaine Lopes", idade: 31, email: "elaine.lopes@exemplo.com" },
    { nome: "Fábio Assis", idade: 34, email: "fabio.assis@exemplo.com" },
    { nome: "Giovana Prado", idade: 23, email: "giovana.prado@exemplo.com" },
    { nome: "Hugo Batista", idade: 28, email: "hugo.batista@exemplo.com" },
    { nome: "Ingrid Correia", idade: 29, email: "ingrid.correia@exemplo.com" },
    { nome: "Juliano Sales", idade: 40, email: "juliano.sales@exemplo.com" },
    { nome: "Kátia Navarro", idade: 35, email: "katia.navarro@exemplo.com" },
    { nome: "Lucas Vieira", idade: 30, email: "lucas.vieira@exemplo.com" },
    { nome: "Manuela Braga", idade: 26, email: "manuela.braga@exemplo.com" },
    { nome: "Nicolas Peixoto", idade: 32, email: "nicolas.peixoto@exemplo.com" },
    { nome: "Otávio Cardoso", idade: 39, email: "otavio.cardoso@exemplo.com" },
    { nome: "Priscila Neves", idade: 31, email: "priscila.neves@exemplo.com" },
    { nome: "Quintino Gama", idade: 42, email: "quintino.gama@exemplo.com" },
    { nome: "Renata Tavares", idade: 29, email: "renata.tavares@exemplo.com" },
    { nome: "Samuel Antunes", idade: 33, email: "samuel.antunes@exemplo.com" },
    { nome: "Tatiane Luz", idade: 27, email: "tatiane.luz@exemplo.com" },
    { nome: "Ulisses Rocha", idade: 38, email: "ulisses.rocha@exemplo.com" },
    { nome: "Valéria Costa", idade: 36, email: "valeria.costa@exemplo.com" },
    { nome: "Willian Duarte", idade: 34, email: "willian.duarte@exemplo.com" },
    ];


let somaIdades = 0;


    listaUsuarios.forEach((usuario) => {
        somaIdades += usuario.idade 
    });


    console.log("askdjskldsa", somaIdades)