program GuessTheNumber
    implicit none
    integer :: secretNumber, guess
    logical :: validInput
    call random_seed()

    ! Generate a random number between 1 and 100
    call random_number(secretNumber)
    secretNumber = int(secretNumber * 100) + 1

    print *, "Guess the number!"

    do
        print *, "Please input your guess:"

        ! Read user input
        read(*, *, iostat=validInput) guess

        if (validInput /= 0) then
            print *, "Please enter a valid number."
            cycle
        endif

        print *, "You guessed:", guess

        ! Compare the guess with the secret number
        if (guess < secretNumber) then
            print *, "Too small!"
        elseif (guess > secretNumber) then
            print *, "Too big!"
        else
            print *, "You win!"
            exit
        endif
    end do
end program GuessTheNumber
