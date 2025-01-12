#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    printf("Guess the number!\n");

    // Seed the random number generator
    srand(time(0));
    int secretNumber = rand() % 100 + 1; // Generate a number between 1 and 100

    while (1) {
        printf("Please input your guess: ");

        int guess;
        // Read user input and validate
        if (scanf("%d", &guess) != 1) {
            printf("Please enter a valid number.\n");
            // Clear invalid input from the buffer
            while (getchar() != '\n');
            continue;
        }

        printf("You guessed: %d\n", guess);

        // Compare the guess with the secret number
        if (guess < secretNumber) {
            printf("Too small!\n");
        } else if (guess > secretNumber) {
            printf("Too big!\n");
        } else {
            printf("You win!\n");
            break;
        }
    }

    return 0;
}
