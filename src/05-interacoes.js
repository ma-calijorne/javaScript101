/*
Interações: Alertas, prompts, confirm

Existem alguma formas de interação com o usuário:

alert
prompt
confirm

Todos estes métodos são chamado de MODAIS, ou seja, eles interrompem a execução do script aguardando que a interação com o usuário seja executada.

Existem duas limitações compartilhadas por todos estes métodos:

1. A localização exata da janela modal é determinada pelo navegador. Normalmente, é no centro.
2. A aparência exata da janela também depende do navegador. Não podemos modificá-lo.

*/ 

//Alert: Esse já conhecemos. Irá mostrar uma mensagem e esperar que o usuário clique em OK. 

alert("Olá, esse é um teste de interação via alert!")

/*Prompt: O Prompt aceita dois argumentos (parametros)

- titile: O texto que será mostrado.
- [default]: Segundo parametros opcional que será um valor inicial para o campo de Input

*/


let nomeUsuario = prompt("Digite o nome do Usuário:");

let bOK = prompt("Está funcionando?",'OK');
alert(bOK)


//Embutir uma variável no texto da interação

let idade = prompt('Qual é a sua idade?', 42);

alert(`O usuário ${nomeUsuario} tem ${idade} anos de idade!`);

/*Confirm
O confirm irá mostrar uma mensagem na tela e esperar que o usuário acione o botão OK ou o botão Cancelar. O retorno irá depender do botão selecionado:
OK: True
Cancelar: False
*/

confirm("Deseja seguir com o processamento?")


/*

TAREFA:
Criar uma página que pergunte o nome da pessoa, a idade e o endereço e depois mostre na tela.
*/

