function conversor() {
  var inputBox = document.querySelector("#valor-original")
  var converted = inputBox.value * 0.004
  inputBox.value = ""
  var resultText = document.querySelector("#valor-convertido")
  resultText.innerHTML = `R$${converted}`
}
