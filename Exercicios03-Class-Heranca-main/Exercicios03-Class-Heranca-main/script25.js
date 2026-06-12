/* class Funcionario{
    constructor(nome, salario){
        this.nomeFuncionario = nome  
        this.salarioFuncionario = salario
    }

        calcularSalario(){
        console.log(this.nomeFuncionario)
        console.log("Salário fixo: " + this.salarioFuncionario + " Comissão: " + this.comissao)
        console.log("Salário total: " + (this.salarioFuncionario + this.comissao))
    }
}

class Vendedor extends Funcionario{
    constructor(comissao){
        super("Roberto", 3500)
        this.comissao = comissao
    }
}

class Gerente extends Funcionario{
    constructor(comissao){
        super("Eduardo", 7000)
        this.comissao = 3000
    }
}

const vendedor01 = new Vendedor(1500)
const gerente01 = new Gerente()

vendedor01.calcularSalario()
gerente01.calcularSalario() */

class Funcionario{
    constructor(nome, salario){
        this.nomeFuncionario = nome  
        this.salarioFuncionario = salario
    }

    calcularSalario(){
        return this.salarioFuncionario;
    }
}

class Vendedor extends Funcionario{
    constructor(comissao){
        super("Roberto", 3500)
        this.comissao = comissao
    }

    calcularSalario(){
       return this.salarioFuncionario + this.comissao
    }

}

class Diretor extends Funcionario{
    constructor(bonus){
        super("Eduardo", 7000)
        this.bonus = 3000
    }

    calcularSalario(){
       return this.salarioFuncionario + this.bonus
    }
}

const vendedor01 = new Vendedor(1500)
const diretor01 = new Diretor()

console.log("Salário do Vendedor " + vendedor01.nomeFuncionario + ": " + vendedor01.calcularSalario())
console.log("Salário do Diretor " + vendedor01.nomeFuncionario + ": " + diretor01.calcularSalario())