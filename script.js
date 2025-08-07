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

function showChoices(yourChoice, computerChoice) {
    return `You chose: ${yourChoice.toLowerCase()}\nComputer chose: ${computerChoice}`;
}


function playRound(yourChoice, computerChoice) {
    let result;
    yourChoice = yourChoice.toLowerCase();

    if (yourChoice === computerChoice) {
        result = "It's a tie!";
        
    } else if (yourChoice !== computerChoice) {
        if ( (yourChoice === "rock" && computerChoice === "scissors") 
        || (yourChoice === "paper" && computerChoice === "rock")
        || (yourChoice === "scissors" && computerChoice === "paper")) {
            result = "You won!";
            humanScore += 1;
        } else if ((yourChoice === "rock" && computerChoice === "paper")
        || (yourChoice === "paper" && computerChoice === "scissors")
        || (yourChoice === "scissors" && computerChoice === "rock")) {
            result = "You lost!";
            computerScore += 1;
        }else {
            result = `Are you FR!!! Select "ONLY" from the given options!`
        }
    }

    return showChoices(yourChoice, computerChoice) + "\n" + result + "\n" + humanScore + "\t" + computerScore;

}

function playGame() {
    let nextRound = prompt("press any key to start round 1");
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    nextRound = prompt("press any key to start round 2");
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    nextRound = prompt("press any key to start round 3");
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    nextRound = prompt("press any key to start round 4");
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    nextRound = prompt("press any key to start round 5");
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    if (humanScore > computerScore) {
        console.log(`Your score: ${humanScore}\tComputer score: ${computerScore}`);
        console.log(`Congrats! You have won the game.`);
    } else if(humanScore < computerScore) {
        console.log(`Your score: ${humanScore}\tComputer score: ${computerScore}`);
        console.log("Alas! You lost the game.");

    } else {
        console.log(`Your score: ${humanScore}\tComputer score: ${computerScore}`);
        console.log("You gotta be kidding! I am not debugging this. I am too lazy for that. Do it yourself!");
    }

}


playGame();