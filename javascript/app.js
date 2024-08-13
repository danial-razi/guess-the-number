const readline = require('readline');

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Guess the number!");

const secretNumber = generateRandomNumber(1, 100);

function askGuess() {
  rl.question('Please input your guess: ', (input) => {
    const guess = parseInt(input.trim());

    if (isNaN(guess)) {
      console.log("Invalid input, please enter a number.");
      askGuess();
      return;
    }

    console.log(`You guessed: ${guess}`);

    if (guess < secretNumber) {
      console.log("Too small!");
      askGuess();
    } else if (guess > secretNumber) {
      console.log("Too big!");
      askGuess();
    } else {
      console.log("You win!");
      rl.close();
    }
  });
}

askGuess();