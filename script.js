const $userChoiceText = document.getElementById("user-choice-text");
const $computerChoiceText = document.getElementById("computer-choice-text");

const $userChoiceIcon = document.getElementById("user-choice-display");
const $computerChoiceIcon = document.getElementById("computer-choice-display");

const $possibleChoices = document.querySelectorAll("button");
const $pcFakeBtns = document.querySelectorAll(".fake-button");
const $infos = document.querySelectorAll(".info");

const $resultDisplay = document.getElementById("result");

let userChoice;
let computerChoice;
let result;

let userChoicesAllColored = false;
let computerChoicesAllColored = false;
let infosAllColored = false;

$possibleChoices.forEach(choice => choice.addEventListener("click", (evt) => {
    userChoice = evt.target.id;
    evt.target.classList.add("active");
    $userChoiceText.innerHTML = userChoice[0].toUpperCase() + userChoice.slice(1);
    generateComputerChoice();
    displayGameChoices();
    getResult();
    checkEasterEgg();
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

    for (let i = 0; i < $pcFakeBtns.length; i++) {
        if ($pcFakeBtns[i].id === `pc-${computerChoice}`) {
            $pcFakeBtns[i].classList.add("active");
            break;
        }
    }

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
    
    for (let i = 0; i < $infos.length; i++) {
        if ($infos[i].id === `${userChoice}-${computerChoice}` || $infos[i].id === `${computerChoice}-${userChoice}`) {
            $infos[i].classList.add("active");
            break;
        }
    }

    result = userIsWinner ? "You won!" : "Computer won!";
    $resultDisplay.innerHTML = result;
}

function checkEasterEgg() {
    if (!userChoicesAllColored) userChoicesAllColored = [...$possibleChoices].every(el => el.children[0].classList.contains("active"));

    if (!computerChoicesAllColored) computerChoicesAllColored = [...$pcFakeBtns].every(el => el.classList.contains("active"));
    
    if (!infosAllColored) infosAllColored = [...$infos].every(el => el.classList.contains("active"));

    let alertCondition = userChoicesAllColored && computerChoicesAllColored && infosAllColored;
    if (alertCondition) {
        setTimeout(() => {
            alert("So cool! All items are grey! :D");
        }, 500);
    }
}