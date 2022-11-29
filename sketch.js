//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//Velocidade da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//Variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//Variaveis do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let velocidadeXOponente;

let colidiu =  false;

//Placar do Jogo
let meusPontos = 0;
let oponentePontos = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaquete1();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();

  
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro); 
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0 ){
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
      velocidadeyBolinha *= -1;
      }
}

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
  
}


function movimentoRaquete1(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
 } 

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete)
  {
    velocidadexBolinha *= -1;
  }

}

function verificaColisaoRaquete(x, y){
   colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu ){
    velocidadexBolinha *= -1;
  }
}


function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(220,20,60));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(220,20,60));
  rect(450, 10, 40, 20);
  fill(255);
  text(oponentePontos, 470, 26);
     
}

function marcaPonto(){
  if (xBolinha > 590 ){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    oponentePontos += 1
  }
}
