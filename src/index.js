class Gerreiro {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "mago"){
            console.log(`${this.tipo} atacou usando magia`);
        } else if (this.tipo === 'guerreiro') {
            console.log(`${this.tipo} atacou usando espada`);
        } else if (this.tipo === "monge") {
            console.log(`${this.tipo} atacou usando artes maciais`);
        } else if (this.tipo === "ninja") {
            console.log(`${this.tipo} atacou usando shuriken`);
        } else {
            console.log("tipo desconhecido");
        }
    }
}

const Mago = new Gerreiro("Gandalf", 2019, "mago");
const Guerreiro = new Gerreiro("Conan", 35, "guerreiro");
const Monge = new Gerreiro("Shaolin", 50, "monge");
const Ninja = new Gerreiro("Hattori", 30, "ninja");

Mago.atacar();
console.log("==================================");
Guerreiro.atacar();
console.log("==================================");
Monge.atacar();
console.log("==================================");
Ninja.atacar();