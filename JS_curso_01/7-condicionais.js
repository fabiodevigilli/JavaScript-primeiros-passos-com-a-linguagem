console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// Alt + Shift + F para identar código
// removendo apenas se cliente maior de 18 anos
// if (idadeComprador >= 18) {
//   console.log(`Comprador maior de idade`);
//   listaDeDestinos.splice(1, 1);
// } else {
//   // A pessoa é menor de idade, mas ela está acmpanhada de maior de idade?
//   if (estaAcompanhada) {
//     console.log(`Comprador está acompanhado de maior de idade`);
//     listaDeDestinos.splice(1, 1);
//   } else {
//     console.log(`Comprador Não é maior de idade e não posso vender`);
//   }
// }

if ( idadeComprador >= 18 || estaAcompanhada ) {
  console.log(`Boa viagem!`);
  listaDeDestinos.splice(1, 1);
} else {
  console.log(`Comprador Não é maior de idade e não posso vender`);
}

console.log(`Embarcando: \n\n`);

if (idadeComprador>=18 && temPassagemComprada) {
    console.log(`Boa Viagem!`);
} else {
    console.log(`Você não pode embarcar`);
}

console.log(listaDeDestinos);

// operadores lógicos ou operadores booleanos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
