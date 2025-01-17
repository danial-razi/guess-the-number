// تولید عدد تصادفی بین 1 و 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

console.log("Guess the number!");

process.stdout.write("Please input your guess: ");

process.stdin.on("data", (input) => {
  const guess = parseInt(input.toString().trim(), 10);

  if (isNaN(guess)) {
    console.log("Please enter a valid number!");
    process.stdout.write("Please input your guess: ");
  } else {
    console.log(`You guessed: ${guess}`);

    if (guess < secretNumber) {
      console.log("Too small!");
      process.stdout.write("Please input your guess: ");
    } else if (guess > secretNumber) {
      console.log("Too big!");
      process.stdout.write("Please input your guess: ");
    } else {
      console.log("You win!");
      process.exit();
    }
  }
});
