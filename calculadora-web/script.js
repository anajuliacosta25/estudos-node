const botaoLimpar = document.getElementById("limpar")
const botaoSomar = document.getElementById("somar")
const botaoSubtrair = document.getElementById("subtrair")
const botaoMultiplicar = document.getElementById("multiplicar")
const botaoDividir = document.getElementById("dividir")
const botaoIgual = document.getElementById("igual")
const botaoBackspace = document.getElementById("backspace")
const botaoPorcentagem = document.getElementById("porcentagem")

const display = document.getElementById("display")
const botoesNumeros = document.querySelectorAll(".numero")

let valorAtual = ""
let primeiroValor = null
let operacao = null

botoesNumeros.forEach(function(botao) {
    botao.addEventListener("click", function() {
        valorAtual += botao.innerText
        display.innerText = valorAtual

    })

})

botaoSomar.addEventListener("click", function() {
    selecionarOperacao("+")

})

botaoSubtrair.addEventListener("click", function() {
    selecionarOperacao("-")

})

botaoMultiplicar.addEventListener("click", function() {
    selecionarOperacao("*")

})

botaoDividir.addEventListener("click", function() {
    selecionarOperacao("/")

})

botaoBackspace.addEventListener("click", function(){
    valorAtual = valorAtual.slice(0,-1)

    display.innerText = valorAtual || "0"
})

botaoPorcentagem.addEventListener("click", function(){
    valorAtual = String(Number(valorAtual)/100)

    display.innerText = valorAtual

})

botaoIgual.addEventListener("click", function (){
    const segundoValor = Number(valorAtual)
    const resultado = calcular(primeiroValor,segundoValor,operacao)

    display.innerText = resultado
    valorAtual = String(resultado)

    primeiroValor = null
    operacao = null
})

function selecionarOperacao(operacaoSelecionada){
    primeiroValor = Number(valorAtual)
    operacao = operacaoSelecionada
    valorAtual = ""
    display.innerText = "0"
}

function calcular (valor1, valor2, operacao){
    if(operacao === "+") 
        return valor1 + valor2
    else  if 
    (operacao === "-") 
        return valor1 - valor2
    else if
    (operacao === "*")
        return valor1 * valor2
    else if
    (operacao === "/") {
        if(valor2 === 0){
            return "Não é possível realizar a divisão por 0"
        }
        return valor1 / valor2    
    }
    else {
        return "Operação inválida."
    }   
    }

function limparResultado() {
    valorAtual = ""
    display.innerText = "0"

}

botaoLimpar.addEventListener("click", function() {
    limparResultado()

})