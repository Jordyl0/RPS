let playerScore = 0;
let computerScore = 0;

// Create function to make random selection in RPS

function getComputerChoice() {
    const options = [ "rock", "paper", "scissors"];
    let randomChoice = options[(Math.floor(Math.random() *  options.length))]; 
    return randomChoice;
    
}
let playerSelection = prompt("What is your choice?");
let computerSelection = getComputerChoice();


function playRound (playerSelection, computerSelection)

{
   if (playerSelection == computerSelection)
   {
       return ("its a tie");
   }
   else if (playerSelection.toString() === "rock" && computerSelection.toString()  === "scissors")  {
       playerScore++
       return("player win");
   }
else if
   (playerSelection.toString()  === "scissors" && computerSelection.toString()  === "paper") {
       playerScore++
       return("player win");
   }
else if
   (playerSelection.toString()  === "paper" && computerSelection.toString()  === "rock")
    {
       playerScore++
       return("player win");
   }
   else if ((playerSelection.toString()  === "scissors" && computerSelection.toString()  === "rock") ){
       computerScore++
   return("comp wins");
}    
 else if  (playerSelection.toString()  === "rock" && computerSelection.toString()  === "paper") {
   computerScore++
   return("comp wins");
 }
 else if
(playerSelection,toString()  === "paper" && computerSelection.toString()  === "scissors") {
   computerScore++
   return("comp wins");
}
}


console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));

