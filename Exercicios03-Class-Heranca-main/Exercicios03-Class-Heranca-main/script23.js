class Personagem {
    constructor(nome, ataque, vida){
        this.nomePersonagem = nome
        this.ataquePersonagem = ataque
        this.vidaPersonagem = vida
    }

    atacar(inimigo){
        inimigo.vidaPersonagem -= this.ataquePersonagem;

        console.log(this.nomePersonagem + " Atacou " + inimigo.nomePersonagem)
        console.log("Vida restante de " + inimigo.nomePersonagem + ": " + inimigo.vidaPersonagem )
    }
}

class Elfo extends Personagem{
    constructor() {
        super("Elfo Robert", 100, 1000)
    }
}

class Ogro extends Personagem{
    constructor(){
        super("Ogro Grox", 100, 1000)
    }
}

const elfo = new Elfo()
const ogro =new Ogro()

elfo.atacar(ogro)
ogro.atacar(elfo)
elfo.atacar(ogro)

