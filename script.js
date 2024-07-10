const player1ScoreElement = document.getElementById("ply1");
const player2ScoreElement = document.getElementById("ply2");
const winnerElement = document.getElementById("win");
const playButton = document.getElementById("btn");

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  // Adding the rolling class to both dice
  player1ScoreElement.classList.add("rolling");
  player2ScoreElement.classList.add("rolling");

  // Waiting for the animation to end before setting the new dice images
  setTimeout(() => {
    const player1Score = generateRandomNumber();
    const player2Score = generateRandomNumber();

    player1ScoreElement.src = `images/dice${player1Score}.png`;
    player2ScoreElement.src = `images/dice${player2Score}.png`;

    // Removing the rolling class after the animation ends
    player1ScoreElement.classList.remove("rolling");
    player2ScoreElement.classList.remove("rolling");

    if (player1Score > player2Score) {
      winnerElement.innerText = "Player 1 is the winner!";
    } else if (player2Score > player1Score) {
      winnerElement.innerText = "Player 2 is the winner!";
    } else {
      winnerElement.innerText = "It's a tie!";
    }
  }, 300);
}
playButton.addEventListener("click", playGame); // adidding click eventlistner
