
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

const startField = document.querySelector('#start');
const endField = document.querySelector("#end");
const countField = document.querySelector('#count');
const startBtn = document.querySelector('#startBtn');

let guessCount = 1;
let resetButton;
let closeButton;
let randomNumber;

startBtn.addEventListener('click', startGame);

function startGame() {
  let start = Number(startField.value) || 1;
  let end = Number(endField.value) || 100;
  let count = Number(countField.value) || 10;
  const range = end - start + 1;
  randomNumber = Math.floor(Math.random() * range) + start;
  document.querySelector('#game').style.display = 'block';
  startField.disabled = true;
  endField.disabled = true;
  countField.disabled = true;
  console.log(randomNumber); //for test 
}

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = " guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lastResult.style.color = 'white';
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === (Number(countField.value) || 10)) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    lastResult.style.color = 'white';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Play Again";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  startField.disabled = false;
  endField.disabled = false;
  countField.disabled = false;

  lastResult.style.backgroundColor = "white";

  document.querySelector('#game').style.display = 'none';

  // randomNumber = Math.floor(Math.random() * 100) + 1;
}


