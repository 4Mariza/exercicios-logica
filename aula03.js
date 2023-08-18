'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoSituacao = document.getElementById('situacao')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoValidar = document.getElementById('validar')
const botaoAnalisar = document.getElementById('analisar')

function somar() {
    const valor1 = Number(document.getElementById('valor1').value)
    const valor2 = Number(document.getElementById('valor2').value)
    const resultado = document.getElementById('resultado')

    const total = valor1 + valor2

    resultado.textContent = total
}
botaoSomar.addEventListener('click', somar)

function identificar() {
    const numero = Number(document.getElementById('valor-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if (numero > 0) {
        resultado.textContent = 'POSITIVO'
    } else if (numero < 0) {
        resultado.textContent = 'NEGATIVO'
    } else {
        resultado.textContent = 'ZERO'
    }
}
botaoIdentificar.addEventListener('click', identificar)

///////////////////////////////////exercicio D//////////////////////////////////////////////////
function calcularMedia() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado-item3')
    const mediaFinal = document.getElementById('media')

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7) {
        resultado.textContent = 'APROVADO'
        mediaFinal.textContent = media.toFixed(1)
    } else if (media < 7) {
        const notaExame = prompt('Digite sua nota de exame')
        const mediaNova = (media + Number(notaExame)) / 2
        if (mediaNova >= 5) {
            resultado.textContent = 'APROVADO EM EXAME'
            mediaFinal.textContent = mediaNova.toFixed(1)
        } else {
            resultado.textContent = 'REPROVADO'
            mediaFinal.textContent = mediaNova.toFixed(1)
        }
    }
}
botaoSituacao.addEventListener('click', calcularMedia)

////////////////////////////exercicio O//////////////////////////////////////////////////////////

function multiplicar() {
    const valorInteiro = parseInt(document.getElementById('valor-inteiro').value)
    const resultado = document.getElementById('resultado-item4')

    const produto = valorInteiro * 2

    if (produto > 30) {
        resultado.textContent = produto
    } else if (produto == 30) {
        resultado.textContent = 'PRODUTO IGUAL A 30'
    } else {
        resultado.textContent = 'PRODUTO MENOR QUE 30'
    }
}

botaoMultiplicar.addEventListener('click', multiplicar)

/////////////////////////////////////////exercicio m ////////////////////////////////////////////////////

function validar() {
    const nome = document.getElementById('nome')
    const sexo = document.getElementById('sexo')
    const resultado = document.getElementById('resultado-item5')

    if (sexo.value == 'M') {
        resultado.textContent = `Ilmo. Sr. ${nome.value} `
    } else if (sexo.value == 'F') {
        resultado.textContent = `Ilma. Sra. ${nome.value} `
    } else {
        resultado.textContent = `Sexo informado inválido`
    }
}
botaoValidar.addEventListener('click', validar)

/////////////////////////////////////////exercicio i //////////////////////////////////////////////////////////

function analisar() {
    const valorA = Number(document.getElementById('valorA').value)
    const valorB = Number(document.getElementById('valorB').value)
    const valorC = Number(document.getElementById('valorC').value)
    const valorD = Number(document.getElementById('valorD').value)
    const valorE = Number(document.getElementById('valorE').value)
    const resultado = document.getElementById('resultado-item6')

    const maior = Math.max(valorA, valorB, valorC, valorD, valorE)
    const menor = Math.min(valorA, valorB, valorC, valorD, valorE)

    resultado.textContent = `Maior valor: ${maior}\nMenor valor: ${menor}`
}

botaoAnalisar.addEventListener('click', analisar)