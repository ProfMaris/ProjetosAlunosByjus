// Tarefas
// USAR O P5.PLAY

 
  // 1. Carregar todas as imagens na função preload.
  // loadImage("arquivo.png")

  // 2. na função setup
  // criar os objetos coelho e jardim e adicionar as imagens  carregadas

   // 3. Criar as funções personalizadas para chamar na função draw a cada 80 quadros.
   // criarmaçã, criarlaranja e criarvermelho
   // 3.1 As maças.laranjas e vermelho serão criadas de forma aleatoria
   // exemplos maca = createSprite(random(50, 350),40, 10, 10);
   // 3.2 Tempo de permanencia (vida) 
   // objetosprite.lifetime=120
   
   // 4. Na função Draw
   //
   // 4.1. Adicione o código para mover o coelho na posição X usando mouseX.
   // World.mouseX;World.mouseY;
   // 4.2  De forma aleatoria charmar as funções a cada 80 quadros .
   // if (frameCount%80)>0{
   //   if(tipofuncao==1){
   //    nomedafunção() 
   //    }
   //   if(tipofuncao==2){
   //    nomedafunção() 
   //    }
   //}

   // 5. As maçãs e as folhas devem se mover para baixo a partir do topo da tela.
   // objeto.velocityY

 
  

// Declarar as variaveis

var jardim,coelho,maca,folhaLaranja,folhaVermelha;
var imagemdojardim,imagemdocoelho,imagemdacenoura,imagemlaranja,imagemvermelha,imagemdamaca;


function preload(){
  //imagemdojardim =
  //imagemdocoelho =
  //imagemdamaca  =
  //imagemvermelha = 
}


function setup(){
  
  createCanvas(400,400);
// fundo em movimento
//jardim=______(200,200);
//jardim._____(imagemdojardim);


// criando o coelho
//coelho = ____(160,340,20,20);
//coelho.___ =0.09;
//coelho.___(imagemdocoelho);
}

function draw() {
  background(0);
  
  // coelho se movendo no eixo X com o mouse
  //coelho.x = 
  
  bordas = createEdgeSprites();
  coelho.collide(bordas);
  
   drawSprites();
  
  //var selecionar_funcao = Math.____(____(1,3));
  
  //if (frameCount % 80 == 0) {
  //  if (selecionar_funcao == 1) {
  //    criarMacas();
  //  } else if (selecionar_funcao == 2) {
  //    criarLaranja();
  //  }else {
  //    criarVermelho();
   // }
  }

}

function criarMacas() {
maca = createSprite(random(50, 350),40, 10, 10);
maca.addImage(imagemdamaca);
maca.scale=0.07;
maca.velocityY = 3;
maca.lifetime = 150;
  
}

function criarLaranja() {
folhalaranja = createSprite(random(50, 350),40, 10, 10);
folhalaranja.addImage(imagemlaranja);
folhalaranja.scale=0.08;
folhalaranja.velocityY = 3;
folhalaranja.lifetime = 150;
}

function criarVermelho() {
folhavermelha = createSprite(random(50, 350),40, 10, 10);
folhavermelha.addImage(imagemvermelha);
folhavermelha.scale=0.06;
folhavermelha.velocityY = 3;
folhavermelha.lifetime = 150;
}
