function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro()
  verificaColisao();
  incluiPontos();
  marcaPonto();

  
}




