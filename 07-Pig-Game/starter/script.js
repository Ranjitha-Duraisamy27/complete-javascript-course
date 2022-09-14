'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const holdBtn = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const messageEl = document.querySelector('.message');
const newGameBtn = document.querySelector('.btn--new');
let player0Score = 0;
let player1Score = 0;
let player = 0;
let currentScore = 0;

const initialize = () => {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    player = 0;
    currentScore = 0;
    player0Score = 0;
    player1Score = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    player0El.classList.add('player--active');
}

const newGame = () => {
    initialize();
    messageEl.classList.add('hidden');
}

newGame();

const checkWinner = () => {
    const message = (player0Score >= 10) ? '🥳 Player 1 won the game 🎉' : '🥳 Player 2 won the game 🎉';
    messageEl.textContent = message;
    messageEl.classList.remove('hidden');
    initialize();
}

const updateScore = () => {
    if(player === 0) {
        player0Score += currentScore;
        score0El.textContent = player0Score;
        currentScore0El.textContent = 0;
    } else {
        player1Score += currentScore;
        score1El.textContent = player1Score;
        currentScore1El.textContent = 0;
    }
    currentScore = 0;
    if (player0Score >= 10 || player1Score >= 10) {
        checkWinner();
    }
}

const updatCurrenteScore = () => {
    if(player === 0) {
        currentScore0El.textContent = currentScore;
    } else {
        currentScore1El.textContent = currentScore;
    }
}

const changePlayer = () => {
    currentScore = 0;
    player = player === 0 ? 1 : 0;
    if(player === 0) {
        player1El.classList.remove('player--active');
        player0El.classList.add('player--active');
        currentScore1El.textContent = 0;
    } else {
        player0El.classList.remove('player--active');
        player1El.classList.add('player--active');
        currentScore0El.textContent = 0;
    }
}

const rollDice = () => {
    const randomNumber = Math.trunc(Math.random() * 5) + 1;
    diceEl.setAttribute('src', `dice-${randomNumber}.png`);
    diceEl.classList.remove('hidden');
    if(randomNumber !== 1) {
        currentScore +=randomNumber;
        updatCurrenteScore();
    } else {
        changePlayer();
    }
}

rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', updateScore);
newGameBtn.addEventListener('click', newGame);
