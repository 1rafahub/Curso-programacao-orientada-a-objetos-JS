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
    }
}

pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.dizerIdade();
pessoa.podeDirigir()

let calculadora = {
    numeros: 0,
    somar: function(a,b) {
        this.numeros = a + b;
    },
    subtrair: function(a) {
        this.numeros -= a;
    }
}

calculadora.somar(2,4);
console.log(calculadora.numeros);
calculadora.subtrair(5);
console.log(calculadora.numeros);
