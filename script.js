let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const options = [ "rock", "paper", "scissors"];
    let randomChoice = options.at(Math.floor(Math.random() *  options.length)); 
    return randomChoice;
    
}
playerSelection = window.prompt("What is your choice?", "");



function playRound (playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        console.log("its a tie");
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++
        console.log("player win");
    }
    else if ((computerSelection ==="rock" && playerSelection === "scissors")
    (computerSelection === "scissors" && playerSelection === "paper")
(computerSelection === "paper" && playerSelection === "rock")) {
    computerScore++
    console.log("comp wins");
}
}

const computerSelection = getComputerChoice();
console.log(getComputerChoice())
