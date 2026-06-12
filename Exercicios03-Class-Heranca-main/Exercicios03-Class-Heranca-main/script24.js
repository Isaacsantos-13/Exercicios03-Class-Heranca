class Veiculo{
    constructor(marca, modelo, cor, placa, manutencao){
        this.marcaVeiculo = marca
        this.modeloVeiculo = modelo
        this.corVeiculo = cor
        this.placaVeiculo = placa
        this.precisaManutencao = manutencao
    }
}

class Empresa{
    constructor() {
        this.veiculos = []
    }

    adicionarVeiculos(veiculo){
        this.veiculos.push(veiculo);
    }

    listarManutencao() { 
        return this.veiculos.filter(
            veiculo => veiculo.precisaManutencao === true
        )
    }
}

const veiculo01 = new Veiculo("Ford", "Ka", "Preto", "H13S76X", true)
const veiculo02 = new Veiculo("Fiat", "Uno", "Branco", "F24W58Q", false)
const veiculo03 = new Veiculo("Hyundai", "HB20", "Branco", "R4F251P", true)

const empresa = new Empresa()

empresa.adicionarVeiculos(veiculo01)
empresa.adicionarVeiculos(veiculo02)
empresa.adicionarVeiculos(veiculo03)

console.log(empresa.listarManutencao())