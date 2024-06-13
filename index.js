

const startRangeField = document.querySelector('#start');
const endRangeField = document.querySelector('#end');
const countField = document.querySelector('#count');
const startBtn = document.querySelector('#startBtn');
const checkBtns = document.querySelectorAll('.checkBtn');
const guessField1 = document.querySelector('#guessField1');
const guessField2 = document.querySelector('#guessField2');
const check1 = document.querySelector('#check1');
const check2 = document.querySelector('#check2');
const results1 = document.querySelector('#results1');
const results2 = document.querySelector('#results2');
const personIcon = document.querySelector('#personIcon');
const robotIcon = document.querySelector('#robotIcon');
const hint1 = document.querySelector('#hint1');
const hint2 = document.querySelector('#hint2');
let randomNumber;
let turn;
let aa;
let bb;
let gg;
let counter = 0;


startBtn.addEventListener('click', () => {
  createRandomNumber();
  turn = setCounter();
  alert(randomNumber);
});

checkBtns[0].addEventListener('click', () => {
  let guess = +guessField1.value;
  results1.textContent += ` ${guess}`;
  if (guess === randomNumber) {
    document.querySelector('#player').style.backgroundColor = 'green';
    robotIcon.style.color = 'red';
    document.querySelector('#robot').style.borderColor = 'red';
    guessField1.disabled = true;
    guessField2.disabled = true;
    check1.disabled = true;
    check2.disabled = true;
    hint1.innerHTML = 'check';
  } else if (guess > randomNumber) {
    hint1.innerHTML = 'arrow_downward';
    guessField1.disabled = true;
    check1.disabled = true;
    guessField2.disabled = false;
    check2.disabled = false;
  } else {
    hint1.innerHTML = 'arrow_upward';
    guessField1.disabled = true;
    check1.disabled = true;
    guessField2.disabled = false;
    check2.disabled = false;
  }
});

checkBtns[1].addEventListener('click', () => {
  setTimeout(() => {
    counter++;
    if (counter == 1) {
      aa = +startRangeField.value;
      bb = +endRangeField.value;
      gg = Math.floor((aa + bb) / 2);
      guessField2.value = gg;
      // results2.textContent += ` ${gg}`;
      if (gg > randomNumber) {
        hint2.innerHTML = 'arrow_downward';
        guessField1.disabled = false;
        check1.disabled = false;
        guessField2.disabled = true;
        check2.disabled = true;
      }
      if (gg < randomNumber) {
        hint2.innerHTML = 'arrow_upward';
        guessField1.disabled = false;
        check1.disabled = false;
        guessField2.disabled = true;
        check2.disabled = true;
      }
      if (gg === randomNumber) {
        personIcon.style.color = 'red';
        robotIcon.style.color = 'green';
        document.querySelector('#robot').style.backgroundColor = 'green';
        guessField1.disabled = true;
        guessField2.disabled = true;
        check1.disabled = true;
        check2.disabled = true;
        hint2.innerHTML = 'check';
      }
    } else {
      if (gg > randomNumber) {
        bb = gg;
        gg = Math.floor((aa + bb) / 2);
        hint2.innerHTML = 'arrow_downward';
        guessField1.disabled = false;
        check1.disabled = false;
        guessField2.disabled = true;
        check2.disabled = true;
      }
      if (gg < randomNumber) {
        aa = gg;
        gg = Math.floor((aa + bb) / 2);
        hint1.innerHTML = 'arrow_upward';
        guessField1.disabled = false;
        check1.disabled = false;
        guessField2.disabled = true;
        check2.disabled = true;
      }
      if (gg === randomNumber) {
        personIcon.style.color = 'red';
        document.querySelector('#robot').style.backgroundColor = 'green';
        guessField1.disabled = true;
        guessField2.disabled = true;
        check1.disabled = true;
        check2.disabled = true;
        hint2.innerHTML = 'check';
      }
    }
    guessField2.value = gg;
    results2.textContent += ` ${gg}`;
    countField.value -= 1;
  }, 1000);
});

function showPlayBox() {
  document.querySelector('#playBox').style.visibility = 'visible';
  document.querySelector('#playBox').style.opacity = 1;
}

function setCounter() {
  let n = 0;
  let x = +startRangeField.value;
  let y = +endRangeField.value;
  let l = y - x;
  while (2 ** n < l) {
    n++;
  }
  countField.value = n;
  return n;
}

function createRandomNumber() {
  let x = +startRangeField.value;
  let y = +endRangeField.value;
  if (x > y || x < 0 || y < 0) {
    alert('Select a valid interval');
  } else if (Math.abs(x - y) < 99) {
    alert('The length of interval is smaller than 100');
  } else {
    randomNumber = Math.floor(Math.random() * (y - x + 1)) + x;
    showPlayBox();
  }
}


