import random

def main():
    print("حدس بزنید که عدد چیه!")

    secret_number = random.randint(1, 100)  

    while True:
        guess = input("لطفاً حدس خود را وارد کنید: ")

        try:
            guess = int(guess)  
        except ValueError:
            print("لطفاً یک عدد معتبر وارد کنید!")
            continue

        print(f"شما حدس زدید: {guess}")

        if guess < secret_number:
            print("عدد شما کمتر است!")
        elif guess > secret_number:
            print("عدد شما بیشتر است!")
        else:
            print("تبریک! شما برنده شدید!")
            break

if __name__ == "__main__":
    main()
