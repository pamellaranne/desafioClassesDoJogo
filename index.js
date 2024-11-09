class Heroi {

    constructor(nome, idade, tipoIndex) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = ["guerreiro", "mago", "monge", "ninja"];
        this.tipoHeroi = this.tipo[tipoIndex];
    }

    Atacar() {
        let ataque;

        switch (this.tipoHeroi) {
            case "guerreiro":
                ataque = "espada";
                break;

            case "mago":
                ataque = "magia";
                break;

            case "monge":
                ataque = "artes marciais";
                break;

            case "ninja":
                ataque = "shuriken";
                break;

            default:
                console.log("Informe uma opção válida.");
                break;
        }

        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}.`);
        console.log(`O ${this.tipoHeroi} de nome ${this.nome} e idade de ${this.idade} anos atacou usando ${ataque}.`);
    }
}

let guereiro = new Heroi("Pamella", 35, 0);
guereiro.Atacar();