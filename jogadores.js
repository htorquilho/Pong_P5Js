//variáveis do jogador
let xJ = 5;
let yJ = 150;
let cJ = 10;    // c é o comprimento
let aJ = 90;   // a é a altura

//variáveis do computador
let xPC = 585;
let yPC = 150;
let vYPC;      

// velocidade do computador
function movimentoPC(){
  vYPC = yBola - yPC - cJ/2 - 30;
  yPC += vYPC;
}

function mostraPC() {
  rect(xPC, yPC, cJ, aJ)
}

// solução da biblioteca do P5Js
let colisao = false

function colisaoJogador(x, y){
  colisao = collideRectCircle(x, y, cJ, aJ, xBola, yBola, r);
  if (colisao) {
    vXBola *= -1;
    raquetada.play();
  }
}

function mostraJogador() {
  rect(xJ, yJ, cJ, aJ);
}

function movimentoJogador() {
  if (keyIsDown(UP_ARROW)) {
     yJ -= 10;
}
  if (keyIsDown(DOWN_ARROW)) {
     yJ += 10;
}

// Outra solução para a colisão da bola com o jogador   
// function colisaoJogador(){
// if (xBola - r < xJ + cJ
//     && yBola - r < yJ + aJ
//     && yBola + r > yJ) {
//       vXBola *= -1;
//      raquetada.play();
}