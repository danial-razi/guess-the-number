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

            // Read input from the user
            string input = Console.ReadLine();

            // Try to parse the input to an integer
            if (int.TryParse(input, out int guess))
            {
                Console.WriteLine($"You guessed: {guess}");

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
                // If the input is not a valid number, continue the loop
                Console.WriteLine("Invalid input, please enter a number.");
            }
        }
    }
}
