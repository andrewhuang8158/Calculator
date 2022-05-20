let n1 = 4
let n2 = 2

const add = document.querySelector("#addButton")
const minus= document.querySelector("#minusButton")
const multiply = document.querySelector("#multiplyButton")
const divide = document.querySelector("#divideButton")
const operate = document.querySelector("#operateButton")

add.onclick = function() {
    let sum = n1+n2
    console.log (sum)
}

minus.onclick = function() {
    let difference = n1 - n2
    console.log(difference)
}

multiply.onclick = function() {
    let product = n1 * n2 
    console.log(product)
}

divide.onclick = function() {
    let quotient = n1/n2
    console.log (quotient) 
}

operate.addEventListener('click', () => {
    let arr = ["add", "minus", "multiply", "divide"]
    let random = arr[Math.floor(Math.random()*arr.length)]
    console.log(random)
    
})