let xAtor = 100;
let yAtor = 360;
let meusPontos = 0;

function mostraAtor(){
  
  image(imagemAtor, xAtor, yAtor, 50, 45);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
      
    yAtor -= 3;
      }
  
  if (keyIsDown(DOWN_ARROW)){
      
    yAtor += 3;
      }
  if (keyIsDown(65)){
      
    xAtor += 3;
      }

  
  
}

function marcaPonto(){
  //print(yAtor);
  //print(meuprints);
  
  if(yAtor < 2){
    meusPontos  += 1;
    voltaAtor();
  }
}

function voltaAtor(){
  
  yAtor = 375;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos,350,30);
  fill(color(124,252,0));
}

function verificaColisao(){
  
  for(let i = 0; i < imagemCarros.length; i = i+1){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i],
                              05,05,xAtor, yAtor,40);
    
    if(colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366;
  
  if(pontoMaiorQueZero()){
    meusPontos -= 1;
  } 
}

function pontoMaiorQueZero(){
  return meusPontos >  0;
}




