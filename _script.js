// Variáveis globais
const cartas = [];
let pares = [];
let abertas = 0;
let acertos = 0;

// Função mostrar cartas

function mostrarCartas() {
    
}

// Função para embaralhar as cartas
function embaralhar() {
  cartas = cartas.sort(() => Math.random() - 0.5);
}

// Função para verificar se duas cartas são pares
function verificarPar(carta1, carta2) {
  return carta1.id === carta2.id;
}

// Função para animar a lebre
function animarLebre() {
  const luna = document.querySelector(".luna");
  luna.classList.add("pulando");
  setTimeout(() => {
    luna.classList.remove("pulando");
  }, 2000);
}

// Função para iniciar o jogo
function iniciarJogo() {
  // Cria um array com 12 cartas
  for (let i = 0; i < 12; i++) {
    cartas.push({
      id: i,
      face: "imagens/carta" + i + ".png",
      verso: "imagens/carta_verso.png",
    });
  }

  // Embaralha as cartas
  embaralhar();

  // Preenche o array de pares
  for (let i = 0; i < 6; i++) {
    pares.push([cartas[i], cartas[i + 6]]);
  }
}
