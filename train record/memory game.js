let countEl = document.getElementById('count-el')
let welcomeEl = document.getElementById('welcome-el')
let prevEntry= document.getElementById('entry')
let count = 0
function increment() {
    count += 1
    countEl.innerText=count
    
}

function save() {
    let saveBtn= count + ' - '
    prevEntry.innerText += saveBtn
    count = 0
    countEl.innerText = 0
    
    
}


let name = 'TImBa group page '
let greeting = 'You are welcome to this exquisite site'

welcomeEl.innerText = name + greeting
console.log(welcomeEl.innerText)