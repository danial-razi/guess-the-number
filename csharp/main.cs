using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Guess the number!");

        // Generate a random number between 1 and 100
        Random random = new Random();
        int secretNumber = random.Next(1, 101);

        while (true)
        {
            Console.Write("Please input your guess: ");

            // Read user input
            string input = Console.ReadLine();

            // Validate and parse the input
            if (!int.TryParse(input, out int guess))
            {
                Console.WriteLine("Please enter a valid number.");
                continue;
            }

            Console.WriteLine($"You guessed: {guess}");

            // Compare the guess with the secret number
            if (guess < secretNumber)
            {
                Console.WriteLine("Too small!");
            }
            else if (guess > secretNumber)
            {
                Console.WriteLine("Too big!");
            }
            else
            {
                Console.WriteLine("You win!");
                break;
            }
        }
    }
}
