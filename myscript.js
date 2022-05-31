
let firstNumber = ''
let thisNumber = ''
let shouldReset = false
let currentOperation = null

let active = document.querySelector("activeDisplay")
let stored = document.querySelector("storedDisplay")

const addButton = document.querySelector("#addButton")
const minusButton = document.querySelector("#minusButton")
const multiplyButton = document.querySelector("#multiplyButton")
const divideButton = document.querySelector("#divideButton")
const dotButton = document.querySelector("#dotButton")
const equalsButton = document.querySelector("#equalsButton")
const clearButton = document.querySelector("#clearButton")
const operateButton = document.querySelector("#operateButton")

let numberButtons = document.querySelectorAll(".numberButton")
let operatorButtons = document.querySelectorAll(".operatorButton")

// const oneButton = document.querySelector("#oneButton")
// const twoButton = document.querySelector("#twoButton")
// const threeButton = document.querySelector("#threeButton")
// const fourButton = document.querySelector("#fourButton")
// const fiveButton = document.querySelector("#fiveButton")
// const sixButton = document.querySelector("#sixButton")
// const sevenButton = document.querySelector("#sevenButton")
// const eightButton = document.querySelector("#eightButton")
// const nineButton = document.querySelector("#nineButton")
// const zeroButton = document.querySelector("#zeroButton")

window.addEventListener("keydown", keyboardInput)





operateButton.addEventListener('click', () => {
    let arr = ["add", "minus", "multiply", "divide"]
    let random = arr[Math.floor(Math.random()*arr.length)]
    console.log(random)
})

numberButtons.onclick = function() {
    addNum(numberButton.textContent)
}

function addNum(number) {
    if (activeDisplay.textContent == 0 || shouldReset) resetScreen()
    activeDisplay.textContent += number
    console.log(activeDisplay)
}

function resetScreen() {
    activeDisplay.textContent = ''
    shouldReset = false
}


operatorButtons.onclick = function() { 
    addOperator(operatorButton.textContent)
}

function addOperator (operator) {
    if (currentOperation !== null) equals()
    firstNumber = activeDisplay.textContent
    currentOperation = operator.textContent
    storedDisplay.textContent = `${firstNumber} ${currentOperation}`
    shouldReset = true
}

dotButton.onclick = function() {
    addDot(dotButton.textContent)
}

function addDot() {
    if (activeDisplay.textContent === '') activeDisplay = '0'
    if (activeDisplay.textContent.includes('.'))return
    activeDisplay += '.'
}

function equals() {
    if (currentOperation == null || shouldReset) return
    shouldReset == true
    activeDisplay = `${firstNumber} ${thisNumber}`
    firstNumber = activeDisplay.textContent
    
}

function deleteNum() {
    activeDisplay.textContent = activeDisplay.textContent.slice[0]
}
function clear() { 
    if (activeDisplay !== '') resetScreen()
    if (activeDisplay == '') {
        storedDisplay = ''
        firstNumber = ''
        thisNumber = ''
    }
}
// const clear = function() {
//     activeDisplay = 0
//     console.log(activeDisplay)
// }

function keyboardInput (e) { 
    if (e.key >= 0 && e.key <= 9) addNum(e.key)
    if (e.key == '.') addDot()
    if (e.key == 'Backspace') deleteNum();
    if (e.key == 'Enter' || e.key == '=') equals()
    if (e.key == '+' || e.key == '*' || e.key == '/' || e.key == '-' ) addOperator(e.key)
}

function add(a,b) { 
    return a + b 
}
function minus(a,b) { 
    return a - b 
}
function multiply(a,b) { 
    return a * b
}
function divide(a,b) { 
    return a / b 
}







