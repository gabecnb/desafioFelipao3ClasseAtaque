class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {

    let ataque;

    switch (this.tipo) {
      case "Mago":
        ataque = "magia";
        break;
      case "Guerreiro":
        ataque = "espada";
        break;
      case "Ninja":
        ataque = "shuriken";
        break;
      case "Monge":
        ataque = "artes marciais";
        break;
      default:
        console.log("ataque desconhecido");
    }
    console.log(`${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi1 = new Heroi("Gerald", 130, "Mago");
heroi1.atacar();

let heroi2 = new Heroi("Ragnar", 35, "Guerreiro");
heroi2.atacar();

let heroi3 = new Heroi("Naruto", 28, "Ninja");
heroi3.atacar();

let heroi4 = new Heroi("Rafael", 40, "Monge");
heroi4.atacar();
