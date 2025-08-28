function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = (randomNum === 1) ? "rock" : (randomNum === 2) ? "paper" : "scissors";
    return computerChoice;
}


function displayChoices() {
    const human = document.querySelector(".human");
    human.textContent = `You chose: ${event.target.classList[0]}`;
    const computer = document.querySelector(".computer");
    computer.textContent = `Computer chose: ${getComputerChoice()}`;
}


const rock = document.querySelector(".rock");
rock.addEventListener("click", (event) => {
    displayChoices();
})

const paper = document.querySelector(".paper");
paper.addEventListener("click", (event) => {
    displayChoices();
})

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", (event) => {
    displayChoices();
})
