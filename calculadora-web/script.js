const botaoLimpar = document.getElementById("limpar")
const display = document.getElementById("display")
const botoesNumeros = document.querySelectorAll(".numero")

botoesNumeros.forEach(function(botao){
    
    botao.addEventListener("click", function(){
        display.innerText = botao.innerText
    })
})

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

function executarCalculo(operacao) {

    if(numero1.value === "" || numero2.value === ""){
        resultadoTela.innerText = "Digite os dois números!"
        return
    }
  
    const valor1 = Number(numero1.value)
    const valor2 = Number(numero2.value)

    if(isNaN(valor1) || isNaN(valor2)){
        resultadoTela.innerText = "Digite números válidos!"
        return
    }

    const resultado = calcular(valor1, valor2, operacao)

    resultadoTela.innerText = `Resultado: ${resultado}`
}

function limparResultado(){
    numero1.value = ""
    numero2.value = ""
    resultadoTela.innerText = "Resultado:"
}

botaoSomar.addEventListener("click",function (){
   executarCalculo("+")
})

botaoSubtrair.addEventListener("click", function (){
    executarCalculo("-")
})

botaoMultiplicar.addEventListener("click", function (){
    executarCalculo("*")
})

botaoDividir.addEventListener("click", function (){
    executarCalculo("/")
})

botaoLimpar.addEventListener("click", function (){
    limparResultado()
})