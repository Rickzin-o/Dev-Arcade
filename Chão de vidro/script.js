var rodada = 1
var stopCondition = false

var ordemCorreta = [Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 3) + 1]

var resultParagraph = document.querySelector("#results")

function play(escolha) {
  if (stopCondition == false && escolha[0] == rodada) {
    if (ordemCorreta[escolha[0] - 1] == escolha[2]) {
      resultParagraph.innerText = "CORRETO! Vamos para o próximo round!"
      nextRound()
    } else {
      resultParagraph.innerText = "ERRADO... Infelizmente você caiu e perdeu!"
      stopCondition = true
    }
  }
}

function nextRound() {
  if (rodada == 4) {
    resultParagraph.innerText = "VOCÊ VENCEU O JOGO!!!"
    stopCondition = true
    return
  }
  rodada += 1
  let game = `<div class="ponte-container">
        <p>Rodada ${rodada}</p>
        <button onclick="play('${rodada}-1')">1</button>
        <button onclick="play('${rodada}-2')">2</button>
        <button onclick="play('${rodada}-3')">3</button>
      </div>`
  document.querySelector("#game").innerHTML += game
}
