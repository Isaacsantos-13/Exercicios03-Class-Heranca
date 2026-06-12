class Conta{
    constructor(titular, saldo){
        this.titularConta = titular
        this.saldoConta = saldo
    }

    transferir(valor, contaDestino){
        if(valor > this.saldoConta){
            console.log("Saldo insuficiente para essa transferência!")
        }else{
            this.saldoConta -= valor
            contaDestino.saldoConta += valor

            console.log(this.titularConta + " Transferiu R$" + valor + " para " + contaDestino.titularConta)
        }
    }
}

const contaJailson = new Conta("Jailson", 100000)
const contaIsaac = new Conta("Isaac", 100)

contaJailson.transferir(1000, contaIsaac)

console.log("Saldo Jailson: ", contaJailson.saldoConta)
console.log("Saldo Isaac: ", contaIsaac.saldoConta)
