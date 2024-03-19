/*

Módulo:
À medida que nosso aplicativo cresce, queremos dividi-lo em vários arquivos, chamados de "módulos". Um módulo pode conter uma classe ou uma biblioteca de funções para um propósito específico.

Por muito tempo, o JavaScript existiu sem uma sintaxe de módulo no nível da linguagem. Isso não foi um problema, porque inicialmente os scripts eram pequenos e simples, então não havia necessidade.

Um módulo é apenas um arquivo. Um script é um módulo. Tão simples como isso.

Os módulos podem carregar uns aos outros e usar diretivas especiais export e import para trocar funcionalidade, chamar funções de um módulo de outro:

export palavras-chave rótulos variáveis e funções que devem ser acessíveis de fora do módulo atual.
import permite a importação de funcionalidades de outros módulos.


Vejamos o seguinte script salvo em um arquivo digaOi.js

//digaOi.js

export function digaOi(usuario){

    alert ("Olá, " + usuario);
}

//main.js

import {digaOi} from './digaOi.js';

digaOi('Marco');

*/


