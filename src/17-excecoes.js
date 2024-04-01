/*

Tratamento de erros, "try...catch"

Não importa o quão bom sejamos em programação, às vezes nossos scripts têm erros. Eles podem ocorrer devido a
 nossos erros, uma entrada inesperada do usuário, uma resposta incorreta do servidor e por milhares de outros
  motivos.

Normalmente, um script "morre" (para imediatamente) em caso de erro, imprimindo-o no console.

Mas há uma construção de sintaxe try...catch que nos permite "capturar" erros para que o script possa, em vez
 de morrer, fazer algo mais razoável.


A sintaxe para o tratamento de erro é:

try {

  // código...

} catch (err) {

  // código para tratamento de erro

}

- Primeiro, o código em try {...} é executado.
- Se não houve erros, o catch (err) é ignorado: a execução chega ao final do try e continua, pulando o catch.
- Se ocorrer um erro, a execução try é interrompida e o controle flui para o início do catch (err). 
A variável err (podemos usar qualquer nome para ela) conterá um objeto de erro com detalhes sobre o que
 aconteceu.

*/

try {

    alert('O Script começa a ser executado.');
  
    // ...todo o corpo de código a ser executado
  
    alert('O Script finaliza a execução.');   // *!*(2) <--*/!*
  
  } catch (err) {
  
    alert('Nada será executado no catch pois não existem erros.'); // (3)
  
  }


  try {

    alert('O Script começa a ser executado.');
  
    let nome = "Marco";
    
    alert("O nome do usuário é "+ nameUser);
  
    alert('O Script nunca finaliza a execução');
  
  } catch (err) {
  
    alert(`Erro é mostrado`);
  
  }