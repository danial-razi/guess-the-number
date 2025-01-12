import java.util.Scanner;
import java.util.Random;

public class GuessTheNumber {
    public static void main(String[] args) {
        System.out.println("Guess the number!");

        // Generate a random number between 1 and 100
        Random random = new Random();
        int secretNumber = random.nextInt(100) + 1;

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Please input your guess: ");

            // Validate user input
            if (!scanner.hasNextInt()) {
                System.out.println("Please enter a valid number.");
                scanner.next(); // Consume the invalid input
                continue;
            }

            int guess = scanner.nextInt();

            System.out.println("You guessed: " + guess);

            // Compare the guess with the secret number
            if (guess < secretNumber) {
                System.out.println("Too small!");
            } else if (guess > secretNumber) {
                System.out.println("Too big!");
            } else {
                System.out.println("You win!");
                break;
            }
        }

        scanner.close();
    }
}
