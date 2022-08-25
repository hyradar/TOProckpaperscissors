
function getComputerChoice() {
    let rand = Math.floor((Math.random()) * 3) + 1;
    let computerchoice;

    if (rand == 1) {
        computerChoice = "rock";
    }
    else if (rand == 2) {
        computerChoice = "paper";
    }
    else if (rand == 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

//Start the game


let computerChoice;
computerChoice = getComputerChoice();
console.log(computerChoice);