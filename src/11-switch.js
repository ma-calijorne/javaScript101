/*

A declaração Switch: Utilzado para substituir multiplos "if".
Ele fornece uma maneira mais descritiva de comparar um valor com várias variantes.

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}


* O valor de x é verificado quanto a uma igualdade estrita com o valor do primeiro 
caso (isto é, valor1), depois para o segundo (valor2) e assim por diante.
* Se a igualdade for encontrada, o switch começa a executar o código a partir do 
caso correspondente, até a quebra mais próxima (ou até o final do switch).
* Se nenhum caso for encontrado, o código padrão será executado (se existir).
*/

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Valor muito PequeNo' );
    break;
  case 4:
    alert( 'ExatamentE o Valor!' );
    break;
  case 5:
    alert( 'Valor muito grande' );
    break;
  default:
    alert( "O que aconteceu aqui?");
}
/*

Aqui, o switch começa a comparar a primeira variante que é 3. A correspondência falha. Então testa a próxima que é 4 e não falha.
Então a execução começa do caso 4 até o intervalo mais próximo. Se não houver 
interrupção (break), a execução continua com o próximo caso sem nenhuma verificação.

Exemplo sem o break

*/

switch (a) {
  case 3:
    alert( 'Valor muito Pequebo' );
  case 4:
    alert( 'Exatamento o Valor!' );
  case 5:
    alert( 'Valor muito grande' );
  default:
    alert( "O que aconteceu aqui?");
}


//Qualquer expressão pode ser um argumento SWITCH/CASE: Por exemplo:

let a1 = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("Isso roda porque +a é igual a 1 que é igual a b+1");
    break;
  default:
    alert("this doesn't run");
}


