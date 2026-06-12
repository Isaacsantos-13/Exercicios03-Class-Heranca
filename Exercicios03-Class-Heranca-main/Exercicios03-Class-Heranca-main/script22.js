class Livro {
    constructor(titulo, autor){
        this.tituloLivro = titulo
        this.autorLivro = autor
    }
}

class Biblioteca{
    constructor(){
        this.livros = []
    }

    adicionarLivro(livro){
        this.livros.push(livro)
    }

    buscarPorAutor(nome){
        return this.livros.filter(livro => livro.autorLivro === nome)
    }
}

const livro01 = new Livro("Romeu e Julieta", "William Shakespeare")
const livro02 = new Livro("Crime e Castigo", "Fiódor Dostoiévski")
const livro03 = new Livro("Senhor dos Anéis", "J.R.R Tolkien")

const biblioteca = new Biblioteca()

biblioteca.adicionarLivro(livro01)
biblioteca.adicionarLivro(livro02)
biblioteca.adicionarLivro(livro03)

console.log(biblioteca.buscarPorAutor("William Shakespeare"))