'use strict';

// DOM and DOM manipulation
/* 
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

function getRandInt() {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  return randomNumber;
}

const bodyColor = document.body;
const checkButton = document.querySelector('.btn.check');
const message = document.querySelector('.message');
const again = document.querySelector('.btn.again');
const number = document.querySelector('.number');
let randomNumber = getRandInt();
let scoreCounter = Number(document.querySelector('.score').textContent);
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let highScoreNumber = Number(document.querySelector('.highscore').textContent);

again.disabled = true;

// add eventlistener on click on the button
document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Math.floor(Number(document.querySelector('.guess').value));
  // Check if the number is invalid or not within the range
  if (!guess) {
    message.textContent = '🤢 No Number!';
    return;
  } else if (guess > 21 || guess < 0) {
    message.textContent = '🤦‍♀️ Number not between 1 and 20';
    return;
  }
  // Check if the number is correct
  if (guess === randomNumber) {
    message.textContent = '🦾 You WON!';
    bodyColor.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    checkButton.disabled = true;
    again.disabled = false;
    number.textContent = randomNumber;
    if (scoreCounter > highScoreNumber) {
      highScoreNumber = scoreCounter;
      highScore.textContent = highScoreNumber;
    }
  } else if (guess !== randomNumber) {
    if (scoreCounter === 1) {
      message.textContent = 'you lost. again?';
      checkButton.disabled = true;
      again.disabled = false;
      bodyColor.style.backgroundColor = 'red';
      scoreCounter--;
      score.textContent = scoreCounter;
      return;
    }
    scoreCounter--;
    score.textContent = scoreCounter;
    message.textContent = guess > randomNumber ? '🐒 Too high!' : '🐒 Too low';
  }
});

document.querySelector('.btn.again').addEventListener('click', function () {
  bodyColor.style.backgroundColor = '#222';
  scoreCounter = 20;
  checkButton.disabled = false;
  randomNumber = getRandInt();
  message.textContent = 'Guess My Number!';
  number.textContent = '?';
  score.textContent = scoreCounter;
  again.disabled = true;
  number.style.width = '15rem';
});

const newFeature = function () {
  console.log('welcome to the app!');
};
