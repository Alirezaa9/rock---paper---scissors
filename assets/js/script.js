//ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay")

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
        resultDisplay.textContent = "Player wins!";
    } else {
        resultDisplay.textContent = "Computer wins!";
    }
    console.log()

}


