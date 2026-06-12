class Estacionamento{
  constructor(limite){
    this.limite = limite
    this.veiculos = []
  }

  estacionar(veiculo){
    if (this.veiculos.length >= this.limite) {
      return 'Estacionamento cheio'
    }

    this.veiculos.push(veiculo)
    return 'Veiculo estacionado'
  }
}

const estacionamento = new Estacionamento(1)
console.log(estacionamento.estacionar('Carro'))
console.log(estacionamento.estacionar('Moto'))