// https://www.alura.com.br/artigos/tagged-template-literals

console.log ("Tagged Template Literals");

// ====================================================

// const palavra = 'interpolada';

// console.log('Minha string ' + palavra);

/* É necessário deixar um espaço no final da string, caso contrário a

palavra **string** e **interpolada** apareceriam juntas. */

// ====================================================

// const palavra = 'interpolada';

// console.log(`Minha Template Literal ${palavra}`); 

//saída: “Minha Template Literal interpolada

// ====================================================

// minhaFunction = (texto) =>{
//     console.log(texto);
// }

// minhaFunction( 'texto como parâmetro' );

// A saída é a string ‘texto como parâmetro’

// ====================================================

// minhaFunction = (texto) =>{
//     console.log(texto);
// }
// minhaFunction(['texto como parâmetro A']);
// minhaFunction`texto como parâmetro B`;

// ====================================================

// minhaFunction = (arrayDeStrings, palavra) =>{
//     console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
// }

// const palavra = 'alura';

// minhaFunction`Eu estudo na ${palavra} todos os dias`, palavra;

// ====================================================

// minhaFunction = (arrayDeStrings, palavra) =>{
//     console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
// }

// const palavra = 'alura';

// minhaFunction(['Eu estudo na ', ' todos os dias'], palavra);

// ====================================================

// minhaFunction = (arrayDeStrings, palavra, periodo) =>{
//     console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}${periodo}`);
// }

// const palavra = 'alura';
// const periodo = 'semana';

// // As duas chamadas são equivalentes!

// minhaFunction`Eu estudo na ${palavra} todos os dias da ${periodo}`, null, null;

// minhaFunction(['Eu estudo na ' ,' todos os dias da '], palavra, periodo);

// ====================================================

// function negrito(arrayStrings, ...valores) {

//     return arrayStrings.reduce((acumulador, string, i) => {
//      return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`;
//    }, '');
// }

// const nome = 'Paulo Scalercio';
// const redeSocial = '@PauloScalercio';

// console.log(negrito`${nome} trabalha na Caelum/Alura como desenvolvedor e instrutor e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}`);

// ====================================================

// REDUCE

// https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380

// ====================================================

// const numeros = [0, 1, 2, 3, 4, 5, 6];
// let total = numeros.reduce((acumulador, numero, indice, original) => {
// console.info(`${acumulador} total até o momento`);
// console.log(`${numero} valor atual`);
// console.log(`${indice} indice atual`);
// console.log(`${original} array original`);
// return acumulador += numero;
// }, 0)
// console.warn('acaboooou');
// console.log(total)


// ====================================================

// const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
// let ab = a.reduce((acumulador, elemento) => acumulador += elemento,
// b.reduce((acumulador, elemento) => acumulador += elemento, 0))
// console.log(ab);

// ====================================================

// const animais = [
//     {
//       nome: 'Fumaça',
//       idade: 3,
//       tipo: 'cao'
//     },
//     {
//       nome: 'Tobby',
//       idade: 6,
//       tipo: 'cao'
//     },
//     {
//       nome: 'Laminha',
//       idade: 1,
//       tipo: 'gato'
//     },
//     {
//       nome: 'Nutella',
//       idade: 3,
//       tipo: 'cao'
//     },
//     ];

//     let dogsAgeSum = animais.reduce((total, elemento) => {
//         if (elemento.tipo === 'cao') return total += (elemento.idade *=7);
//         else return total}, 0);

//         console.log(dogsAgeSum);

// ====================================================
        
// const sons = ["auau", "miau", "cócóricó"];

// const sonsHtml = sons.reduce((acc, som) => {
//   return (acc += `<li>${som}</li>`);
//   }, "");
  
//Ou se você quiser economizar linhas.
// const sonsHtml = sons.reduce((acc, som) => acc += `<li>${som}</li>`, "");

// console.log(sonsHtml);

// ====================================================

// se a lista for grande, e eu ficar precisando buscar carros a todo momento, não vai ser legal ficar iterando pela lista (complexidade O(n), então eu gosto de indexar pra ficar com a complexidade O(1).
// Performaticamente pode salvar a sua vida, se liga:
const lista = [
    {id: 1, nome: "gol"},
    {id: 2, nome: "ferrari"},
    {id: 3, nome: "camaro :)"}
];
const callback = (acumulador, valor) => {
    acumulador[valor.id] = valor.nome
    return acumulador
};
const valorInicial = {};
const carrosIndexadosPorId = lista.reduce(callback, valorInicial);
console.log(carrosIndexadosPorId[3]) //camaro :)