//Botões Menu
const xBotao1 = 110;
const xBotao2 = 310;
let xTexto;
let yTexto;
const yBotao = 100;
const larguraBotao = 150;
const alturaBotao = 60;
const suavizaBotao = 12;
let escolhaMenu = 0;
let tela = 0;

//Botão Voltar
const xBotaoVoltar = 480
const larguraBotaoVoltar = 80
const alturaBotaoVoltar = 20
const yBotaoVoltar1 = 540

//Imagens personagens
let personagemBoneco;
let personagemPorco;
let personagemKramer;
let personagemHomem;
let itemCapacete;
let itemPorta;
let chao;

//Movimentos personagens
let andarHomemX = 0;
let andarHomemY = 0;
let andarKramerX = 192;
let andarKramerY = 384;
let andarBonecoX = 0;
let andarBonecoY = 448;
let andarPorcoX = 448;
let andarPorcoY = 320;
let andarCapaceteX = 256;
let andarCapaceteY = 128;

//Função para criar Botões do Menu e estilizar os Botões ao "passar" o mouse. No eixo X verificamos o ínicio do botão e sua largura e no Eixo Y verifcamos também sua altura, assim delimitamos o espaço correto do botão ao "passar" o mouse.
function menuBotao(texto, xb, xbl, opcao, xTexto, yTexto) {

  if (mouseX > xb && mouseX < xbl && mouseY > yBotao && mouseY < yBotao + alturaBotao) {
    fill(255, 0, 0);
    escolhaMenu = opcao;
  } else {
    fill(255);
  }

  rect(xb, yBotao, larguraBotao, alturaBotao, suavizaBotao);
  textSize(36);
  textFont(fonteMenu);
  fill(0);
  text(texto, xb + xTexto, yBotao + yTexto);

}

function telaJogo() {

  //Preenche o Background da tela do Game com a imagem de 64x64 representando o chão do Banheiro do clássico filme Saw (Jogos Mortais)
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(chao, x * 64, y * 64, 64, 64)
    }
  }

  image(personagemHomem, andarHomemX, andarHomemY, 64, 64)
  image(personagemKramer, andarKramerX, andarKramerY, 64, 64)
  image(personagemBoneco, andarBonecoX, andarBonecoY, 64, 64)
  image(personagemPorco, andarPorcoX, andarPorcoY, 64, 64)
  image(itemCapacete, andarCapaceteX, andarCapaceteY, 64, 64)
  image(itemPorta, 512, 512, 64, 64)

  if (andarHomemX === 512 && andarHomemY === 512) {
    image(venceuJigsaw, 60, 160);

    botao = createButton('Reiniciar');
    botao.position(512);

    botao.mousePressed(reiniciar);

    noLoop();
  }

  //Verifica se algum dos perseguidores alcançou o personagem principal
  if ((andarHomemX === andarKramerX && andarHomemY === andarKramerY) || (andarHomemX === andarBonecoX && andarHomemY === andarBonecoY) || (andarHomemX === andarPorcoX && andarHomemY === andarPorcoY) || (andarHomemX === andarCapaceteX && andarHomemY === andarCapaceteY)) {
    image(gameover, 160, 160, 256, 256);

    botao = createButton('Reiniciar');
    botao.position(512);

    botao.mousePressed(reiniciar);

    noLoop();
  }
}

function reiniciar() {
  andarHomemX = 0;
  andarHomemY = 0;
  andarKramerX = 192;
  andarKramerY = 384;
  andarBonecoX = 0;
  andarBonecoY = 448;
  andarPorcoX = 448;
  andarPorcoY = 320;
  andarCapaceteX = 256;
  andarCapaceteY = 128;
  botao.remove();
  loop();
  tela = 0;
}

function telaCreditos() {
  background(0);
  textSize(80);
  fill(255);
  text("Créditos", 170, 80);
  textSize(30);
  text("Pericles Cabral", 240, 220);
  textSize(20);
  text("Bacharel em Ciência da Computação pela Universidade Estadual do Sudoeste da Bahia", 240, 260, 300);
  textSize(20);
  text("Mini Game simples desenvolvido durante Aula Inaugural Técncica do Curso FullStack Turma DDS16 da Cubos Academy.", 240, 330, 300);
  image(fotoPericles, 30, 200, 180, 220);
  voltarTela("Voltar", yBotaoVoltar1, yBotaoVoltar1 + larguraBotaoVoltar, 0);
}

function voltarTela(texto, yv, yvl, opcao) {
  if (mouseX > xBotaoVoltar && mouseX < xBotaoVoltar + larguraBotaoVoltar && mouseY > yv && mouseY < yvl + alturaBotaoVoltar) {
    fill(255, 0, 0);
    if (mouseIsPressed) {
      tela = 0;
      EscolhaMenu = 0;
    }
  }
  else {
    noFill();
  }
  rect(xBotaoVoltar, yv, larguraBotaoVoltar, alturaBotaoVoltar, 15);
  textSize(14);
  fill(color(255, 255, 255));
  text(texto, xBotaoVoltar + 25, yv + 15)
}

//A função keyPressed() é chamada uma vez sempre que uma tecla é pressionada.
function keyPressed() {
  if (keyIsDown(RIGHT_ARROW) && andarHomemX < 512) {
    andarHomemX += 64;
    andar();
  }

  if (keyIsDown(LEFT_ARROW) && andarHomemX > 0) {
    andarHomemX -= 64;
    andar();
  }

  if (keyIsDown(DOWN_ARROW) && andarHomemY < 512) {
    andarHomemY += 64;
    andar();
  }

  if (keyIsDown(UP_ARROW) && andarHomemY > 0) {
    andarHomemY -= 64;
    andar();
  }
}

//Função que faz com que os perseguidores andem de forma aleatória na caça do personagem.
function andar() {
  andarKramerX = round(random() * 512 / 64) * 64;
  andarKramerY = round(random() * 512 / 64) * 64;
  andarBonecoX = round(random() * 512 / 64) * 64;
  andarBonecoY = round(random() * 512 / 64) * 64;
  andarPorcoX = round(random() * 512 / 64) * 64;
  andarPorcoY = round(random() * 512 / 64) * 64;
  andarCapaceteX = round(random() * 512 / 64) * 64;
  andarCapaceteY = round(random() * 512 / 64) * 64;
}

function mouseClicked() {

  if (tela == 0) {
    if (escolhaMenu == 1) {
      tela = 1;
    }
    if (escolhaMenu == 2) {
      tela = 2;
    }
  }
}

function setup() {
  createCanvas(576, 576);

  imagemFundo = loadImage("imagens/jigsaw_fundo.png");
  fonteMenu = loadFont("fontes/shlop_rg.otf");
  personagemKramer = loadImage('imagens/kramer.png');
  personagemBoneco = loadImage('imagens/boneco.png');
  personagemPorco = loadImage('imagens/porco.png');
  personagemHomem = loadImage('imagens/homem.png')
  itemPorta = loadImage('imagens/porta.png');
  itemCapacete = loadImage('imagens/capacete.png');
  chao = loadImage('imagens/chao.png');
  gameover = loadImage('imagens/gameover.png');
  venceuJigsaw = loadImage("imagens/venceu_jigsaw.gif");
  fotoPericles = loadImage('imagens/foto_peu.png');
}

function draw() {
  if (tela == 0) {
    background(imagemFundo);

    fill(255);
    textSize(36);
    text("Jogos Mortais - The Mini Game", 110, 65);

    escolhaMenu = -1
    menuBotao("Jogar", xBotao1, xBotao1 + larguraBotao, 1, 40, 40);
    menuBotao("Créditos", xBotao2, xBotao2 + larguraBotao, 2, 25, 40);
  }
  else if (tela == 1) {
    telaJogo();
  }
  else if (tela == 2) {
    telaCreditos();
  }
}