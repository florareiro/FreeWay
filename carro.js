//código carro
let comprimentoCarro = 60;
let alturaCarro = 30;


let xCarros =[600, 600, 600, 600, 600, 600]
let yCarros = [45, 155, 265, 320, 215, 100];
let velocidadeCarros =[3.8, 3, 3.5, 4.3, 5, 2.6];
let i = 0;

function mostrarCarro(){
  image (imagemCarros[0], xCarros[0], yCarros[0], comprimentoCarro, alturaCarro);
  image (imagemCarros[1], xCarros[1], yCarros[1], comprimentoCarro, alturaCarro);
  image (imagemCarros[2], xCarros[2], yCarros[2], comprimentoCarro, alturaCarro);
  image (imagemCarros[3], xCarros[3], yCarros[3], comprimentoCarro, alturaCarro);
  image (imagemCarros[4], xCarros[4], yCarros[4], comprimentoCarro, alturaCarro);
  image (imagemCarros[5], xCarros[5], yCarros[5], comprimentoCarro, alturaCarro);
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0] ;
  xCarros[1] -= velocidadeCarros[1] ;
  xCarros[2] -= velocidadeCarros[2] ;
  xCarros[3] -= velocidadeCarros[3] ;
  xCarros[4] -= velocidadeCarros[4] ;
  xCarros[5] -= velocidadeCarros[5] ; 
  
}

function voltaPosicaoInicialCarro(){
   if (xCarros[0] < -50){
    xCarros[0] = 600;}
  
    if (xCarros[1] < -50){
    xCarros[1] = 600;}
      if (xCarros[2] < -50){
    xCarros[2] = 600;}
       if (xCarros[3] < -50){
    xCarros[3] = 600;}
         if (xCarros[4] < -50){
    xCarros[4] = 600;}
           if (xCarros[5] < -50){
    xCarros[5] = 600;}
       }


