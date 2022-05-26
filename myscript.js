let n1 = 4
let n2 = 2

let storedResult = '0';

const addButton = document.querySelector("#addButton")
const minusButton = document.querySelector("#minusButton")
const multiplyButton = document.querySelector("#multiplyButton")
const divideButton = document.querySelector("#divideButton")
const operateButton = document.querySelector("#operateButton")
const oneButton = document.querySelector("#oneButton")
const twoButton = document.querySelector("#twoButton")
const threeButton = document.querySelector("#threeButton")
const fourButton = document.querySelector("#fourButton")
const fiveButton = document.querySelector("#fiveButton")
const sixButton = document.querySelector("#sixButton")
const sevenButton = document.querySelector("#sevenButton")
const eightButton = document.querySelector("#eightButton")
const nineButton = document.querySelector("#nineButton")
const zeroButton = document.querySelector("#zeroButton")
const dotButton = document.querySelector("#dotButton")
const equalsButton = document.querySelector("#equalsButton")
const clearButton = document.querySelector("#clearButton")




addButton.onclick = add() 
function add (){ 
    let sum = n1+n2
    console.log (sum)
}

minusButton.onclick = subtract()
function subtract() {
    let difference = n1 - n2
    console.log(difference)
}

multiplyButton.onclick = multiply()
function multiply() {
    let product = n1 * n2 
    console.log(product)
}

divideButton.onclick = divide()
function divide() {
    let quotient = n1/n2
    console.log (quotient) 
}

operateButton.addEventListener('click', () => {
    let arr = ["add", "minus", "multiply", "divide"]
    let random = arr[Math.floor(Math.random()*arr.length)]
    console.log(random)
    
})

oneButton.onclick = function one() {
    storedResult += "1"
    console.log(storedResult)
}

twoButton.onclick = two()
threeButton.onclick = three()
fourButton.onclick = four()
fiveButton.onclick = five()
sixButton.onclick = six()
sevenButton.onclick = seven()
eightButton.onclick = eight()
nineButton.onclick = nine()
zeroButton.onclick = zero()
dotButton.onclick = dot()
equalsButton.onclick = equals()
clearButton.onclick = clear()