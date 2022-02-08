//Propriedades do Obejto


let carro = {
    portas: 4,
    cor: "verde"
}

let pessoa = {
    nome: "Rafael"
}

console.log(carro.portas);
console.log(carro.cor);

if(carro.portas>2){
    console.log("Este carro tem mais que duas portas");
}

console.log(pessoa["nome"]);

let = nomePessoa = pessoa["nome"];

console.log("O nome tem " + nomePessoa.length + " letras");

