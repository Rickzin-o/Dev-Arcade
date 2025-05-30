var choose = false

var botChoice = document.querySelector("#bot-choice")
var yourChoice = document.querySelector("#your-choice")
var opcoes = ['pedra', 'tesoura', 'papel']
var escolha = ""

var iterations = 0
const interval = setInterval(() => {
  botChoice.innerText = `${opcoes[iterations % 3].toUpperCase()}!`
  iterations += 1
  
  if (choose) {
    botChoice.innerText = `${escolha.toUpperCase()}!`
    clearInterval(interval);
  }
}, 50)


function jogar(opcao) {
  if (choose) return
  
  choose = true
  escolha = opcoes[Math.floor(Math.random() * 3)]
  yourChoice.innerText = `Você escolheu ${opcao}!`
  
  if (opcao == escolha) {
    yourChoice.innerText += " Empate!"
  } else if ((opcoes.indexOf(opcao) + 1) % 3 == opcoes.indexOf(escolha)) {
    yourChoice.innerText += " Você venceu! :D"
  } else {
    yourChoice.innerText += " Você perdeu! :("
  }
  
}