// Computer Choice
let getComputerChoice = () => {
  let randomiser = Math.random();
  if (randomiser <= 0.3) {
    return "Rock";
  } else if (randomiser <= 0.6) {
    return "Paper";
  } else {
    return "Scissors"
  }
};

// Human Choice
let getHumanChoice = () => {
  let humanPrompt = prompt("Rock, Paper or Scissors?")
  return humanPrompt
}


// Playing the game
let playGame = () => {

  // Score Initialisation
  let computerScore = 0;
  let humanScore = 0;
  
  for (let i = 0; i < 5; i++) {

    // Playing a round
    let playRound = (playRoundHuman, playRoundComputer) => {
      const outcome = `${humanSelection}-${computerSelection}`
      switch (outcome) {
        case "rock-scissors":
          ++humanScore
          return "You win! Rock beats Scissors.";
        case "paper-rock":
          ++humanScore
          return "You win! Paper beats Rock."
        case "scissors-paper":
          ++humanScore
          return "You win! Scissors beats Paper."
        case "scissors-rock":
          ++computerScore
          return "You lose! Rock beats Scissors.";
        case "rock-paper":
          ++computerScore
          return "You lose! Paper beats Rock."
        case "paper-scissors":
          ++computerScore
          return "You lose! Scissors beats Paper."
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
          return "It's a tie!";
        default:
          return "Invalid input! Please select Rock, Paper or Scissors!";
      }
    }

    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    console.log(`You have selected: ${humanSelection}`);
    console.log(`The computer has selected: ${computerSelection}`);
    console.log(playRound(humanSelection, computerSelection))
    console.log(humanScore)
    console.log(computerScore)
  }

return `Game Over! Final Scores - You: ${humanScore}, Computer: ${computerScore}`;

}
console.log(playGame())