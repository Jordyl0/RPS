let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const options = [ "rock", "paper", "scissors"];
    let randomChoice = options.at(Math.floor(Math.random() *  options.length)); 
    return randomChoice;
    
}
playerSelection = window.prompt("What is your choice?", "");

console.log(getComputerChoice())

function playRound (playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        return ("its a tie");
    }
}

