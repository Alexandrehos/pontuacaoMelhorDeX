const placarP1 = document.querySelector("#player1");
const placarP2 = document.querySelector("#player2");
const botaoP1 = document.querySelector("#botaoP1");
const botaoP2 = document.querySelector("#botaoP2");
const botaoReset = document.querySelector("#botaoReset");
const pontuacaoAlvo = document.querySelector("#pontuacaoAlvo");
const tituloCard = document.querySelector("#tituloCard");

let placar = {
  pontuacaoP1: 0,
  pontuacaoP2: 0,
  pontuacaoAlvo: 7,
};

pontuacaoAlvo.addEventListener("change", () => {
  placar.pontuacaoAlvo = parseInt(pontuacaoAlvo.value);
  tituloCard.innerText = pontuacaoAlvo.value;
  reiniciar();
});

botaoP1.addEventListener("click", (e) => {
  addPtoP1();
  verificaVencedor() && P1Vencedor();
  atualizaPlacar();
});

botaoP2.addEventListener("click", (e) => {
  addPtoP2();
  verificaVencedor() && P2Vencedor();
  atualizaPlacar();
});

botaoReset.addEventListener("click", reiniciar);

function atualizaPlacar() {
  placarP1.innerText = placar.pontuacaoP1;
  placarP2.innerText = placar.pontuacaoP2;
}

function addPtoP1() {
  placar.pontuacaoP1++;
}

function addPtoP2() {
  placar.pontuacaoP2++;
}

function P1Vencedor() {
  placarP1.classList.add("has-text-success");
  placarP2.classList.add("has-text-danger");
  desabilitaBotoes(true);
}

function P2Vencedor() {
  placarP2.classList.add("has-text-success");
  placarP1.classList.add("has-text-danger");
  desabilitaBotoes(true);
}

function verificaVencedor() {
  if (
    placar.pontuacaoP1 >= (placar.pontuacaoAlvo + 1) / 2 ||
    placar.pontuacaoP2 >= (placar.pontuacaoAlvo + 1) / 2
  ) {
    return true;
  }
  return false;
}

function desabilitaBotoes(boleano) {
  botaoP1.disabled = boleano;
  botaoP2.disabled = boleano;
}

function reiniciar() {
  desabilitaBotoes(false);
  placar.pontuacaoP1 = 0;
  placar.pontuacaoP2 = 0;
  placarP2.classList = "";
  placarP1.classList = "";
  atualizaPlacar();
}
