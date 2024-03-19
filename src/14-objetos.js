/*

Objetos
Como vimos quando falamos de tipos de dados, existem oito tipos de dados em JavaScript. 
Sete deles são chamados de "primitivos", porque seus valores contêm apenas uma única 
coisa (seja uma string, um número ou qualquer outra coisa).

Em contraste, os objetos são usados ​​para armazenar coleções codificadas de vários dados 
e entidades mais complexas. Em JavaScript, os objetos permeiam quase todos os aspectos 
da linguagem. 

Portanto, devemos entendê-los primeiro.

Um objeto pode ser criado com colchetes {…} com uma lista opcional de propriedades. 
Uma propriedade é um par "chave: valor", onde a chave é uma string (também chamada de 
    "nome da propriedade") e o valor pode ser qualquer coisa.

Podemos imaginar um objeto como um armário com arquivos assinados. Cada pedaço de 
dados é armazenado em seu arquivo pela chave. É fácil encontrar um arquivo pelo nome 
ou adicionar/remover um arquivo.



_____________
|   |   |   |
|   |   |   |
| 1 | 2 | 3 |
|   |   |   |
|___|___|___|
|   OBJETO  |
|___________|

Um objeto vazio pode ser criado através de duas sintaxes diferentes:

let usuario = new Object(); 
let usuario = {};  


Literais e propriedades
Podemos colocar imediatamente algumas propriedades em {...} como pares "chave: valor":

*/

let usuario = {     
    nome: "Marco",  
    idade: 42       
};


//As propriedades são acessadas através da seguinte sintaxe:

alert( usuario.nome );
alert( usuario.idade );

//Novos pares chave:valor (propriedades) podem ser adiciondados sem distinção do tipo.

usuario.isLogged = false;

//Propriedades podem ser removidas do objeto

delete usuario.isLogged;


//Podemos usar chaves com mais de uma palavra em um objeto:

let usuario1 = {

    nome: "Marco",
    idade: 43,
    "esta logado": false

}

alert( usuario1["esta logado"] );



// Podemos acessar as propriedades através de valores em variáveis:

let variable;

variable = "nome";

alert( usuario[variable] );


/*Propriedade Computada

Podemos usar colchetes em um objeto literal, ao criar um objeto. Isso é chamado de 
propriedades computadas.

*/


let fruta = prompt("Qual fruta será adiocionada à salada", "laranja");

let saladaFrutas = {

  [fruta] : 5, 

};

alert( saladaFrutas.laranja );


/*

Métodos de objeto, "this"
Os objetos geralmente são criados para representar entidades do mundo real, 
como usuários, pedidos e assim por diante:


let usuario2 = {

    nome: "Marco",
    idade: 42

};

/*
E, no mundo real, um usuário pode agir: selecionar algo do carrinho de compras, 
fazer login, sair etc.

As ações são representadas em JavaScript por funções nas propriedades.

Por exemplo

*/

let usuario2 = {

    nome: "Marco",
    idade: 42

};

function verificarLogIn(nome){

    if (nome == "Marco"){
        
        alert( "Usuário está on-line" );

    }else{

        alert( "Usuário está off-line" );

    }
}

usuario2.isLogged = verificarLogIn(usuario2.nome)


/*

Método "this"

É comum que um método de objeto precise acessar as informações armazenadas no objeto 
para realizar seu trabalho.

Por exemplo, o código dentro de usuario2.verificarLogIn() irá precisar do nome do 
usuário.

Para acessar o objeto, um método pode usar a palavra-chave this.

O valor de "this" e o objeto "before dot", aquele usado para chamar o método.

Por exemplo:
*/

let usuario3 = {

    nome: "Marco",
    idade: 42,
    
    imprimirCredenciais() {

        alert( "Nome: " + this.nome + ". Idade: " + this.idade)
    }

};

usuario3.imprimirCredenciais()


/*
TAREFA:
Crie uma calculadora de objeto com três métodos:

read() solicita dois valores e os salva como propriedades de objeto com nomes a e b, 
respectivamente.
sum() retorna a soma dos valores salvos.
mul() multiplica os valores salvos e retorna o resultado.

*/