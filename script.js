function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = (randomNum === 1) ? "rock" : (randomNum === 2) ? "paper" : "scissors";
    return computerChoice;
}

