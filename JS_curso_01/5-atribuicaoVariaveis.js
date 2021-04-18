console.log("Trabalhando com atribuição de variáveis");

// let é uma variável comum que pode ser alterado
let contador = 0;
contador = contador + 1;

// const é um tipo de variável que não muda (procurar usar o const, evitar usar o let)
const primeiroNome = "Fábio";
const sobrenome = "Devigilli";

console.log(primeiroNome,sobrenome);
console.log(primeiroNome + " " + sobrenome);

console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;

console.log(primeiroNome);


let idade; // declarando variável
idade = 36; // atribuindo valor
idade = idade + 1;
console.log(idade);
