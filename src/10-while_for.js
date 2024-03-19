/*
Muitas vezes precisamos repetir ações.

Por exemplo, enviar produtos de uma lista um após o outro ou apenas executar
 o mesmo código para cada número de 1 a 10.
Loops são uma maneira de repetir o mesmo código várias vezes.

While:

while (condition) {
  // code
  // so-called "loop body"
}

Enquanto a condição for verdadeira, o código do corpo do loop é executado.

Por exemplo, o loop abaixo gera i enquanto i < 3:
*/

let i = 0;
while (i < 3) { 
  alert( i );
  i++;
}

/*
Uma única execução do corpo do loop é chamada de iteração. O loop no exemplo acima
faz três iterações.
Se i++ estivesse faltando no exemplo acima, o loop se repetiria (em teoria)
 para sempre. Na prática, o navegador fornece maneiras de interromper esses loops 
 e, no JavaScript do lado do servidor, podemos encerrar o processo.
Qualquer expressão ou variável pode ser uma condição de loop, não apenas 
comparações: a condição é avaliada e convertida em booleana por while.
Por exemplo, uma maneira mais curta de escrever while (i != 0) é while (i):
*/

let i2 = 3;

while (i2) { 
  alert( i2 );
  i2--;
}

/*
Do-While: A verificação de condição pode ser movida abaixo do corpo do loop usando a sintaxe do..while:

do {
  // loop body
} while (condition);
*/

let i3 = 0;
do {
  alert( i3 );
  i3++;
} while (i3 < 3);

/*
For: O loop for é mais complexo, mas também é o loop mais usado.

Sua sixtaxe é:
for (begin; condition; step) {
  // ... loop body ...
}

Vamos aprender o significado dessas partes pelo exemplo. O loop abaixo executa alert(i) para i de 0 até (mas não incluindo) 3:
*/

for (let i = 0; i < 3; i++) { 
    alert(i);
 }


 /*
 Break e Break Labels 
 As vezes precisamos sair de um loop e sair para executar outro segmento de código.

 *!*outer:*/!* for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');
    
        // if an empty string or canceled, then break out of both loops
        if (!input) *!*break outer*/!*; // (*)
    
        // do something with the value...
      }
    }
    
    alert('Done!');