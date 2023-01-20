//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBola();
  movimentoBola();
  mostraJogador();
  movimentoJogador();
  colisaoBorda();
  colisaoJogador(xJ, yJ);
  colisaoJogador(xPC, yPC);
  mostraPC();
  movimentoPC();
  placar();
  marcaPonto();
}