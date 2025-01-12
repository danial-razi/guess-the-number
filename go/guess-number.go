package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	fmt.Println("Guess the number!")

	// Seed the random number generator
	rand.Seed(time.Now().UnixNano())
	secretNumber := rand.Intn(100) + 1 // Generate a number between 1 and 100

	reader := bufio.NewReader(os.Stdin)

	for {
		fmt.Print("Please input your guess: ")

		// Read input from the user
		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println("Failed to read input, please try again.")
			continue
		}

		// Trim newline and whitespace characters
		input = strings.TrimSpace(input)

		// Convert the input string to an integer
		guess, err := strconv.Atoi(input)
		if err != nil {
			fmt.Println("Invalid input, please enter a number.")
			continue
		}

		// Print the user's guess
		fmt.Printf("You guessed: %d\n", guess)

		// Compare the guess to the secret number
		if guess < secretNumber {
			fmt.Println("Too small!")
		} else if guess > secretNumber {
			fmt.Println("Too big!")
		} else {
			fmt.Println("You win!")
			break
		}
	}
}
