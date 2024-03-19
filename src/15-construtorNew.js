/*

Construtor, operador "new"
A sintaxe regular {...} nos permite criar um objeto. Mas muitas vezes precisamos criar
muitos objetos semelhantes, como vários usuários ou itens de menu e assim por diante.

Isso pode ser feito usando funções de construtor e o operador "new".

Funções construtoras tecnicamente são funções regulares. No entanto, existem duas 
convenções:

* Eles são nomeados com letras maiúsculas primeiro.
Eles devem ser executados apenas com o operador "new".
Por exemplo:

*/

function Usuario(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.isAdmin = false;
  }
  
  
  let usuario1 = new Usuario("Marco", 42, "Masculino");
  
  
  alert(usuario1.nome, + " " + usuario1.idade + " " + usuario1.sexo); 
  alert(usuario1.isAdmin); 
s
  let usuario2 = new Usuario("Maria Luiza", 8, "Feminimo");

  alert(usuario2.nome, + " " + usuario2.idade + " " + usuario2.sexo); 
  usuario2.isAdmin = true
  alert(usuario2.isAdmin); 


  /*
  
Quando uma função é executada com new, ela segue os seguintes passos:

* Um novo objeto vazio é criado e atribuído a ele.
* O corpo da função é executado. 
* O valor de this é retornado.

Em outras palavras, new User(...) faz algo como:
  
  */