//variáveis da bola
let xBola = 300;
let yBola = 200;
let d = 15;          // d é o diametro da bola
let r = d/2;        //  r é o raio da bola

//velocidade da bola
let vXBola = 6;
let vYBola = 6;

//placar do jogo
let meusPontos = 0;
let pontosPC = 0;

function mostraBola() {
  circle(xBola, yBola, d);
}

function movimentoBola() {
  xBola += vXBola;
  yBola += vYBola;
}

function colisaoBorda() {
  if (xBola + r > width || xBola - r < 0){ 
    vXBola *= -1;
}
  if (yBola + r > height || yBola - r < 0){
    vYBola *= -1;
}
}

function marcaPonto(){
  if (xBola > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBola < 10){
    pontosPC += 1;
    ponto.play();
  }
}

function placar() {
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(30, 144, 255));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(30, 144, 255));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosPC, 470, 26);
} 