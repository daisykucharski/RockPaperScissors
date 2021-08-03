let playerScore = 0;
let computerScore = 0;

document.querySelector("div.rock-image.button").addEventListener("click", () => {
    game("rock");
});

document.querySelector("div.paper-image.button").addEventListener("click", () => {
    game("paper");
});

document.querySelector("div.scissors-image.button").addEventListener("click", () => {
    game("scissors");
});


// Plays the game using the given player selection. If a game has already been won, it resets the scores. Notifies after
// the round is played if a user won
function game(player) {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
    }

    playRound(player);

    if (playerScore === 5) {
        document.querySelectorAll("h2")[1].innerText = "You win! Pick rock, paper, or scissors to play again"
    }

    if (computerScore === 5) {
        document.querySelectorAll("h2")[1].innerText = "The computer wins! Pick rock, paper, or scissors to play again"
    }
}

// plays a round of rock paper scissors with the given player selection and a random computer selection
function playRound(playerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerPlay();

  // Removes previous images from player and computer images and adds the correct images
  const playerImage = document.querySelectorAll(".result div")[0];
  playerImage.classList.remove(...playerImage.classList);
  playerImage.classList.add(player + "-image");

  const computerImage = document.querySelectorAll(".result div")[1];
  computerImage.classList.remove(...computerImage.classList);
  computerImage.classList.add(computer + "-image");

  let msg = "";
  if (player === computer) {
    msg = "It's a tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    ++playerScore;
    msg = "You win this round. " + player.substring(0,1).toUpperCase() + player.substring(1) + " beats " + computer;
  } else {
    ++computerScore;
    msg = "You lose this round. " + computer.substring(0,1).toUpperCase() + computer.substring(1) + " beats " + player;
  }

  document.querySelectorAll("h2")[2].innerText = "Score: Player " + playerScore + " - Computer " + computerScore;
  document.querySelectorAll("h2")[1].innerText = msg;
}


// makes the computer's play by randomly picking rock, paper, or scissors
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

