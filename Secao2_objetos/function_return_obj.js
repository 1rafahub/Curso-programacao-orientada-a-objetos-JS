function criaCarro(modelo,portas,aro,tetoSolar) {
    return {
        modeloDoCarro: modelo,
        portas: portas,
        tetoSolar: tetoSolar,
        aro: aro,
        ligarCarro: function() {
            console.log("Ligou");
        },
        temTetoSolar: function() {
            if(this.tetoSolar == true) {
                console.log("Tem teto solar");

            } else {
                console.log("Não tem teto solar");
            }
        }
    }
}

let ferrari = criaCarro("Ferrari", 4, 18, true);

console.log(ferrari.modeloDoCarro);

ferrari.ligarCarro();
ferrari.temTetoSolar();

let bmw = criaCarro("BMW", 2, 16, false);

console.log(bmw.modeloDoCarro)