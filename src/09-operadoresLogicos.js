/*
Operadores lógicos
Existem quatro operadores lógicos em JavaScript: || (OU), 
&& (E), ! (NÃO), ?? (coalescência nula). Aqui cobrimos os 
três primeiros.
Embora sejam chamados de "lógicos", podem ser aplicados a 
valores de qualquer tipo, não apenas booleanos. Seu resultado
também pode ser de qualquer tipo.


|| (OU)
O operador "OU" é representado por dois símbolos de linha 
vertical:
result = a || b;

Na programação clássica, o OR lógico destina-se a manipular
apenas valores booleanos. Se algum de seus argumentos for 
verdadeiro, ele retorna verdadeiro, caso contrário, retorna 
falso.
Em JavaScript, o operador é um pouco mais complicado e 
poderoso. Mas primeiro, vamos ver o que acontece com 
valores booleanos.
Existem quatro combinações lógicas possíveis:

*/

alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false

/*
Como podemos ver, o resultado é sempre verdadeiro, exceto 
no caso em que ambos os operandos são falsos.
Se um operando não for booleano, ele será convertido em 
booleano para avaliação.
Por exemplo, o número 1 é tratado como verdadeiro, o 
número 0 como falso:
*/

if (1 || 0) {
    alert( 'Verdadeiro!' );
}

/*
Na maioria das vezes, OU || é usado em uma instrução if 
para testar se alguma das condições fornecidas é verdadeira.

Por exemplo:

*/
let hora = 9;

if (hora < 10 || hora > 18) {
  alert( 'A loja está fechada.' );
}

//Podemos colocar mais condições

let hora2 = 12;
let feriado = true;

if (hora2 < 10 || hora2 > 18 || feriado) {
  alert( 'A loja está fechada.' ); 
}

/*
OU "||" encontra o primeiro valor verdadeiro.
A lógica descrita acima é um tanto clássica. Agora, vamos 
trazer os recursos "extras" do JavaScript.

O algoritmo estendido funciona da seguinte maneira.

Dado vários valores OR:

resultado = valor1 || valor2 || valor3;
O operador OR faz o seguinte:

- Avalia operandos da esquerda para a direita.
- Para cada operando, converte-o em booleano. Se o resultado 
for verdadeiro, para e retorna o valor original daquele 
operando.
- Se todos os operandos foram avaliados (ou seja, todos 
  eram falsos), retorna o último operando.
- Um valor é retornado em sua forma original, sem a 
conversão.

Em outras palavras, uma cadeia de OU || retorna o primeiro 
valor verdadeiro ou o último se nenhum valor verdadeiro 
for encontrado.

Por exemplo:
*/

alert( 1 || 0 ); // 1 (1 é verdadairo)

alert( null || 1 ); // 1 (1 é o primeiro valor verdadeiro)
alert( null || 0 || 1 ); // 1 (o primeiro valor verdadeiro)

alert( undefined || null || 0 ); // 0 (todos são falsos, 
                                 // retorna o ultimo valor)


/*Isso irá nos permitir alguns usos interessantes 
1 - Obter o primeiro valor verdadeiro de uma lista 
de variáveis ou expressões.
*/
let primeiroNome = "";
let ultimoNome = "";
let apelido = "Marco";

alert( primeiroNome || ultimoNome || apelido || "Anonymous"); // Marco

/*
Avaliação de curto-circuito.
Outra característica do OU || operador é a chamada 
avaliação de "curto-circuito".
Isso significa que || processa seus argumentos até que o 
primeiro valor verdadeiro seja alcançado, e então o valor 
é retornado imediatamente, sem sequer tocar no outro 
argumento.
A importância desse recurso torna-se óbvia se um operando 
não for apenas um valor, mas uma expressão com um efeito 
colateral, como uma atribuição de variável ou uma chamada 
de função.

No exemplo abaixo, apenas a segunda mensagem é impressa:
*/
true || alert("Não Imprimir");
false || alert("Imprimir");

/*
Operador && (AND)

Representado por 2 &.

result = a && b;

Na abordaegm de programação clássica, retorna verdadeiro 
se todos os operandos foram true, caso contrário, retorna 
falso

*/
alert(true && true);   
alert(false && true);  
alert(true && false);  
alert(false && false); 


let hora3 = 12;
let minuto = 30;

if (hora3 == 12 && minuto == 30) {
  alert( 'Agora são 12:30.' );
}

//A mensagem abaixo será impressa?
if (1 && 0) {
    alert( "Essa mensagem será impressa?" );
}

/*
O operador AND && faz o seguinte:

- Avalia operandos da esquerda para a direita.
- Para cada operando, converte-o em um booleano. Se o 
resultado for falso, para e retorna o valor original 
daquele operando.
- Se todos os operandos foram avaliados (ou seja, todos 
  foram verdadeiros), retorna o último operando.
- Em outras palavras, AND retorna o primeiro valor falso 
ou o último valor se nenhum for encontrado.

As regras acima são semelhantes a OR. A diferença é que 
AND retorna o primeiro valor falso enquanto OR retorna o 
primeiro verdadeiro.

Exemplos:
*/

alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

alert( null && 5 ); // null
alert( 0 && "qualquer coisa aqui" ); // 0
alert( 1 && 0 && "qualquer coisa aqui" ); // 0

/*

Operador NOT (!)
O operador booleano NOT é representado por um sinal de 
exclamação !.

A sintaxe é bem simples:
result = !value;

O operador aceita um único argumento e faz o seguinte:

- Converte o operando para o tipo booleano: verdadeiro/falso.
- Retorna o valor inverso.
Por exemplo:
*/

alert(!true);
alert(!0); 

//Um duplo NOT !! às vezes é usado para converter 
//um valor em tipo booleano:

alert( !!"String não Vazia" ); // true
alert( !!null ); // false

/*Ou seja, o primeiro NOT converte o valor para booleano 
e retorna o inverso, e o segundo NOT o inverte novamente.
No final, temos uma conversão simples de valor para booleano.
Há uma maneira um pouco mais detalhada de fazer a mesma coisa - uma função booleana integrada:
*/

alert( Boolean("String Não Vazia") ); // true
alert( Boolean(null) ); // false


/*

Qual será a saída?

alert( null || 2 || undefined );

alert( alert(1) || 2 || alert(3) );



Escreva uma condição para verificar idade entre 14 e 80 
anos inclusivo. Inclusivo quer dizer que a idade pode 
atingir os limites de 14 e 80.

*/