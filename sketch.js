//variáveis bolinha
let xBolinha = 300;
let yBolinha= 200;
let dBolinha = 20;
let raioBolinha = dBolinha / 2;

let bater = false

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis minha raquete
let xRaquete = 5;
let yRaquete = 150;

// variáveis raquete do oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// variáveis tamanho das raquetes
let comprimentoRaquete = 10;
let alturaRaquete = 80;

//placar
let meusPontos = 0;
let pontosOponente = 0;

//sons
let somRaquetada;
let somPonto;
let somFundo;

//Erro do oponente
let chanceDeErrar = 0;

function preload(){
  somRaquetada = loadSound("raquetada.mp3");
  somPonto = loadSound ("ponto.mp3");
  somFundo = loadSound ("trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  somFundo.loop();
}

function draw() {
  background(0);
  propriedadesBolinha ();
  movimentoBolinha();
  limitesBolinha();
  propriedadesRaquete(xRaquete, yRaquete);
  propriedadesRaquete(xRaqueteOponente, yRaqueteOponente);
  moverRaquete ();
  //baterNaRaquete();
  baterNaRaqueteGitHub(xRaquete, yRaquete);
  baterNaRaqueteGitHub(xRaqueteOponente, yRaqueteOponente);
  movimentoOponente();
  placar ();
  adicionarPontos();
  calculaChanceDeErrar();
  
}

function propriedadesBolinha (){
  circle(xBolinha, yBolinha,dBolinha);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function limitesBolinha (){
   if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
   if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}

function propriedadesRaquete(x,y){
  rect (x, y, comprimentoRaquete, alturaRaquete);
}

function moverRaquete (){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
   if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
}

function baterNaRaquete(){
  if (xBolinha - raioBolinha < xRaquete + comprimentoRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
    velocidadeXBolinha *= -1;
  
  }
}

function baterNaRaqueteGitHub(x,y){
  bater = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, dBolinha);
  if (bater){
    velocidadeXBolinha *= -1
    somRaquetada.play();
  }
}
function movimentoOponente(){
 velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
 yRaqueteOponente += velocidadeYOponente + chanceDeErrar 
 }
function placar (){
  textAlign (CENTER)
  textSize (16)
  fill(color (255,69,0))
  stroke(255);
  rect(258, 10, 25, 20);
  rect(308, 10, 25, 20);
  fill(255)
  text(meusPontos, 270, 26);
  text (pontosOponente, 320, 26);
}
function adicionarPontos(){
  if (xBolinha > 590){
    meusPontos += 1;
    somPonto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    somPonto.play();
  }
}
function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
