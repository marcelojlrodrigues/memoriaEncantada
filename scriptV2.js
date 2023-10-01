const cartas = []
var carta = "carta"

// Inicia o Array com as cartas do jogo

function montaArrayDeCartas() {
    for (let i = 1; i <= 12; i++) {
        cartas.push(carta + i + ".png");
    }
}

// Argumento para o método sort

function comparadorAleatorio() {
    return Math.random() - 0.5;
}

// Chama a execução do método para montar o array de cartas

montaArrayDeCartas()

// Executa o método do array para embaralhar as cartas
cartas.sort(comparadorAleatorio)

console.log(cartas)



function criarCarta(idCarta, carta) {
    const div = document.createElement("div");
    div.className = "cartas";
    div.id = idCarta;
    
    const img = document.createElement("img");
    img.src = "imagens/" + carta;
    //img.alt = altCarta;

    div.appendChild(img);
    
    const elementoPai = document.querySelector(".containerCartasLine1");
    elementoPai.appendChild(cartas)
    
    return div;


}

// Atribui as cartas na chamada da função criarCarta
for (let i = 0; i < 12; i++) {

    if(cartas[i].length>10){
        criarCarta(cartas[i].slice(5,7), cartas[i]) 
        //console.log(cartas[i])
    }
    else
    {
        criarCarta(cartas[i].slice(5,6), cartas[i])
    }      
}   

// Mostrar cartas



