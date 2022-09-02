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



function rock() {
    let playerChoice = "rock";
    computerChoice = getComputerChoice();
    let results = playRound(computerChoice, playerChoice);
    let output = document.getElementById('gameoutput'); 
    output.textContent = results;
}

function paper() {
    let playerChoice = "paper";
    computerChoice = getComputerChoice();
    let results = playRound(computerChoice, playerChoice);
    let output = document.getElementById('gameoutput'); 
    output.textContent = results;
}

function scissors() {
    let playerChoice = "scissors";
    computerChoice = getComputerChoice();
    let results = playRound(computerChoice, playerChoice);
    let output = document.getElementById('gameoutput'); 
    output.textContent = results;
}

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

b1.addEventListener("click", e => {rock()});
b2.addEventListener("click", e => {paper()});
b3.addEventListener("click", e => {scissors()});

console.log("page ran");



   // for (i = 0; i < 5; i++) {
    //     let playerChoice = prompt("Choose your weapon: rock, paper, or scissors.");
    //     let computerChoice;
        
    //     playerChoice = fixUserInput(playerChoice);
    //     computerChoice = getComputerChoice();

    //     let round = playRound(computerChoice, playerChoice);
    //     console.log(round);
    // }