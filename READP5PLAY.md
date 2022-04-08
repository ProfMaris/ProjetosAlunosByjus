# ***** TREX ********
<h3> Projeto Aula : Byjus</h3> 
<h4> Prof. Maris Borges</h4>

Objetivo : Sinalizar todos os pontos dos planos de aula do projeto TREX. O foco é potencializar e fixar  conhecimentos dos elementos utilizados para aplicação futuras.Além tentar construir  uma linha de racicionio integrada. 


<h2> Biblioteca P5PLAY</h2>

 
 Utilizando a biblioteca p5play.js:
  https://molleindustria.github.io/p5.play/docs/classes/p5.play.html

 Referencia p5 play : https://p5js.org/reference/

<h2> O que é um sprite</h2>
Um Sprite é o principal bloco de construção do p5.play: um elemento capaz de armazenar imagens ou animações com um conjunto de propriedades como posição e visibilidade. Um Sprite pode ter um colisor que define a área ativa para detectar colisões ou sobreposições com outros sprites 
 e interações de mouse.
<br>
<h2> Estrutura do Trex do codigo</h2>

<p>1- Declaração de variaveis</p>

<p>2- Carregar imagens,sons  - function preload(){}</p>
<p>3- Configuraçoes iniciais - function setup(){}</p>
<p>4- Function Draw</p>
A função draw é da própria biblioteca do p5 mesmo! No javascript existe uma outra abordagem para fazer desenhos na tela, utilizando o chamado "canvas".

O que a função draw faz é renderizar os elementos na tela, basicamente ela executar o código que está dentro dela infinitamente e uma quantidade específica de vezes, até que haja uma instrução que faça o programa parar.
Essa quantidade de vezes específica pode ser controlada dentro da função setup() utilizando a notação frameRate(). 
Ou seja se utilizarmos frameRate(30) irá dizer que a função draw irá "rodar" 30 vezes por segundo infinitamente.

5.Função Personalizadas - Instruções separadas que facilitam e ajudam na clareza,manutenção e na depuração do código. Exemplo: Nuvens e Cactos
Principio básico da programação : Dividir para conquistar.

<h2> Variaveis </h2>
criar uma variavel=> var nomevariavel
                     let nomevariavel
variavel local   => declarar dentro de uma função
variavel global  => declarar no inicio do programa
incrementar uma 
variavel númerica => variavel = variavel + 1
                     variavel = variavel +10
decrementar uma variavel => variavel = variavel - 1

<h2> Objeto</h2>
criar => objeto=createSprite(x,y,largura,altura)

redimensionar => objeto.scale=0.9

visibilidade => objeto.visible=true

definir coordenadas para o objeto => objeto.x = 200
                                     objeto.y = 100

velocidade => objeto.velocityX = 10
              objeto.velocityY = -1

raio de colisao entre dois objetos => objeto.setCollider('circle',0,0,45)  

visualizar o colisor => objeto.debug =true                  

profundidade de um objeto=> objeto.depth

visibilidade de um objeto => objeto.visible=true 
                             objeto.visible=false

atribuir imagem a um objeto já criado=> add.Image(variavelcomaimagemcarregadaupload)

atribuir a animação para um objeto =>addAnimation("titulodaanimaçao",variavelcarregadanouploadcomanimação)

trocar a animação=>objeto.changeAnimation("titulodaanimação",variavelcarregadauploadanimação) 

tempo de permanencia na memoriao=>objeto.lifetime = 300 

<h2> UpLoad </h2>

carregar varias imagens que caracterizam uma animação => loadAnimation("imagem1.png","imagem2.png","imagem3.png")                        

carregar uma imagem=> loadImage("imagem.png")

carregar som =>loadSound("som.mp4")

<h2> Mensagens</h2>
inserir uma mensagem de texto na tela=> text("mensagem",coordenadax,coordenaday) exemplo text("Aprender a programar, é aprender sobre o futuro",200,200) 

inserir mensagens e/ou depurar código no console=>console.log("mensagem"+nomevariavel)


<h2> Condicional</h2>
if (){} => condicional
Exemplo : Se a posicao da coordenada x do solo for menor que 0 atribuir o valor do tamanho da metade da janela para a posicao x.

<h2> Case</h2>
É assim que funciona:

A expressão switch é avaliada uma vez. O valor da expressão é comparado com os valores de cada caso.
Se houver uma correspondência, o bloco de código associado será executado. Se não houver correspondência, o bloco de código padrão será executado.
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
![diferença entre if e case](https://github.com/ProfMaris/JogandoAprendendo---v1/blob/main/diferen%C3%A7aifcase.png)

<h2> Quadros</h2>
contar quadros=>frameCount
frequencia de quadros=>frameRate()
Especifica o número de quadros a serem exibidos a cada segundo. Por exemplo, a chamada de função frameRate(30) tentará atualizar 30 vezes por segundo

<h2> Operadores matematicos</h2>
resto de uma divisao => %
divisão => /
arrendondamento=> round
aleatorio => random exemplo : random(1,60)
numero aleatorio inteiro => exemplo: Math.round(random(1,6))

<h2> Operadores logicos </h2>
e  =>&&
ou =>||

<h2> Funções de teclas</h2>
leitura da tecla =>
keyIsDown() KeyDown()=: A função keyIsDown() em p5. js verifica o status atual da chave que a tecla está desativada, ou seja, pressionada . Ele pode ser usado se você tiver um objeto móvel e quiser que várias teclas possam afetar seu comportamento simultaneamente, como mover um sprite na diagonal
exemplo : if (keyIsDown(LEFT_ARROW)) {
               x -= 5;
            }
            if (keyIsDown(109) || keyIsDown(189)) {
                diameter -= 1;
            }

             if (keyDown("space")){
                trex.y = trex.y+10; // Faz o Trex incrementar + 10 posicoes na vertical.
              }

 
se passar o mouse sobre o elemento na tela => mousePressedOver(nomedoelemento)
if(mousePressedOver(restart)) {
      reset();   
}
<h2> Grupo</h2>
criar um grupo=> new Group()

atribuir objeto a um grupo => nomegrupo.add(objeto)

atribuir velocidade a cada elemento de um grupo=>
grupodeobjeto.setVelocityXEach(0)  

atribuir tempo de permanencia a cada elemento de um grupo =>grupodeobjetos.setLifetimeEach(-1);

destruir um grupo de objetos => nomegrupo.destroyEach()

<h2> Layout </h2>
definição da tela =>createCanvas(1200,600)
adaptação ao tamanho da tela =>createCanvas(windowWidth,windowHeight)

tocar um som=> variavelquecontemosom.play()



