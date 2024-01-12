let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const options = [ "rock", "paper", "scissors"];
    let randomChoice = options.at(Math.floor(Math.random() *  options.length)); 
    return randomChoice;
    
}
playerSelection = window.prompt("What is your choice?", "");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
    {
        return console.log("It's a tie");
    
    }
    else if ((playerSelection.toUpperCase() === "rock" && computerSelection.toUpperCase() === "scissors") ||
    (playerSelection.toUpperCase() === "scissors" && computerSelection.toUpperCase() === "paper") ||
    (playerSelection.toUpperCase() === "paper" && computerSelection.toUpperCase() === "rock") 
    ) {
        playerScore++
        return "Player Wins"
    }
   else if ( (computerSelection.toUpperCase() === "rock" && playerSelection.toUpperCase() === "scissors") ||
    (computerSelection.toUpperCase() === "scissors" && playerSelection.toUpperCase() === "paper") || 
    (computerSelection.toUpperCase() === "paper" && playerSelection.toUpperCase() === "rock") 
    ) {
        computerScore++
        return console.log("Comp Wins")
    }
    
     
}
console.log(playRound());

