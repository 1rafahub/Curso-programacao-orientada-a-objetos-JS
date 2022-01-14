let pessoa = {
    nome: "Rafael", 
    idade: 29,
    falar: function() {
        console.log("Oi eu sou " + pessoa.nome);
    },
    aniversario() {
        this.idade += 1;
    },
    dizerIdade() {
        console.log("A minha idade é " + this.idade);

    },
    podeDirigir: function() {
        if(this.idade >= 18) {
            console.log ("Pode dirigir");

        }else {
            console.log("Ainda não pode dirigir")
        }
    },
    caracteristicas: {
        cnh: true,
        carteira: ["dinheiro", "documento", "moeda"]
    }
}

console.log(caracteristicas);
console.log(caracteristicas.carteira[2]);