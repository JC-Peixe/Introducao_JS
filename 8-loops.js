console.log(`\n Trabalhando com Listas`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)


const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(`\nDestinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1);
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

console.log("Embarque: \n")
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else {
    console.log("Você não pode embarcar");
}


