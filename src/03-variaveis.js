/* As aplicações precisam trabalhar com informaçõesPor exemplo:
- Valor do item a ser comprado, - Quantidade de itens sendo 
comprado, - Valor do CEP de etrega
Usamos as variáveis para guardar estas informações*/

//Para declarar uma variável usamos a palavra reservada let
let vlrItem;
let message;

//Com a variável declarada, podemos carregar informação na mesma.

vlrItem = 300.00;

console.log(vlrItem);

message = "Declaração da variável vlrItem OK."

alert(message);

//As declarações podem ser feitas separando as variáveis por virgula.
let usuario = 'admin', idade = 39, mensagem = 'Olá Mundo';

// let usuario = "marco";

alert(usuario);


// a palavra reservada var pode ser encontrada em alguns scripts 
// mas significa a mesma coisa.


//Tipagem de Variável e operacoes

let nome;
let sobrenome;

nome = "Marco";
sobrenome = " Calijorne";

alert(nome + sobrenome);

nome = "Marco";
sobrenome = 1;

alert(nome + sobrenome);

// Contante

const pi = 3.14;

alert("O valor de Pi é : " + pi);

pi = 6.28;

alert(pi);

/*

TAREFA RÁPIDA:

- Crie uma variável com o nome do nosso planeta. Como você nomearia 
tal variável?
- Crie uma variável para armazenar o nome de um visitante atual 
de um site. Como 
você nomearia essa variável?
- É permitidio declarar constantes com o mesmo nome mas diferenciado 
por nomes 
todo em maiúsculo e minúsculo?

*/