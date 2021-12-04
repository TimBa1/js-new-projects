
let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.querySelector('#card-el')
let player = {
    Name :"timi",
    Chip : '150'
}
let playerEl = document.getElementById('player-el')



function startGame() {
    let firstCard = getRandomCards()
    let lastCard = getRandomCards()
    isAlive = true
    cards = [firstCard, lastCard]
    sum = firstCard + lastCard 
    renderGame()
}

function getRandomCards() {
    
    let randomNumber = Math.floor(Math.random() * 12) + 1
    if (randomNumber > 10) { return 10 }
    else if (randomNumber === 1) { return 11 }
    else {
        return randomNumber
    }
}

function renderGame() {
    
    cardEl.innerText = "Cards:  "
    for (let i = 0; i < cards.length; i++) {
        cardEl.innerText += cards[i] + ","
    }
    
    sumEl.innerText= "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        if (hasBlackJack === true) { return playerEl.innerText = player.Name + ':' + '$' + player.Chip }
        else{ return playerEl.innerText="timi:0"}
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.innerText = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCards()
        sum += card
        cards.push(card)
        renderGame()
    }
}