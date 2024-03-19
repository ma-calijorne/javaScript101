/*
COMPARAÇÕES
Conhecemos muitos operadores de comparação da matemática.

Em JavaScript eles são escritos assim:

Maior/menor que: a > b, a < b.
Maior/menor que ou igual a: a >= b, a <= b.
Igual a: a == b, observe que o sinal de igualdade duplo == significa o teste de igualdade, enquanto um único a = b significa uma atribuição.
Não é igual: Em matemática, a notação é ≠, mas em JavaScript é escrita como a != b.
Aqui aprenderemos mais sobre diferentes tipos de comparações, como o JavaScript as faz, incluindo peculiaridades importantes.

Booleano é o resultado
Todos os operadores de comparação retornam um valor booleano:

verdadeiro -- significa "sim", "correto" ou "a verdade".
false -- significa "não", "errado" ou "não é a verdade".
*/

alert(2 > 1);
alert(2 == 1);
alert(2 != 1);

// Podemos fazer comparações de String

alert( 'Z' > 'A' ); 
alert( 'Glow' > 'Glee' );
alert( 'Bee' > 'Be' ); 
alert('AA' == 'aa');

/*
Para ver se uma string é maior que outra, o JavaScript usa a chamada ordem "dicionário" ou "lexicográfica".
Em outras palavras, as strings são comparadas letra por letra.


Comparação de Tipos diferentes:
Quando valores de tipos diferentes são comparados o JS converte os mesmos para números.

*/

alert('2' > 1); 
alert('01' == 1);

//PECULIARIDADE 1:

let val1 = 0;
alert(Boolean(val1));

let val2 = "0";
alert(Boolean(val2));

alert(val1 == val2);

/*
Comparação com Nulo e "Undefined"

Existe um comportamento não intuitivo quando nulo ou indefinido são comparados a outros valores.
Para uma verificação de igualdade estrita, devemos usar === : Esses valores são diferentes, porque cada um deles é de um tipo diferente.
*/

alert( null === undefined ); // false
alert( null == undefined ); // true

//PECULIARIDADE 2:
//Vamos comparar Nulo com 0

alert(null > 0);
alert(null == 0);
alert(null >= 0);

/*
Matematicamente, isso é estranho. O último resultado afirma que "nulo é maior ou igual a zero", então em uma das comparações acima deve ser verdadeiro, mas ambos são falsos.
A razão é que uma verificação de igualdade == e comparações > < >= <= funcionam de maneira diferente. 
As comparações convertem nulo em um número, tratando-o como 0. É por isso que (3) nulo >= 0 é verdadeiro e (1) nulo > 0 é falso.
Por outro lado, a verificação de igualdade == para indefinido e nulo é definida de forma que, 
sem nenhuma conversão, eles sejam iguais entre si e não sejam iguais a mais nada. É por isso que (2) null == 0 é falso.


Por que examinamos esses exemplos? Devemos nos lembrar dessas peculiaridades o tempo todo? 
Bem, na verdade não. Na verdade, essas coisas complicadas gradualmente se tornarão familiares com o tempo, mas há uma maneira sólida de evitar problemas com elas:
Trate qualquer comparação com indefinido/nulo, exceto a igualdade estrita === com cuidado excepcional.
Não use comparações >= > < <= com uma variável que pode ser nula/indefinida, 
a menos que você tenha certeza do que está fazendo. Se uma variável puder ter esses valores, verifique-os separadamente.
*/



/*

TAREFA:

Qual será o resultado das expressões abaixo?

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

*/

