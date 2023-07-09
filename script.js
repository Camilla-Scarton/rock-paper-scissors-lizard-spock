const $userChoiceText = document.getElementById("user-choice-text");
const $computerChoiceText = document.getElementById("computer-choice-text");

const $userChoiceIcon = document.getElementById("user-choice-display");
const $computerChoiceIcon = document.getElementById("computer-choice-display");

const $possibleChoices = document.querySelectorAll("button");

const $resultDisplay = document.getElementById("result");

let userChoice;
let computerChoice;
let result;

$possibleChoices.forEach(choice => choice.addEventListener("click", (evt) => {
    userChoice = evt.target.id;
    evt.target.classList.add("active");
    $userChoiceText.innerHTML = userChoice[0].toUpperCase() + userChoice.slice(1);
    generateComputerChoice();
    displayGameChoices();
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
    document.getElementById(`pc-${computerChoice}`).classList.add("active");
    $computerChoiceText.innerHTML = computerChoice[0].toUpperCase() + computerChoice.slice(1);
}

function displayGameChoices() {
    $userChoiceIcon.innerHTML = `<i class="fa fa-hand-${userChoice}-o fa-2x"></i>`;
    $computerChoiceIcon.innerHTML = `<i class="fa fa-hand-${computerChoice}-o fa-2x"></i>`;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw!";
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
    
    let $info = document.getElementById(`${userChoice}-${computerChoice}`);
    if (!$info) $info = document.getElementById(`${computerChoice}-${userChoice}`);
    $info.classList.add("active");

    result = userIsWinner ? "You won!" : "Computer won!";
    $resultDisplay.innerHTML = result;
}