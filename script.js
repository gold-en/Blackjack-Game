let messageEl = document.querySelector('.message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
console.log(messageEl);

let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

function startGame() {
  cardsEl.textContent = 'Cards: ' + firstCard + ' ' + secondCard;
  sumEl.textContent = 'Sum: ' + sum;

  if (sum <= 21) {
    message = 'Do you want to draw a new card? ';
  }
  if (sum === 21) {
    message = "You've got Blackjack ";
    hasBlackJack = true;
  } else {
    message = "you're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 7;

  sum += card;

  startGame();
}
