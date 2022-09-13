'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const highScoreEl = document.querySelector('.highscore');
const inputNumber = document.querySelector('.guess');
const bodyEl = document.querySelector('body');
const scoreEl = document.querySelector('.score');
let score, actualNumber;
let highScore = 0;

const initialize = () => {
    score = 20;
    actualNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start Guessing..';
    number.textContent = '?';
    inputNumber.value = '';
    bodyEl.style.backgroundColor = '#222';
    scoreEl.textContent = score;
}
initialize();

const updateScore = () => {
    score--;
    scoreEl.textContent = score;
}

const displayMessage = (message) => {
    message.textContent = message;
}

const displayNumber = () => {
    number.textContent = actualNumber;
    bodyEl.style.backgroundColor = 'green';
    if (highScore < score) {
        highScoreEl.textContent = score;
        highScore = score;
    }
}

const validateNumber = (number) => {
    if (number === actualNumber) {
        displayMessage('✅ Correct!')
        displayNumber();
    } else {
        const message = number > actualNumber ? '📈 Too high' : '📉 Too low';
        displayMessage(message);
        updateScore();
    }
}

document.querySelector('.check').addEventListener('click', () => {
    const enteredNumber = +inputNumber.value;
    if (!enteredNumber) {
        displayMessage('❌ No Number');
    } else {
        if (score > 1) {
            validateNumber(enteredNumber);
        } else if (score) {
            displayMessage('😞 You lost the game, try again')
            updateScore();
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    initialize();
})
