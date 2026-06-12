class Elevador {
  constructor(totalAndares, capacidade){
    this.andarAtual = 0
    this.totalAndares = totalAndares
    this.capacidade = capacidade
    this.pessoas = 0
  }

  subir(){
    if (this.andarAtual < this.totalAndares){
      this.andarAtual++
    }
  }

  descer(){
    if (this.andarAtual > 0) {
      this.andarAtual--
    }
  }

  entrarPessoas(quantidade){
    if (this.pessoas + quantidade <= this.capacidade){
      this.pessoas += quantidade
      return 'Pessoas entraram'
    }

    return 'Capacidade excedida'
  }
}

const elevador = new Elevador(10, 4)
elevador.subir()
console.log(elevador.andarAtual)
console.log(elevador.entrarPessoas(3))