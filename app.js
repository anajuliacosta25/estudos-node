const calculadora = require("./calculadora")


const resultadoSoma = calculadora.somar(25,17)
const resultadoSubtracao = calculadora.subtrair (25,17)
const reusultadoMultiplicacao = calculadora.multiplicar (25,17)
const resultadoDivisao  = calculadora.dividir (25,17)

console.log("O resultado da soma é:",resultadoSoma)
console.log("O resultado da subtracao é:",resultadoSubtracao)
console.log("O resultado da multiplicação é:",reusultadoMultiplicacao)
console.log("O resultado da divisão é:",resultadoDivisao)
