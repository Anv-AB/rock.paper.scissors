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

// Score Initialiser
let computerScore = 0;
let humanScore = 0;
let round = 0;


// Single Round Logic
let playRound = (playRoundHuman, playRoundComputer) => {
  const outcome = `${playRoundHuman}-${playRoundComputer}`
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

// Document Query Selectors
let selection = document.querySelector("#selection");
let human = document.querySelector("#human");
let computer = document.querySelector("#computer");
let result = document.querySelector("#result");
let humanScoreKeeper = document.querySelector("#humanScoreKeeper");
let computerScoreKeeper = document.querySelector("#computerScoreKeeper");
let finalResult = document.querySelector("#finalResult")


// Event listener for buttons
selection.addEventListener("click", function handleClick(e) {
  if (e.target.tagName === "BUTTON") {
    const humanSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection.toLowerCase(), computerSelection.toLowerCase());

    human.textContent = `You have selected: ${humanSelection}`
    computer.textContent = `The computer has selected: ${computerSelection}`
    result.textContent = `Round ${++round}: ${roundResult}`
    humanScoreKeeper.textContent = `Your score: ${humanScore}`
    computerScoreKeeper.textContent = `Opponent score: ${computerScore}`

    if (round === 5) {
      const finalMessage =
        humanScore > computerScore
        ? "Congratulations, you won!"
        : computerScore > humanScore
        ? "Unfortunately, you've lost!!!"
        : "It's a draw!!!";

      finalResult.textContent += `Final Result: ${finalMessage}`;
      selection.removeEventListener("click", handleClick);
    }
  }
}
);