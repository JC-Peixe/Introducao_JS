console.log(`Trabalhando com Listas`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)


const idadeComprador = 15;

const estaAcompanhada = true;
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de Idade")
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else if (estaAcompanhada) {
    console.log("Comprador é menor de idade, mas está acompanhada, pode realizar a compra!")
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else {
    console.log("Comprador menor de idade, não posso vender!")

}



