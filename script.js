const $computerChoiceDisplay = document.getElementById("computer-choice");
const $userChoiceDisplay = document.getElementById("user-choice");
const $resultDisplay = document.getElementById("result");

const $possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

$possibleChoices.forEach(choice => choice.addEventListener("click", (evt) => {
    userChoice = evt.target.id;
    $userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * $possibleChoices.length);
    switch(randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";
    }
    $computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw";
        $resultDisplay.innerHTML = result;
        return;
    }
    const userWinningPattern = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    }
    result = userWinningPattern[userChoice] === computerChoice ? "You won!" : "Computer won!";
    $resultDisplay.innerHTML = result;
}