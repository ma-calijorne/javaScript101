/*
Classes:

Na prática, muitas vezes precisamos criar muitos objetos do mesmo tipo, como usuários, 
bens ou o que quer que seja.

Como já sabemos o construtor NEWpode ajudar nisso com as funções.

Mas no JavaScript moderno, há uma construção de "classe" mais avançada,
que apresenta novos recursos que são úteis para programação orientada a objetos.

A sintaxe básica é:

class Classe {
  
  constructor() { ... }
  metodo1() { ... }
  metodo2() { ... }
  metodo3() { ... }
  ...
}

Em seguida, use new Classe() para criar um novo objeto com todos os métodos 
listados.

O método constructor() é chamado automaticamente por new, então podemos inicializar 
o objeto ali.

Por exemplo:

*/

class Usuario {

    constructor(nomeUsuario) {
        this.nome = nomeUsuario;
    }

    mostrarCredenciais() {
        alert(this.nome)
    }
}

let usuario1 = new Usuario("Marco");

usuario1.mostrarCredenciais();

/*

Quando new Usuario("Marco") é executado:

1 - Um novo objeto é criado
2 - O construtor é executado, passando um parametro para carregar this.nome

Com o objeto criado, qualquer método da classe pode ser executato.

Uma armadilha comum para desenvolvedores novatos é colocar uma vírgula entre os
métodos de classe, o que resultaria em um erro de sintaxe.

A notação aqui não deve ser confundida com objetos literais. Dentro da classe, 
nenhuma vírgula é necessária.


Às vezes, as pessoas dizem que class é uma sintaxe projetada para tornar as coisas 
mais fáceis de ler, mas não introduz nada de novo, porém poderíamos declarar a 
mesma coisa sem usar a palavra-chave class:

*/

// Escrevendo a classe Usuario com funções puras.

// 1. Criar a função construtor
function Usuario(nomeUsuario) {
    this.nome = nomeUsuario;
  }
// A função prototype possui uma propriedade "constructor" por padrão,
// assim, não é preciso criar.
  
  // 2. Add the method to prototype
  Usuario.prototype.mostrarCredenciais = function() {
    alert(this.nome);
  };
  
  // Usage:
  let usuario2 = new Usuario("Marco");
  usuario2.mostrarCredenciais();



  /*

Herança de Classes

A herança de classe é uma maneira de uma classe estender outra classe.

Assim, podemos criar novas funcionalidades em cima das existentes.

Vamos tomar a classe abaixo como exemplo:


*/
class Animal {
    constructor(nomeAnimal) {
      this.velocidade = 0;
      this.nome = nomeAnimal;
    }
    correr(velocidade) {
      this.velocidade = velocidade;
      alert(`O Animal ${this.nome} corre na velocidade ${this.velocidade}.`);
    }
    parar() {
      this.velocidade = 0;
      alert(`O Animal ${this.nome} não se move.`);
    }
  }
  
  let animal1 = new Animal("Meu Animal");

  /* 
  
  Queremos então criar uma nova classe Coelho, baseado na classe Animal, que terá acesso 
  a todos os métodos da classe Animal, assim Coelho, poderá ter o que 
  "animais genéricos" podem ter.
  

  A sintaxe para herança de classe é:

  class <classe_filha> extends <classe_pai>

  */

  class Coelho extends Animal {

    esconder(){
        alert(`O Animal ${this.nome} consegue se esconder!`);
    }

  }

  let coelho = new Coelho("Coelho Branco");

  coelho.correr(5);
  coelho.esconder();



  class Coelho extends Animal {

    constructor(nomeAnimal, tamanhoOrelha){

        super(nomeAnimal)
    }
    
    esconder(){
        alert(`O Animal ${this.nome} consegue se esconder!`);
    }

  }