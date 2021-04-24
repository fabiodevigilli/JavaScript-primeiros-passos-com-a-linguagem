/// https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex

// https://regex101.com/r/HKNt2s/3

console.log ("javascript-replace-manipulando-strings-e-regex");

// const CPFSemFormatacao = 'cpf é 25684677037';

// const CPFFormatado = CPFSemFormatacao.replace('25684677037', '256.846.770-37');

// console.log(CPFFormatado);

// ====================================================

// const frase = 'Frase com uma palavra-feia';

// const fraseAtualizada = frase.replace('palavra-feia', '********');

// console.log(fraseAtualizada); // O retorno seria 'Frase com uma ********')

// ====================================================

// const frase = 'Frase com uma palavra-feia e tem outra palavra-feia no final';

// const fraseAtualizada = frase.replace('palavra-feia', '********');

// console.log(fraseAtualizada); // O retorno seria "Frase com uma ******** e tem outra palavra-feia no final"

// ====================================================

// const frase = 'Frase que começa com uma palavra-feia e tem outra palavra-feia no final'

// const fraseAtualizada = frase.replace(/palavra-feia/g, '********') 

// console.log(fraseAtualizada) // "Frase que começa com um ******** e tem outra ******** no final"

// ====================================================

// As Regex procuram padrões, a forma mais direta é escrever a própria palavra que você deseja encontrar:

// /palavra/

// o mesmo funciona para números:

// /12345679810/

// Porém, se você quiser algo mais abrangente com caracteres especiais e tudo mais, onde a ordem não importe, será necessário definir um range de caracteres:

// [A-Z0-9!-]

// E ainda no exemplo anterior, para pegar mais de um caracter é necessário declarar quantas ocorrências você procura:

// [A-Z0-9!-]{3}

// Também é possível simplificar, para capturar somente caracteres alfa numéricos você pode usar:

// \w

// Já para capturar caracteres referentes a digitos você pode usar:

// \d

// E caso você queira capturar grupos dentro de um match de regex para poder trabalhar melhor como veremos nos próximos exemplos, podemos utilizar os parenteses:

// (\d{4})-(\d{4})

// Existem outros casos como utilizar a "?" para alguma parte da regex ser opcional, os marcadores de começo "^" e fim "$", mas isso tudo renderia uma série de posts ou mesmo um curso.

// ====================================================

// const cpf = '12345679810'

// const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

// console.log(cpfFormatado) // O retorno seria 123.456.798-10

// ====================================================

const cpf = '12345679810'

const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
  console.log(arguments) // é uma forma de visualizar todos os parâmetros que essa função está recebendo, o numero de grupos pode variar e assim fica fácil de debugar.
  return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
})

console.log(cpfFormatado) // O retorno seria 123.456.798-10

// ====================================================

// Métodos de String
// Há muitos métodos essenciais na String, alguns outros interessantes:

// split: É ultra útil quando você quer quebrar uma string em uma ou mais partes agrupadas em um array.
// trim: É muito usada ao receber um input do usuário para remover espaços em branco antes do começo da string e após o último caracter que não seja um espaço em branco.
// includes: Essa é minha função favorita das strings, ela retorna true ou false se houver ou não, respectivamente, na string base o valor que você passa como argumento para o .includes().