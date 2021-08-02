let playerScore = 0;
let computerScore = 0;

// Plays rock paper scissors until the player or computer reaches 5 points
function game() {
    while (playerScore < 5 && computerScore < 5) {
        const player = promptPlayer();
        const computer = computerPlay();
        const msg = playRound(player, computer);
        console.log(msg);
    }
    const finalScores = playerScore + "-" + computerScore;
    if (playerScore < computerScore) {
        console.log("The computer wins! " + finalScores);
    } else {
        console.log("You win! " + finalScores);
    }
}


// plays a round of rock paper scissors with the given player and computer selections
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "It's a tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
      ++playerScore;
      return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
      ++computerScore;
      return "You lose. " + computerSelection + " beats " + playerSelection;
  }
}

// makes the computer's play by randomly picking rock, paper, or scissors
function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

// prompts the player to select rock, paper, or scissors. Has them choose again if they didn't pick one of the options
function promptPlayer() {
    const choice = prompt("Rock, paper, or scissors?");

    if (!(["rock", "paper", "scissors"].includes(choice.toLowerCase()))) {
        alert(choice + " is not a valid option, try again");
        promptPlayer();
        return;
    }

    return choice;
}
