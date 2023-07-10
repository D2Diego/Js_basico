let numberOne = Number(prompt('Digite o primeiro número aqui:'))
let numberTwo = Number(prompt('Digite o segundo número aqui:'))

const sun = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo


const imparPar = sun % 2

alert('A soma é: ' + sun)
alert('A subtração é: ' + sub)
alert('A multiplicação é: ' + multi)
alert('A divisão é: ' + div)
alert('O resto da divisão é: ' + restDiv)



if (imparPar == 0) {
    alert('O número é par')
} else {
    alert('O númeor é impar')
}

if (numberOne == numberTwo) {
    alert('Os números são iguais')
} else {
    alert('Os números são diferentes')
}



