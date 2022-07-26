const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerhoice();
    generataResult();
  });
});

function generateComputerhoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function generataResult() {
  if (computerChoice === userChoice) {
    result = "it's a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Win";
  }

  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Computer Win";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You Win";
  }

  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You Win";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Computer Win";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Computer Win";
  }
  resultDisplay.innerHTML = result;
}
