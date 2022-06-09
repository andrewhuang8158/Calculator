
let firstNumber = ''
let thisNumber = ''
let shouldReset = false
let currentOperation = null

const addButton = document.querySelector("#addButton")
const minusButton = document.querySelector("#minusButton")
const multiplyButton = document.querySelector("#multiplyButton")
const divideButton = document.querySelector("#divideButton")
const dotButton = document.querySelector("#dotButton")
const equalsButton = document.querySelector("#equalsButton")
const clearButton = document.querySelector("#clearButton")
const deleteButton = document.querySelector("#deleteButton")

const numberButtons = document.querySelectorAll('.numberButton')
const operatorButtons = document.querySelectorAll('.operatorButton')
window.addEventListener("keydown", keyboardInput)



numberButtons.forEach((button) =>
  button.addEventListener('click', () => addNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => addOperator(button.textContent))
)

equalsButton.onclick = function() {
    equals()
}

dotButton.onclick = function() {
    addDot()
}

clearButton.onclick = function() {
    clear()
}

deleteButton.onclick = function() { 
    deleteNum()
}

function resetDisplay() {
    thisDisplay.textContent = ''
    shouldReset = false
}

function addNumber(number) {
    if (thisDisplay.textContent === '0' || shouldReset) resetDisplay()
    thisDisplay.textContent += number
}

function addDot() {
    if (thisDisplay.textContent == '' || shouldReset) thisDisplay.textContent = '0'
    if (thisDisplay.textContent.includes('.'))return
    thisDisplay.textContent += '.'
    shouldReset = false
}

function addOperator (operator) {
    if (currentOperation !== null) equals()
    firstNumber = thisDisplay.textContent
    storedDisplay.textContent = `${firstNumber} ${operator}`

    currentOperation = operator
    shouldReset = true
}

function deleteNum() {
    thisDisplay.textContent = thisDisplay.textContent.slice(0,-1)
    if (thisDisplay.textContent.length == 0) {
        thisDisplay.textContent = '0'
    }
}

function equals() {
    if (currentOperation === null || shouldReset) return
    if (currentOperation === '/' && thisDisplay.textContent === '0') {
        alert ("You can't divide by 0!")
        return
    }
    
    thisNumber = thisDisplay.textContent
    thisDisplay.textContent = roundResult(
        evaluate(currentOperation, firstNumber, thisNumber)
    )
    storedDisplay.textContent = `${firstNumber} ${currentOperation} ${thisNumber} =`
    
    currentOperation = null
    shouldReset = true
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function evaluate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operator){
        case '+': return add(a,b)
        case '-': return minus(a,b)
        case '*': return multiply(a,b)
        case '/': 
            if(b ===0) {
                return null
            }
            return divide(a,b)
        default : return null
    }
    }

function clear() { 
    if (thisDisplay.textContent !== '0') {
        resetDisplay()
        thisDisplay.textContent = '0'

    } else {
        thisDisplay.textContent = '0'
        storedDisplay.textContent = ''
        firstNumber = ''
        thisNumber = ''
        currentOperation = null
    }
}

function keyboardInput (e) { 
    if (e.key >= 0 && e.key <= 9) addNumber(e.key)
    if (e.key === '.') addDot()
    if (e.key === 'Backspace' || e.key === 'Delete') deleteNum()
    if (e.key === 'Enter' || e.key === '=') equals()
    if (e.key === 'Escape' || e.key === 'Esc') clear()
    if (e.key === '+' || e.key === '*' || e.key === '/' || e.key === '-' ) 
        addOperator(e.key)
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







