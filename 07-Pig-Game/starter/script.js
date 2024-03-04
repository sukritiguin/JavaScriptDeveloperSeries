'use strict';

// Selecting elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');

const btnNewElement = document.querySelector('.btn--new');
const btnHoldElement = document.querySelector('.btn--hold');
const btnRollElement = document.querySelector('.btn--roll');

// Inital Condition
let isPlaying = true;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0]; // 0th : For player0 and 1st: For player1

// Switch Player Conditions

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;

  currentScore = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRollElement.addEventListener('click', () => {
  if (!isPlaying) return;
  const diceRandomNumber = Math.trunc(Math.random() * 6) + 1;

  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceRandomNumber}.png`;

  if (diceRandomNumber !== 1) {
    currentScore += diceRandomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHoldElement.addEventListener('click', () => {
  if (!isPlaying) return;
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    score0Element.textContent = 0;
    score1Element.textContent = 0;
  } else {
    switchPlayer();
  }
});

btnNewElement.addEventListener('click', () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  currentScore = 0;
  activePlayer = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  scores = [0, 0];
  isPlaying = true;
});
