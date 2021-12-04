let num1 = 10
let num2 = 5

document.getElementById('num1-el').innerText = num1

document.getElementById('num2-el').innerText = num2
 
let num3 = document.getElementById('num3-el')



function multiply() {

  let result = num1 * num2
  num3.innerText = 'Total:' + result
  
}
function divide() {
 
  let result = num1 / num2
  num3.innerText = 'Total:' + result
}
function subtract() {
 
  let result = num1 - num2
  num3.innerText = 'Total:' + result
}
function add() {
 
  let result = num1 + num2
  num3.innerText = 'Total:' + result
}


