console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis:`);
console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(`Array`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`    
);

// adicionando um item na lista
listaDeDestinos.push(`Curitiba`);

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // removendo a cidade de São Paulo => splice(posição da lista, qtde de itens deletados)

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // usando o índice da lista para apresentar dados.

console.log(listaDeDestinos[1], listaDeDestinos[0]);