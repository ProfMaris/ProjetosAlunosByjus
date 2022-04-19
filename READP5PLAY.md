# ***** P5.JS P5PLAY.JS ********
Blackbox - Select. Copy. Paste & Search
<h3> Projeto : Aulas Byjus</h3> 
<h4> Prof. Maris Borges</h4>
<h6> Versao 1.0.04.22 </h6>

Objetivo : Sinalizar todos os pontos dos planos de aula do BreakOut,Trex e Pirate. O foco é potencializar e fixar  conhecimentos dos elementos utilizados para aplicação futuras.Além tentar construir  uma linha de raciocionio integrada. 
<br><br>

<h2> Biblioteca P5PLAY</h2>

 
 Utilizando a biblioteca p5play.js:
  https://molleindustria.github.io/p5.play/docs/classes/p5.play.html

 Referencia p5 play : https://p5js.org/reference/
 <br>
 <br>
<h2> O que é um sprite</h2>
<ul><p>Um Sprite é o principal bloco de construção do p5.play: um elemento capaz de armazenar imagens ou animações com um conjunto de propriedades como posição e visibilidade. Um Sprite pode ter um colisor que define a área ativa para detectar colisões ou sobreposições com outros sprites 
 e interações de mouse.</p>
 </ul>
<br>
<h2> function Draw</h2>
<ul>
A função draw é da própria biblioteca do p5 mesmo! No javascript existe uma outra abordagem para fazer desenhos na tela, utilizando o chamado "canvas".

O que a função draw faz é renderizar os elementos na tela, basicamente ela executar o código que está dentro dela infinitamente e uma quantidade específica de vezes, até que haja uma instrução que faça o programa parar.
Essa quantidade de vezes específica pode ser controlada dentro da função setup() utilizando a notação frameRate(). 
Ou seja se utilizarmos frameRate(30) irá dizer que a função draw irá "rodar" 30 vezes por segundo infinitamente.
</ul>
<h2> Estrutura do Trex do codigo</h2>
<li>1- Declaração de variaveis</li>
<li>2- Carregar imagens,sons  - function preload(){}</li>
<li>3- Configuraçoes iniciais - function setup(){}</li>
<li>4- Function Draw</p>
<li>5.Função Personalizadas - Instruções separadas que facilitam e ajudam na clareza,manutenção e na depuração do código. Exemplo: Nuvens e Cactos</p>
Principio básico da programação : Dividir para conquistar.

<h2> Variaveis </h2>
<ul>
<li>criar uma variavel=> var nomevariavel/let nomevariavel</li>
<li>variavel local   => declarar dentro de uma função</li>
<li>variavel global  => declarar no inicio do programa</li>
<li>variavel númerica => variavel=0</li>
<li>variavel string => variavel=" "</li>
<li>incrementar uma variavel=>variavel = variavel + 1<p></li>
<li>decrementar uma variavel => variavel = variavel - 1</li>
<li>variavel matriz => variavel = []</li>
</ul>
<h2> Objeto</h2>
<ul>
<li>criar => objeto=createSprite(x,y,largura,altura)</li>

<li>redimensionar => objeto.scale=0.9</li>

<li>visibilidade => objeto.visible=true</li>

<li>definir coordenadas para o objeto => objeto.x = 200
                                     objeto.y = 100</li>

<li>velocidade => objeto.velocityX = 10
              objeto.velocityY = -1</li>

<li>raio de colisao entre dois objetos => objeto.setCollider('circle',0,0,45)  </li>

<li>visualizar o colisor => objeto.debug =true                  </li>

<li>profundidade de um objeto=> objeto.depth</li>

<li>visibilidade de um objeto => objeto.visible=true 
                             objeto.visible=false</li>

<li>atribuir imagem a um objeto já criado=> add.Image(variavelcomaimagemcarregadaupload)</li>

<li>atribuir a animação para um objeto =>addAnimation("titulodaanimaçao",variavelcarregadanouploadcomanimação)
</li>
<li>trocar a animação=>objeto.changeAnimation("titulodaanimação",variavelcarregadauploadanimação) </li>

<li>tempo de permanencia na memoriao=>objeto.lifetime = 300 </li>
</ul>
<h2> UpLoad </h2>
<ul>
<p>A imagem pode não estar imediatamente disponível para renderização. Se você quiser garantir que a imagem esteja pronta antes de fazer qualquer coisa com ela, coloque a chamada loadImage() em preload() . Você também pode fornecer uma função de retorno de chamada para manipular a imagem quando estiver pronta.

O caminho para a imagem deve ser relativo ao arquivo HTML vinculado ao seu esboço. O carregamento de uma imagem de um URL ou outro local remoto pode ser bloqueado devido à segurança integrada do seu navegador.</p>

<p>obs :Um objeto Animation contém uma série de imagens (p5.Image) que podem ser exibidas sequencialmente.

Todos os arquivos devem ser imagens png. Você deve incluir o diretório da raiz do esboço e a extensão .png

Um sprite pode ter várias animações rotuladas, consulte Sprite.addAnimation e Sprite.changeAnimation, no entanto, uma animação pode ser usada independentemente.

Uma animação pode ser criada passando uma série de nomes de arquivo, não importa quantos, ou passando o primeiro e o último nome de arquivo de uma sequência numerada. O p5.play tentará detectar o padrão de sequência.</p>
</ul>
<ul>
<li>carregar varias imagens que caracterizam uma animação => loadAnimation("imagem1.png","imagem2.png","imagem3.png")                        
</li>


<li>carregar uma imagem=> loadImage("imagem.png")</li>

<li>carregar som =>loadSound("som.mp4")</li>
</ul>
<h2> Mensagens</h2>
<ul>
inserir uma mensagem de texto na tela=> text("mensagem",coordenadax,coordenaday) exemplo text("Aprender a programar, é aprender sobre o futuro",200,200) 

inserir mensagens e/ou depurar código no console=>console.log("mensagem"+nomevariavel)
</ul>

<h2> Condicional</h2>
<ul>
 As estruturas condicionais permitem que um programa execute diferentes comandos de acordo com as condições estabelecidas. Elas estão presentes em diversas linguagens de programação e todo profissional da área precisa saber como utilizá-las.
 
<li>if (){} => condicional</li>
  <br>1. INICIO ALGORITMO
  <br>2. SE condição ENTAO
  <br>3.       comando  A
  <br>4. SENAO
  <br>5.      comando B
  <br>6. FIM SE
  <br>7. FIM ALGORITMO

Exemplo : 
![condicional](https://github.com/ProfMaris/JogandoAprendendo---v1/blob/main/condicao.jpg)
</ul>
<h2> Case</h2>
<ul>
<li>É assim que funciona:

A expressão switch é avaliada uma vez. O valor da expressão é comparado com os valores de cada caso.
Se houver uma correspondência, o bloco de código associado será executado. Se não houver correspondência, o bloco de código padrão será executado.
<br>switch(expression) {
<br>  case x:
<br>    // code block
<br>    break;
 <br> case y:
 <br>   // code block
 <br>   break;
 <br> default:
 <br>   break
 <br>   // code block
<br>}
![diferença entre if e case](https://github.com/ProfMaris/JogandoAprendendo---v1/blob/main/diferen%C3%A7aifcase.png)
</li>
</ul>
<h2> Quadros</h2>
<ul>
<li>contar quadros=>frameCount</li>
<li>frequencia de quadros=>frameRate()</li>
Especifica o número de quadros a serem exibidos a cada segundo. Por exemplo, a chamada de função frameRate(30) tentará atualizar 30 vezes por segundo
</li>
</ul>
<h2> Operadores matemáticos</h2>
<ul>
<li>resto de uma divisão => %</li>
<li>divisão => /</li>
<li>multiplicação => /</li>
<li>arrendondamento=> round</li>
<li>aleatorio => random exemplo : random(1,60)</li>
<li>numero aleatorio inteiro => exemplo: Math.round(random(1,6))</li>
</ul>
<h2> Operadores lógicos </h2>
<ul>
<li>e  =>&&</li>
<li>ou =>||</li>
</ul>
<h2> Funções de teclas</h2>
<ul>
<li>leitura da tecla =>
keyIsDown() KeyDown()=</li>
<div> A função keyIsDown() em p5. js verifica o status atual da chave que a tecla está desativada, ou seja, pressionada . Ele pode ser usado se você tiver um objeto móvel e quiser que várias teclas possam afetar seu comportamento simultaneamente, como mover um sprite na diagonal
<br>exemplo : if (keyIsDown(LEFT_ARROW)) {
 <br>              x -= 5;
 <br>           }
 <br>           if (keyIsDown(109) || keyIsDown(189)) {
 <br>               diameter -= 1;
 <br>           }
<br>
  <br>           if (keyDown("space")){
  <br>              trex.y = trex.y+10; // Faz o Trex incrementar + 10 posicoes na vertical.
  <br>            }


<li>se passar o mouse sobre o elemento na tela => mousePressedOver(nomedoelemento)
if(mousePressedOver(restart)) {
      reset();   
}</li>
</li>
<li>KeyPressed()</li>
<div>A função keyPressed() é chamada uma vez toda vez que uma tecla é pressionada. O keyCode da tecla que foi pressionada é armazenado na variável keyCode .

Para chaves não ASCII, use a variável keyCode. Você pode verificar se o keyCode é igual a BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.

Para teclas ASCII, a tecla que foi pressionada é armazenada na variável key. No entanto, não faz distinção entre maiúsculas e minúsculas. Por esta razão, é recomendado usar keyTyped() para ler a variável chave, na qual será distinguido o caso da variável.

Por causa de como os sistemas operacionais lidam com repetições de teclas, manter uma tecla pressionada pode causar várias chamadas para keyTyped() (e keyReleased() também). A taxa de repetição é definida pelo sistema operacional e como cada computador é configurado.

Os navegadores podem ter diferentes comportamentos padrão anexados a vários eventos-chave. Para evitar qualquer comportamento padrão para este evento, adicione "return false" ao final da
</div>

<li>KeyReleased()</li>
<div>A função keyReleased() é chamada uma vez toda vez que uma tecla é liberada. Consulte key e keyCode para obter mais informações.

Os navegadores podem ter diferentes comportamentos padrão anexados a vários eventos-chave. Para evitar qualquer comportamento padrão para este evento, adicione "return false" ao final do método.</div>
</ul>

<h2> Grupo</h2>
<ul>
<li>criar um grupo=> new Group()</li>

<li>atribuir objeto a um grupo => nomegrupo.add(objeto)</li>

<li>atribuir velocidade a cada elemento de um grupo=>
grupodeobjeto.setVelocityXEach(0)  </li>

<li>atribuir tempo de permanencia a cada elemento de um grupo =>grupodeobjetos.setLifetimeEach(-1);</li>

<li>destruir um grupo de objetos => nomegrupo.destroyEach()</li>
</ul>
<h2> Layout </h2>
<ul>
<li>definição da tela =>createCanvas(1200,600)</li>
<li>adaptação ao tamanho da tela =>createCanvas(windowWidth,windowHeight)</li>
</ul>
<h2> Som </h2>
<ul>
<li>tocar um som=> variavelquecontemosom.play()</li>
<li>volume =>backgroundMusic.setVolume(0.1);</li>

</ul>
