
let campoIdade
let campoFantasia
let campoAventura

function setup() {
    createCanvas(800, 400);
    createElement("h2", "Recomendador de filmes")
    createSpan("sua idade:")
    campoIdade = createInput("0");
    campoFantasia = createCheckbox("Gosta de fantasia?");
    campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
    background ("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
  
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
    fill(color(200, 50, 100))
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width/2, height/2);
}


function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
            if(idade >= 10) {
            if(idade >= 12) {
            if(idade >= 14) {
          
            if(gostaDeFantasia){
            return "Indiana Jones e o chamado do destino"
          } else {
            if(gostaDeAventura){
            return "Cidade Perdida"
          } else {
            return "O menino que descobriu o vento"
          }
          }
          } else{
            if(gostaDeFantasia){
            return "Guardiões da galáxia"
          } else{
            if(gostaDeAventura){
            return "eternos" 
          } else{
            return "Ladrões de bicicleta"
          }  
          }
          }
          } else {
            if(gostaDeFantasia) {
                return "As aventuras de Pi";
          } else {
            if (gostaDeAventura){
            return "Homem aranha: através do aranhaverso"
          } else {
            return "Depois da chuva";
          }    
          }
          }
          } else {
            if(gostaDeFantasia) {
            return "A viagem de Chihiro";
          } else {
            if(gostaDeAventura){
            return "Procurando nemo"
          } else{
            return "Divertidamente";
          }  
        }    
      }      
    } 
       
       