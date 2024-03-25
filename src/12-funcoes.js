/*

Funções
Muitas vezes, precisamos executar uma ação semelhante em muitos lugares do script.

Por exemplo, precisamos mostrar uma mensagem bonita quando um visitante faz login, 
logout e 
talvez em outro lugar.

As funções são os principais "blocos de construção" do programa. Elas permitem que o
 código 
seja chamado várias vezes sem repetição.

Já vimos exemplos de funções integradas, como alert(message), prompt(message, default) e 
confirm(question). Mas também podemos criar funções próprias.

Declaração de Função
Para criar uma função, podemos usar uma declaração de função.

Por exemplo:
*/

function mostrarMensagem() {
    alert( 'Sou eu no mundo do JavaSript!' );
}

/*
A palavra-chave function vem primeiro, depois o nome da função, depois uma lista de 
parâmetros entre 
parênteses (separados por vírgula, 
vazio no exemplo acima, veremos exemplos mais tarde) e finalmente o código da função, 
também chamado 
"o corpo funcional", entre chaves.

function nome_funcao(parametro1, parametro2, ... parametroN) {
    // Corpo Funcional

}

As funções são chamadas por seus nome e quando necessário passando seus parametros, 
por exemplo:

*/

mostrarMensagem();


function mostrarMensagemParametro(sMessage) {
    alert( sMessage );
}

let msg = "Essa é uma chamada de função que possui parametros"
mostrarMensagemParametro(msg)


/*

Variáveis locais às funções

Uma variável declarada dentro de uma função é visível apenas dentro dessa função.

Por exemplo:

*/


function mostrarMensagemVarInside(){

    let msg1 = "A variável msg foi declarada apenas dentro da função";

    alert( msg1 );

}

let msg1 = "Variável msg1 declarada DO LADO DE FORA DE FUNÇÕES"
mostrarMensagemVarInside();

// Uma função pode acessar variáveis declaradas fora de seu escopo

function mostrarMensagemVarOutside(){

    alert( msg1 );

}

mostrarMensagemVarOutside();


//Porém o que acontece se existir uma variável com o mesmo nome declarada dentro do
// escopo da função?

function mostrarMensagemVar_InOut(){

    let msg1 = "Variáveis declaradas dentro e fora do escopo da função com o mesmo nome.";
    alert( msg1 );

}

mostrarMensagemVar_InOut();


/*

Parâmetros: Podemos passar dados arbitrários para funções usando parâmetros.

Quando a função é chamada, os valores fornecidos são copiados para variáveis ​​locais.

Por exemplo:


*/

function imprimirCredenciais(nome, idade, endereco){

    alert( "Nome: " + nome);
    alert( "Idade: " + idade);
    alert( "Endereço: " + endereco);
}

let nome = "Marco Antônio";
let idade = 42;
let endereco = "localhost";

imprimirCredenciais(nome, idade, endereco);

/*Podemos definir valores padrão para cada parametros na função, no caso de não ser 
passado nenhum valor ao se chamar a função.
*/

function imprimirCredenciais_1(nome = "Nenhum nome Informado", idade = 0, 
                                endereco = "0.0.0.0"){

    alert( "Nome: " + nome);
    alert( "Idade: " + idade);
    alert( "Endereço: " + endereco);
}

let idade1 = 42;
let endereco1 = "localhost";

imprimirCredenciais_1(undefined, idade1, endereco1);


//Podemos passar por parametro outra função que vá executar alguma tarefa e/ou retornar um valor para 
//a função chamadora.

function anoAtual(){

    return 2023;
}

function executarCalculoIdade(anoNascimento){

    let calcIdade;

    anoAtual = anoAtual();

    calcIdade = anoAtual - anoNascimento;

    alert( "A idade é: "+ calcIdade);
}

executarCalculoIdade(1980)


/*

IMPORTANTE:

Dando nome às funções

Funções são ações. Portanto, seu nome geralmente é um verbo. Deve ser breve, o mais preciso possível 
e descrever o que a função faz, para que alguém que leia o código tenha uma indicação do que a função 
faz.

É uma prática comum iniciar uma função com um prefixo verbal que descreva vagamente a ação. Deve haver 
um acordo dentro da equipe sobre o significado dos prefixos.

Por exemplo, as funções que começam com "show" geralmente mostram algo.

Função que começa com...

"get..." -- retorna um valor,
"calc..." -- calcula algo,
"create..." -- criar algo,
"check..." -- verifica algo e retorna um valor booleano, etc.



TAREFA:

Escrever uma função que eleva um valor x à potência y e retorna o valor. 


*/



