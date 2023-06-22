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
        case 2:
            computerChoice = "scissors";
            break;
        case 3:
            computerChoice = "lizard";
            break;
        case 4:
            computerChoice = "spock";
    }
    $computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw";
        $resultDisplay.innerHTML = result;
        return;
    }

    let userIsWinner = false;
    switch(userChoice) {
        case "rock":
            if (computerChoice === "scissors" || computerChoice === "lizard") userIsWinner = true;
            break;
        case "paper":
            if (computerChoice === "rock" || computerChoice === "spock") userIsWinner = true;
            break;
        case "scissors":
            if (computerChoice === "paper" || computerChoice === "lizard") userIsWinner = true;
            break;
        case "lizard":
            if (computerChoice === "spock" || computerChoice === "paper") userIsWinner = true;
            break;
        case "spock":
            if (computerChoice === "rock" || computerChoice === "scissors") userIsWinner = true;
    }

    result = userIsWinner ? "You won!" : "Computer won!";
    $resultDisplay.innerHTML = result;
}