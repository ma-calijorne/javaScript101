/*

Funções de seta:

Há outra sintaxe muito simples e concisa para criar funções, que geralmente é melhor 
do que Expressões de função.

É chamado de "funções de seta", porque se parece com isso:


let func = (arg1, arg2, ..., argN) => expression;

Isso cria uma função func que aceita argumentos arg1..argN, avalia a expressão do lado 
direito com seu uso e retorna seu resultado.

Em outras palavras, é a versão mais curta de:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

*/

let soma = (a, b) => a + b;

// A declaração em seta acima é igual a:

let soma2 = function( a, b){

    return a + b;

}

alert( soma(1, 2) ); 
alert( soma2(1, 2) ); 

/*

Funções de seta multilinha:

As funções de seta que vimos até agora eram muito simples. Eles pegaram argumentos da 
esquerda de =>, avaliaram e retornaram a expressão do lado direito com eles.

Às vezes, precisamos de uma função mais complexa, com várias expressões e instruções. 
Nesse caso, podemos colocá-los entre chaves. 

A principal diferença é que as chaves requerem um retorno dentro delas para retornar 
um valor (assim como uma função regular faz).

Assim:

*/

let sum = (a, b) => {  
    let result = a + b;
      return result; 
};
  
alert( sum(1, 2) );