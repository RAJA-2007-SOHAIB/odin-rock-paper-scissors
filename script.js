let gameOver = false;


function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = (randomNum === 1) ? "rock" : (randomNum === 2) ? "paper" : "scissors";
    return computerChoice;
}

function addPaddingToChoices() {
    const choices = document.querySelector(".choices");
    choices.setAttribute("style", "padding: 2vw; border: 2.5px solid white;");
}


let computerChoice;
let humanChoice;


let humanScore = 0;
let computerScore = 0;


function displayChoices(event) {
    addPaddingToChoices();

    const human = document.querySelector(".human");
    humanChoice = `${event.target.classList[0]}`; //  the class name is set to match the choice
    human.textContent = `You chose: ${event.target.classList[0]}`;

    const computer = document.querySelector(".computer");
    computerChoice = getComputerChoice();
    computer.textContent = `Computer chose: ${computerChoice}`;
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", (event) => {
    if (gameOver) return;
    displayChoices(event);
    manageResultContainer(humanChoice, computerChoice);
    displayFinalWinner(humanScore, computerScore);
})

const paper = document.querySelector(".paper");
paper.addEventListener("click", (event) => {
    if (gameOver) return;
    displayChoices(event);
    manageResultContainer(humanChoice, computerChoice);
    displayFinalWinner(humanScore, computerScore);
})

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", (event) => {
    if (gameOver) return;
    displayChoices(event);
    manageResultContainer(humanChoice, computerChoice);
    displayFinalWinner(humanScore, computerScore);
})

function manageResultContainer(humanChoice, computerChoice) {
    const main = document.querySelector(".main");
    const oldResults = main.querySelector(".resultContainer");
    if (oldResults) {
        main.removeChild(oldResults);
    }

    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("resultContainer");

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = calcResult(humanChoice, computerChoice);

    resultsContainer.appendChild(result);
    main.appendChild(resultsContainer);
}



function calcResult(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = `it's a tie.\n${humanChoice} ties with ${computerChoice}.`;


    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
        result = `You lost!\n${computerChoice} beats ${humanChoice}`;
        computerScore += 1;

    } else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        result = `You won.\n${humanChoice} beats ${computerChoice}`;
        humanScore += 1;

    }
    displayScores(humanScore, computerScore);
    return result;
}

function displayScores(humanScore, computerScore) {
    const oldMain = document.querySelector(".main");
    const oldScores = oldMain.querySelector(".score");
    if (oldScores) {
        oldMain.removeChild(oldScores);
    }
    const main = document.querySelector(".main");
    const scores = document.createElement("div");
    scores.classList.add("score");

    const humanScr = document.createElement("div");
    humanScr.classList.add("humanScore");
    humanScr.textContent = `Your score: ${humanScore}`;

    const compScr = document.createElement("div");
    compScr.classList.add("computerScore");
    compScr.textContent = `Computer score: ${computerScore}`;
    scores.appendChild(humanScr);
    scores.appendChild(compScr);
    main.appendChild(scores);
}


function displayFinalWinner(humanScore, computerScore) {
    const winnerBox = document.querySelector(".winnerBox");
    const restartBtn = document.querySelector(".restart");
    if (humanScore >= 5) {
        winnerBox.textContent = `You Won the Game!`;
        winnerBox.style.display = "block";
        restartBtn.style.display = "block";
        gameOver = true;
    } else if (computerScore === 5) {
        winnerBox.textContent = "Computer Won the Game!";
        winnerBox.style.display = "block";
        restartBtn.style.display = "block";
        gameOver = true;
    }
}

document.querySelector(".restart").addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    document.querySelector(".winnerBox").style.display = "none";
    document.querySelector(".restart").style.display = "none";
    displayScores(humanScore, computerScore);
});


