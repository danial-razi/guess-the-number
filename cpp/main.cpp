#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    std::cout << "Guess the number!" << std::endl;

    // Seed the random number generator
    std::srand(std::time(0));
    int secretNumber = std::rand() % 100 + 1; // Generate a number between 1 and 100

    while (true) {
        std::cout << "Please input your guess: ";

        // Get user input
        int guess;
        if (!(std::cin >> guess)) {
            std::cin.clear(); // Clear invalid input flag
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Discard invalid input
            std::cout << "Please enter a valid number." << std::endl;
            continue;
        }

        std::cout << "You guessed: " << guess << std::endl;

        // Compare the guess with the secret number
        if (guess < secretNumber) {
            std::cout << "Too small!" << std::endl;
        } else if (guess > secretNumber) {
            std::cout << "Too big!" << std::endl;
        } else {
            std::cout << "You win!" << std::endl;
            break;
        }
    }

    return 0;
}
