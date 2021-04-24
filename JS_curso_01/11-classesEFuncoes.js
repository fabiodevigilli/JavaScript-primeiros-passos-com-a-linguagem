// https://cursos.alura.com.br/classes-e-funcoes-em-javascript-c300

// Objeto literal (não podemos passar novos parametros alterando dados, nem adicionar novos livros)
// const Livro = {
//     nome: "React Native",
//     editora: "Casa do Código",
//     paginas: 185,
//     anunciar: function() {
//         console.log("A Alura indica o livro " + this.nome + "!")
//     }
// }

// Livro.anunciar();

// =========================================================

// CRIANDO UMA FUNÇÃO
// Neste caso a função é usada para a construção de objeto
// Fazendo aqui o papel de uma classe, pois classe é o nome 
// de estrutura usada para criar objetos.

// const Livro = function(nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function() {
//         return gNome;
//     }

//     this.getEditora = function() {
//         return gEditora;
//     }

//     this.getPaginas = function() {
//         return gPaginas;
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do Código", 143);

// console.log(GraphQL.getNome());
// console.log(GraphQL.getEditora());
// console.log(GraphQL.getPaginas());

// =========================================================

// prototype

// const nome = "Alura";
// qdo criamos a linha acima, por baixo dos panos o javascript faz o seguinte:
// const temp = new String(nome);

// console.log(temp.toString());

// =========================================================

// CLASSES
// não tem a propriedade de hoisted

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`);
    }

    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

const novoLivro = new Livro("Primeiros passos com NodeJs", "Casa do Código", 195);
novoLivro.anunciarTitulo();
novoLivro.descreverTitulo();

console.log(typeof Livro);

// =========================================================

// Herança

class LivroColecao extends Livro {
    constructor(nome, nomecolecao) {
        super(nome); // super, palavra chave utilizada para disponibilizar essas propriedades no construtor da classe, ou seja, queremos utilizar da classe extendida apenas a propriedade "nome"
        this.nomecolecao = nomecolecao;
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomecolecao}`);
    }
}

const logicaDeProgamacao = new LivroColecao("Lógica de Programação", "Comece a Programar");

logicaDeProgamacao.descreverColecao();