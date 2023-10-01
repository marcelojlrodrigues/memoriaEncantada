const cartas = []
var carta = "carta"
var qtdJogadas = 0

// Inicia o Array com as cartas do jogo

function montaArrayDeCartas() {
    for (let i = 1; i <= 12; i++) {
        cartas.push(carta + i + ".png");
    }
}

function comparadorAleatorio() {
    return Math.random() - 0.5;
}

// Chama a execução do método para montar o array de cartas

montaArrayDeCartas()

// Executa o método do array para embaralhar as cartas
cartas.sort(comparadorAleatorio)

console.log(cartas)

// Retorna ID carta 
/*
function retornaIdCarta(){
    for (let i = 0; i < 12; i++) {
        if(cartas[i].length>10){
            return cartas[i].slice(5,7) 
            //console.log(cartas[i])
        }
        else
        {
            return cartas[i].slice(5,6)
        }
    }      
}

*/

//cartaClass = document.querySelector(".cartas");
const listaDeIds = document.querySelectorAll("[id]");

listaDeIds.forEach(elemento => {

    elemento.addEventListener("click", function() {
    
    // Incrementa a variavel jogada
    qtdJogadas++;

    console.log("A carta " + elemento.id + " foi clicado");
    
    // Aqui você pode trocar a imagem da carta clicada

    const imagem = elemento.querySelector("img");
    elemento.id=elemento.id - 1
    imagem.src = "imagens/" + cartas[elemento.id];
    

    
    if(qtdJogadas == 2){
        
    }
    
  });
});