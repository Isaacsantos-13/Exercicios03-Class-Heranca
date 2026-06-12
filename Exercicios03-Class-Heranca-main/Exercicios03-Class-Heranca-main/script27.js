class Contato{
    constructor(nome, numero){
        this.nomeContato = nome
        this.numeroContato = numero
    }


}

class Agenda {
    constructor(){
        this.contatos = []
    }

    adicionarContato(contato){
        this.contatos.push(contato)
    }

    removerContato(nome){
        this.contatos = this.contatos.filter(
            contato => contato.nomeContato !== nome
        )
    }

    listarContatos(){
        console.log(this.contatos)
    }
}

const contato01 = new Contato("Isaac", "11 999999999")
const contato02 = new Contato("Roberson", "11 988888888")

const agenda = new Agenda()

agenda.adicionarContato(contato01)
agenda.adicionarContato(contato02)

agenda.listarContatos()

agenda.removerContato("Roberson")

agenda.listarContatos()