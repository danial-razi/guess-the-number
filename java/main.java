import java.util.Scanner;
import java.util.Random;

public class GuessTheNumber {
    public static void main(String[] args) {
        System.out.println("Guess the number!");

        Random random = new Random();
        int secretNumber = random.nextInt(100) + 1; 

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Please input your guess:");

            String input = scanner.nextLine();

            int guess;
            try {
                guess = Integer.parseInt(input); 
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a number.");
                continue;
            }

            System.out.println("You guessed: " + guess);

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
