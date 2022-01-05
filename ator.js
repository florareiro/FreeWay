//código do ator

//variáveis ator
let xAtor = 100;
let yAtor = 370;
let comprimentoAtor = 25;
let alturaAtor = 25; 
let colisao = false;
let meusPontos = 0;

function mostrarAtor(){
  image (imagemAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
      if (podeSeMover()){
    yAtor += 3;
      }
  }
  
function podeSeMover (){
  return yAtor < 366;
} 
  
  
  
  //if (keyIsDown(LEFT_ARROW)){xAtor -= 3;}
 // if (keyIsDown(RIGHT_ARROW)){ xAtor += 3;}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
       somColisao.play();
      if(meusPontos > 0){
      meusPontos -= 1;
       
    }
  }
}
}

function colidiu(){
  yAtor = 370;
}

function marcaPonto(){
  if (yAtor < 15 ){
    meusPontos += 1;
    somPonto.play();
    colidiu();
}
}

function incluiPontos (){
  textSize(25);
  fill(color(255,255,0));
  text(meusPontos, 110, 27);
}
