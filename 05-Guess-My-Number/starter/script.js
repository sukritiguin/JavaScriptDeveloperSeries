'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = parseInt(document.querySelector('.guess').value);
  let highscoreElement = document.querySelector('.highscore');

  document.querySelector('.number').textContent = guess;

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Input is not given...';
  } else if (guess > randomNumber) {
    score = score - 1;
    if (score > 0) {
      document.querySelector('.message').textContent =
        '📈 Higher number is chosen';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game.';
      randomNumber = Math.floor(Math.random() * 20) + 1;
      score = 20;
      document.querySelector('.score').textContent = 20;
      document.querySelector('.number').textContent = '?';
    }
  } else if (guess < randomNumber) {
    score = score - 1;
    if (score > 0) {
      document.querySelector('.message').textContent =
        '📉 Lower number is chosen';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game.';
      randomNumber = Math.floor(Math.random() * 20) + 1;
      score = 20;
      document.querySelector('.score').textContent = 20;
      document.querySelector('.number').textContent = '?';
    }
  } else {
    document.querySelector('.message').textContent =
      '🎉 You guessed it right!!!';

    document.querySelector('body').style.backgroundColor = 'green';

    // Check if current guess is greater than the current highscore
    if (parseInt(highscoreElement.textContent) < randomNumber) {
      highscoreElement.textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start gussing...';
  document.querySelector('body').style.backgroundColor = '#222';
});
