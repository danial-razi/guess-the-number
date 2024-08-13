import random

def main():
    print("Guess the number!")

    # Generate a random number between 1 and 100 (inclusive)
    secret_number = random.randint(1, 100)

    while True:
        # Prompt the user to input their guess
        guess = input("Please input your guess: ")

        # Try to convert the input to an integer
        try:
            guess = int(guess)
        except ValueError:
            # If input is not a valid number, continue the loop
            print("Invalid input, please enter a number.")
            continue

        print(f"You guessed: {guess}")

        if guess < secret_number:
            print("Too small!")
        elif guess > secret_number:
            print("Too big!")
        else:
            print("You win!")
            break

if __name__ == "__main__":
    main()
