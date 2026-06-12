class Musica{
  constructor(titulo, duracao){
    this.titulo = titulo
    this.duracao = duracao
  }
}

class Playlist{
  constructor(){
    this.musicas = []
  }

  adicionarMusica(musica){
    this.musicas.push(musica)
  }

  ordenarPorDuracao(){
    this.musicas.sort((a, b) => a.duracao - b.duracao)
  }
}

const playlist = new Playlist()
playlist.adicionarMusica(new Musica('Musica A', 200))
playlist.adicionarMusica(new Musica('Musica B', 120))
playlist.ordenarPorDuracao()
console.log(playlist.musicas)