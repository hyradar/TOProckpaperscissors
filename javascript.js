function getComputerChoice() {
    let rand = Math.floor((Math.random()) * 3) + 1;
    let choice;

    if (rand == 1) {
        return choice = "rock";
    }
    else if (rand == 2) {
        return choice = "paper";
    }
    else if (rand == 3) {
        return choice = "scissors";
    }

    else if (rand != 1 && rand != 2 && rand != 3) {
        return "wrong number!";
    }
    return choice;
}

function fixUserInput(string) {
    string = string.toLowerCase();
    return string;
}

function playRound(computerChoice, playerChoice) {
    
    // ties
    if (computerChoice == "scissors" && playerChoice == "scissors") {
        return "It's a tie, you both chose scissors!";
    }
    else if (computerChoice == "rock" && playerChoice == "rock") {
        return "It's a tie, you both chose rock!";
    }
    else if (computerChoice == "paper" && playerChoice == "paper") {
        return "It's a tie, you both chose paper!";
    }

    //Computer Wins / Player Loses
    if (computerChoice == "scissors" && playerChoice == "paper") {
        return "You lose! Scissors beats Paper!";
    }
    else if (computerChoice == "rock" && playerChoice == "scissors") {
        return "You lose! Rock beats Scissors!";
    }
    else if (computerChoice == "paper" && playerChoice == "rock") {
        return "You lose! Paper beats rock!";
    }

    //Player Wins / ComputerLoses
    if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You Win! Scissors beats Paper!";
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats Rock!";
    }
return "error";
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose your weapon: rock, paper, or scissors.");
        let computerChoice;
        
        playerChoice = fixUserInput(playerChoice);
        computerChoice = getComputerChoice();

        let round = playRound(computerChoice, playerChoice);
        console.log(round);
    }
}



game();