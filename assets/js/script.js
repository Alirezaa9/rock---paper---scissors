// ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerDisplay.textContent = "PLAYER: " + playerChoice;
    computerDisplay.textContent = "COMPUTER: " + computerChoice;

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        resultDisplay.textContent = "You win!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultDisplay.textContent = "Computer wins!";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}
