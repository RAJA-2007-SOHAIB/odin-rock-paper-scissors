function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = (randomNum === 1) ? "rock" : (randomNum === 2) ? "paper" : "scissors";
    return computerChoice;
}

function getHumanChoice() {
    const choice = prompt("Select your choice(rock, paper, scissors): ");
    return choice;
}


let humanScore = 0;
let computerScore = 0;

function showChoices(humanChoice, computerChoice) {
    return `You chose: ${humanChoice.toLowerCase()}\nComputer chose: ${computerChoice}\n`;
}


function playGround(human, computer) {
    human = human.toLowerCase();
    let result;
    if (human === computer) {
        result = showChoices(human, computer) + "It's a Tie!";
        return result;
    } else if (human !== computer) {
        result = (human === "rock" && computer === "scissors") ? showChoices(human, computer) + "You won!":
    (human === "rock" && computer === "paper") ? showChoices(human, computer) + "You lost!":
    (human === "paper" && computer === "rock") ? showChoices(human, computer) + "You won!":
    (human === "paper" && computer === "scissors") ? showChoices(human, computer) + "You lost":
    (human === "scissors" && computer === "paper") ? showChoices(human, computer) + "You won!":
    (human === "scissors" && computer === "rock") ? showChoices(human, computer) + "You lost!":
    showChoices(human, computer) + "Are You Dumb!!!";
    }
    return result;
}



function playGame() {
    console.log(playGround(getHumanChoice(), getComputerChoice()));
}

playGame()