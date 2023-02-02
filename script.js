'use strict';

const messageEl = document.querySelector('.message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');

console.log(playerEl);
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

let player = {
  name: 'per',
  chips: 100,
};

playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
  let randomNo = Math.floor(Math.random() * 13) + 1;
  console.log(randomNo);
  // if 1(ACE = 1 0R 11)          - return 11
  if (randomNo === 1) return 11;

  // if 11-13 (JACK, QUEEN, KING) - return 10
  if (randomNo >= 11 && randomNo <= 13) return 10;

  return randomNo;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

const renderGame = function () {
  if (sum <= 21) {
    message = 'Do you want to draw a new card? ';
  }
  if (sum === 21) {
    console.log(sum);
    message = "You've got Blackjack!💥 ";
    hasBlackJack = true;
  }
  if (sum >= 22) {
    message = "you're out of the game! 😢";
    isAlive = false;
  }

  messageEl.textContent = message;

  cardsEl.textContent = 'Cards: ';

  for (let i of cards) {
    cardsEl.textContent += i + ' ';
  }

  sumEl.textContent = 'Sum: ' + sum;
};

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
