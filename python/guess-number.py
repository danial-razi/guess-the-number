import random

def main():
    print("Guess the number!")

    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 100)

    while True:
        try:
            # Get the user's guess
            guess = int(input("Please input your guess: "))
        except ValueError:
            print("Please enter a valid number.")
            continue

        print(f"You guessed: {guess}")

        # Compare the guess with the secret number
        if guess < secret_number:
            print("Too small!")
        elif guess > secret_number:
            print("Too big!")
        else:
            print("You win!")
            break

if __name__ == "__main__":
    main()
