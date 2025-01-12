import kotlin.random.Random

fun main() {
    println("Guess the number!")

    // Generate a random number between 1 and 100
    val secretNumber = Random.nextInt(1, 101)

    while (true) {
        println("Please input your guess:")

        // Read user input
        val input = readLine()

        // Validate and parse the input
        val guess = input?.toIntOrNull()
        if (guess == null) {
            println("Please enter a valid number.")
            continue
        }

        println("You guessed: $guess")

        // Compare the guess with the secret number
        when {
            guess < secretNumber -> println("Too small!")
            guess > secretNumber -> println("Too big!")
            else -> {
                println("You win!")
                break
            }
        }
    }
}
