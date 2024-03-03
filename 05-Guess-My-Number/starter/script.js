'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const displayMessage = (selector, message) => {
  document.querySelector(selector).textContent = message;
};

const changeBackgroundColor = (selector, color) => {
  document.querySelector(selector).style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = parseInt(document.querySelector('.guess').value);
  let highscoreElement = document.querySelector('.highscore');

  displayMessage('.number', guess);

  if (!guess) {
    displayMessage('.message', '⛔ Input is not given...');
  } else if (guess != randomNumber) {
    score = score - 1;
    displayMessage('.score', score);
    if (score > 0) {
      displayMessage(
        '.message',
        guess < randomNumber
          ? '📉 Lower number is chosen'
          : '📈 Higher number is chosen'
      );
    } else {
      changeBackgroundColor('body', 'red');
      displayMessage('.message', '😭 You lost the game. Click Again');
    }
  } else {
    displayMessage('.message', '🎉 You guessed it right!!!');

    changeBackgroundColor('body', 'green');

    // Check if current guess is greater than the current highscore
    if (parseInt(highscoreElement.textContent) < randomNumber) {
      highscoreElement.textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayMessage('.score', 20);
  displayMessage('.number', '?');
  displayMessage('.message', 'Start gussing...');
  changeBackgroundColor('body', '#222');
});
