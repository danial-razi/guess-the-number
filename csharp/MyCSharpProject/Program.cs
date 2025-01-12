// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Guess the number!");

        // Generate a random number between 1 and 100 (inclusive)
        Random random = new Random();
        int secretNumber = random.Next(1, 101);

        while (true)
        {
            Console.WriteLine("Please input your guess.");

            // Read user input
            string input = Console.ReadLine();

            // Try to parse the input into an integer
            if (int.TryParse(input, out int guess))
            {
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
            else
            {
                Console.WriteLine("Invalid input. Please enter a number.");
            }
        }
    }
}

