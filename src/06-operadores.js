/*

Todos conhecemos vários operadores como adição (+), subtração (-), multiplicação (*) e divisão (/), são os operadores aritiméticos básicos.

Neste arquivo, começaremos com operadores simples e depois nos concentraremos nos aspectos específicos do JavaScript, não cobertos pela aritmética escolar.

*/

/*
Termos Importantes: Antes de tudo vamos alinhar algumas terminologias:

Um operando: É onde os operadores são aplicados. Por exemplo, na multiplicação de 5 * 2 existem dois operandos: o operando da esquerda é 5 e o da direita é 2. Muitas
vezes são chamados também de "argumentos".
*/


//Um operador é unário (unary) se tiver um único operando. Por exemplo, a negação unária - inverte o sinal de um número:

let x = 1;
x = -x;
alert( x );

//O operador + pode ser usado também como unário para converter numeros negativos em positivos

//Um operador é binário se tiver dois operandos. O mesmo sinal de menos também existe na forma binária:

let x1 = 1, y = 3;
alert( y - x1 );

/*Formalmente, nos exemplos acima temos dois operadores diferentes que compartilham o mesmo símbolo: o operador de negação, 
um operador unário que inverte o sinal, e o operador de subtração, um operador binário que subtrai um número do outro.

Operadores Matemáticos:

Adição +,
Subtração -,
Multiplicação *,
Divisão /,
Resto %,
Exponencial **.

*/
console.log(7+2);
console.log(7-2);
console.log(7*2);
console.log(7/2);
console.log(7%2);
console.log(7**2);


/*
Concatenação de String: Usamos o operador + para concatenar Strings

*/

let nome;
let sobrenome;

nome = "Marco"
sobrenome = "Calijorne"
alert(nome + " " + sobrenome + " Idade = 42");

//Qual é a saida?
alert(2 + 2 + '1'); 

//Qual é a saida?
alert('1' + 2 + 2); 


//Os outros operadortes trabalham apenas com números, assim o operador converte caso exista uma string.
//Qual é a saída?
alert(6 - '2'); 

//Qual é a saída?
alert('6' / '2');

//Qual é a saída?
alert(6 / '3n');


/*
PRECEDÊNCIA DE EXECUÇÃO:

Se uma expressão possui mais de um operador, a ordem de execução é definida pela precedência deles, ou seja, a ordem de prioridade padrão dos operadores.
Desde a escola, todos sabemos que a multiplicação na expressão 1 + 2 * 2 deve ser calculada antes da adição. Essa é exatamente a coisa de precedência. 
Diz-se que a multiplicação tem precedência maior do que a adição.
Os parênteses substituem qualquer precedência, portanto, se não estivermos satisfeitos com a ordem padrão, podemos usá-los para alterá-la. Por exemplo, escreva (1 + 2) * 2.
Existem muitos operadores em JavaScript. Cada operador tem um número de precedência correspondente. Aquele com o maior número executa primeiro. 
Se a precedência for a mesma, a ordem de execução é da esquerda para a direita.

Aqui está uma parte da tabela de precedência (você não precisa se lembrar disso, mas observe que os operadores unários são mais altos que os binários correspondentes):


Precedence	    Name	            Sign
...	            ...	                ...
14	            unary plus	        +
14	            unary negation	    -
13	            exponentiation	    **
12	            multiplication	    *
12	            division	        /
11	            addition	        +
11	            subtraction	        -
...	            ...	                ...
2	            assignment	        =
...	            ...	                ...

IGUAL: O igual =, também é um operador e tem uma prioridade muito baixa.

*/

let x2 = 2 * 2 + 1;
alert(x2);


//Outra característica importante do igual é poder encadea-lo.

let a, b, c;

a = b = c = 2 + 2;

alert(a);
alert(b); 
alert(c); 

//Se possuem a mesma prioridade a execução evolui da direita para a esquerda.


/*Modificação local (Modify-in-place) e auto-incremento
Muitas vezes precisamos aplicar um operador a uma variável e armazenar o novo resultado nessa mesma variável.
*/

let index;
index = 0;
index = index + 5;
alert(`O Valor de index sem alteração da notação é ${index}`);

//Exite uma notação especifica para isso que implica em colocar o operador utilizado à frente do operador =.

index = 0;
index += 5;
alert(`O Valor de index com alteração da notação é ${index}`);

//Para incrementar e decrementar (de 1 em 1), podemos utilizar 3 notações diferentes. As duas acima e:

let counter = 0;
counter++;
alert(`O valor de Counter é: ${counter}`);

let dCounter = 10;
dCounter--;
alert(`O Valor de dCounter é: ${dCounter}`);

/*
O operador vírgula , é um dos operadores mais raros e incomuns. Às vezes, é usado para escrever um código mais curto, então precisamos conhecê-lo para entender o que está acontecendo.
O operador vírgula nos permite avaliar várias expressões, dividindo-as com uma vírgula ,. Cada um deles é avaliado, mas apenas o resultado do último é retornado.
*/

let eval = (1 + 2, 3 + 4);
alert(eval);
/*Aqui, a primeira expressão 1 + 2 é avaliada e seu resultado é descartado. Em seguida, 3 + 4 é avaliado e retornado como resultado. 
O operador , tem menor prioridade, até mesmo que o =.


TAREFA:

Quais são os valores finais de todas as variáveis a, b, c e d após o código abaixo?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?


Quais são os resultados para as expreções abaixo:

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
*/

/*
Aqui está um código que pede ao usuário dois números e mostra a soma deles.
O código não funciona corretamente. A saída no exemplo abaixo é 12 (para valores de prompt padrão).

Por que? Consertá-lo. O resultado deve ser 3.
*/

let primeiro = prompt("Primeiro Número?", 1);
let segundo = prompt("Segundo Número?", 2);

alert(primeiro + segundo); // 12
