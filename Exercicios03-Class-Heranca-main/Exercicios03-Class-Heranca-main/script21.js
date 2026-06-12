class Produto {
    constructor(nome, preco){
    this.nomeProduto = nome
    this.precoProduto = preco
    }
}

class Carrinho {
    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto){
        this.produtos.push(produto)
    }

    calcularTotal() {
        let total = 0;

        this.produtos.forEach(produto => {
            total += produto.precoProduto;
        })

        return total
    }
}

const produto01 = new Produto("Teclado", 300)
const produto02 = new Produto("Mouse", 200)
const produto03 = new Produto("HeadSet", 150)

const carrinho = new Carrinho();

carrinho.adicionarProduto(produto01)
carrinho.adicionarProduto(produto02)
carrinho.adicionarProduto(produto03)

console.log("Total da compra: R$ " + carrinho.calcularTotal())