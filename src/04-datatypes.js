/*
Um valor em JavaScript é sempre de um determinado tipo. Por exemplo, uma string ou um número.

Existem oito tipos básicos de dados em JavaScript. Vamos abordando todas ao longo do curso.

Podemos colocar qualquer tipo em uma variável. Por exemplo, uma variável pode em um momento 
ser uma string e depois armazenar um número:
*/

let message;

message = "sua string aqui";

alert(message);

message = 1;
message_2 = 3;

alert(message + message_2);


let inteiro;
let numerico;
let string;

inteiro = 1;
numerico = 3.14;
string = "Mensagem";

// Alguns tipos importantes:
// Infinity: representa o infinito matemático ∞. É um valor especial que é 
//maior do que qualquer número.
alert(1 / 0);

alert(Infinity);

//NaN: representa um erro computacional. É resultado de uma operação matemática 
//ncorreta ou indefinida.
alert("Not a Number" / 2);

// O NaN é "pegajoso":  Qualquer operação que envolva NaN retorna NaN

console.log(NaN + 1)
console.log(10 * NaN)

// BigInt
//Variáveis inteiras ou numericas não conseguem representar números maiores que 2^53 -1, 
//ou seja 9007199254740991, nesses casos, usamos variáveis ou constantes bigint

const cBigInt = 1234567890123456789012345678901234567890n

//O n no final indica que a constante cBigInt será do tipo BigInt


//String
let name = "Marco";

// Embutir a variável
alert( `Olá, *!*${name}*/!*!` ); // Olá, Marco!

// Embutir a expressão
alert( `O Resultado é *!*${1 + 2}*/!*` ); 
