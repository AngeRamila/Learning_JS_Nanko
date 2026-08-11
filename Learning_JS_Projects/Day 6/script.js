// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const remainingDisplay = document.getElementById("remaining");
const restartButton = document.getElementById("restartButton");

// Game variables
let secretNumber;
let attempts;
let remaining;
let gameOver;


// Start a new game
function startGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    remaining = 10;

    gameOver = false;

    guessInput.value = "";

    guessInput.disabled = false;

    guessButton.disabled = false;

    attemptsDisplay.textContent = attempts;

    remainingDisplay.textContent = remaining;

    message.textContent = "Enter a number to start!";

    message.className = "";

}


// Check the player's guess
function checkGuess() {

    const guess = Number(guessInput.value);


    // Check if input is valid
    if (guess < 1 || guess > 100 || !guess) {

        message.textContent =
            "⚠️ Please enter a number between 1 and 100.";

        message.className = "warning";

        return;
    }


    // Check if game is already finished
    if (gameOver) {

        message.textContent =
            "The game is over. Start a new game!";

        return;
    }


    attempts++;

    remaining--;

    attemptsDisplay.textContent = attempts;

    remainingDisplay.textContent = remaining;


    // Correct answer
    if (guess === secretNumber) {

        message.textContent =
            `🎉 Congratulations! You guessed ${secretNumber} correctly!`;

        message.className = "success";

        gameOver = true;

        guessInput.disabled = true;

        guessButton.disabled = true;

    }


    // Guess is too low
    else if (guess < secretNumber) {

        message.textContent =
            "📉 Too low! Try a higher number.";

        message.className = "error";

    }


    // Guess is too high
    else {

        message.textContent =
            "📈 Too high! Try a lower number.";

        message.className = "error";

    }


    // No attempts remaining
    if (remaining === 0 && guess !== secretNumber) {

        message.textContent =
            `😢 Game over! The number was ${secretNumber}.`;

        message.className = "error";

        gameOver = true;

        guessInput.disabled = true;

        guessButton.disabled = true;

    }

}


// Button click
guessButton.addEventListener("click", checkGuess);


// Press Enter to guess
guessInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkGuess();

    }

});


// Restart game
restartButton.addEventListener("click", startGame);


// Start the game when page loads
startGame();