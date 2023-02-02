'use strict';

const messageEl = document.querySelector('.message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');
const nameInput = document.querySelector('.name');

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let playerName = '';
const SCORE = 200;
let playerScore = 200;
let player = {
  name: '',
  chips: playerScore,
};

function register(event) {
  event.preventDefault();

  if (nameInput.value.length) {
    document.querySelector('.register-wrapper').style.display = 'none';

    playerName = nameInput.value;

    displayPlayersName(playerName, playerScore);
  }
}

function displayPlayersName(name, score) {
  player.name = name;
  player.chips = score;
  playerEl.textContent = player.name + ': $' + player.chips;
}

function getRandomCard() {
  let randomNo = Math.floor(Math.random() * 13) + 1;

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
  player.chips = SCORE;
  playerName = player.name;
  playerScore = player.chips;
  renderGame();
}

const renderGame = function () {
  if (sum <= 21) {
    message = 'Do you want to draw a new card? ';
    playerScore -= 20;
    displayPlayersName(playerName, playerScore);
  }
  if (sum === 21) {
    message = "You've got Blackjack!💥 ";
    hasBlackJack = true;
    playerScore += 1000;
    displayPlayersName(playerName, playerScore);
  }
  if (sum >= 22) {
    message = "you're out of the game! 😢";
    isAlive = false;
    playerScore = 0;
    displayPlayersName(playerName, playerScore);
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
    renderGame();
  }
}
