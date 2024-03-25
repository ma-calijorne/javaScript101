/*
CONDICIONAL If ... Else e '?'

Às vezes, precisamos realizar diferentes ações com 
base em diferentes condições.
Para fazer isso, podemos usar a instrução if e o operador 
condicional ?, também chamado de operador "ponto de interrogação".

A DECLARAÇÃO "if":
A instrução if(...) avalia uma condição entre parênteses e, 
se o resultado for verdadeiro, executa um bloco de código.

Por exemplo:

*/

let anoNascimento = 0

anoNascimento = prompt("Em qual ano nasceu o Professor Marco Calijorne?", '');

//Executando uma única declaracão para o caso da 
//condição ser atendida
if (anoNascimento == 1980) alert("Correto.");


//Executar mais de uma declaração para o caso da condição ser atendida. Usar {}
if (anoNascimento == 1980) {
    alert("Correto.");
    alert("Ganhou 5 pontos.");
}

//Recomendado utilizar {} em todas as declações if.

//A condição então nada mais é do que um comparação 
//booleana, ou seja:

if (1){
    alert("É verdadeiro");
}
if (0){
    alert("É falso");
}

/*
E se a condição não for atendida. Usamos a cláusula else, 
um bloco opcional à declaração if.

Por exemplo:
*/

anoNascimento = prompt("Em qual ano nasceu o Professor Marco Calijorne?", '');

if (anoNascimento == 1980){
    alert("Correto.");
    alert("Ganhou 5 pontos.");
}else {
    alert("Errou Feio...");
}

/*
Podemos ter também multiplas condições else, usamos 
então o else if (), onde informamos nova comparação a 
ser feita.

Por exemplo:
*/

anoNascimento = prompt("Em qual ano nasceu o Professor Marco Calijorne?", '');

if (anoNascimento == 1980){
    alert("Correto.");
    alert("Ganhou 5 pontos.");
}else if(anoNascimento > 1980) {
    alert("Gentileza sua, mas errou.");
}else if (anoNascimento < 1980){
    alert("É melhor já pensar em nova matricula para a disciplina no próximo semestre!");
}


/*

Operador Condicional ?

Às vezes, precisamos atribuir uma variável dependendo 
de uma condição.

Por exemplo:
*/
let acessoPermitido = false;
let idade = prompt('Qual é a sua idade?', '');

if (idade > 18) {
    acessoPermitido = true;
} else {
    acessoPermitido = false;
}

alert(acessoPermitido);

/*
O chamado operador "condicional" ou "ponto de interrogação" 
nos permite fazer isso de uma forma mais curta e simples.
O operador é representado por um ponto de interrogação ?. 
Às vezes é chamado de "ternário", porque o operador possui 
três operandos. Na verdade, é o único operador em JavaScript que tem tantos.

A sintaxe é:

let result = condition ? value1 : value2;
*/

let acessoPermitido2 = (idade > 18) ? true : false;
alert(acessoPermitido2);

/*Tecnicamente, podemos omitir os parênteses em idade > 18. 
O operador de ponto de interrogação tem precedência baixa, 
portanto, é executado após a comparação >.
*/
let acessoPermitido3 = idade > 18 ? true : false;

/*
Multiplos ?
Uma sequência de operadores de ponto de interrogação (?) 
pode retornar um valor que depende de mais de uma condição.

Por exemplo:

*/

idade = prompt('Qual é a sua idade?', '');
idade = +idade

let mensagem = (idade < 3) ? 'Olá, você é um bebê!' :
  (idade < 18) ? 'Olá, jovem aprendiz!' :
  (idade < 100) ? 'Olá pra você que já tem boleto pra pagar.' :
  'Sério, cuidado com o vento hein!';

alert(mensagem);

/*
TAREFAS:

O alerta será mostrado?

if ("0") {
  alert( 'Olá' );
}

Construa a seguinte declaração:

- Pergunte pelo Nome do Usuário 1
- Pergunte pelo Nome do Usuario 2

De um alerta caso os nomes sejam iguais ou qual nome é 
"maior" que o outro.

*/