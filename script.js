'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
};
const dispalyScore = function (score) {
    document.querySelector('.score').textContent = score;
};
const displayHighscore = function (highscore) {
    document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        displayMessage('⛔ No Number!');

        // when player wins
    } else if (guess === secretNumber) {
        displayNumber(secretNumber);
        displayMessage('🎉 Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            displayHighscore(highscore);
        }

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'
            );
            score--;
            dispalyScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            dispalyScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayNumber('?');
    displayMessage('Start guessing...');
    dispalyScore(score);
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});
