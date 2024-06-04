let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessBtn.disabled = true;
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    guessInput.value = '';
    guessBtn.disabled = false;
}

guessBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);
