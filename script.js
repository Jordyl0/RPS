
const options = [ "rock", "paper", "scissors"];
// Create function to make random selection in RPS

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


function checkWinner(playerSelection, computerSelection){
if(playerSelection == computerSelection){
    return "Tie"
}
else if(
     (playerSelection == "rock" && computerSelection  == "scissors") ||
    (playerSelection  == "scissors" && computerSelection  == "paper") ||
    (playerSelection  == "paper" && computerSelection  == "rock")) 
    {
     return "Player"
     
    }
    else {
        return "Computer";
    }
        
    
    
}

 

function playRound (playerSelection, computerSelection)
{ const result = checkWinner(playerSelection,computerSelection)
 if(result == "Tie") {
    return "It's a tie"
 }
 else if (result == "Player"){
    return `You Win ! ${playerSelection} beats ${computerSelection}`
 }
 else {
    return `You Lose ! ${computerSelection} beats ${playerSelection}`
 }
   
  }
   
  function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const playerChoice = window.prompt("Rock Paper Scissors");
        if(playerChoice == null){
           continue;
        }
        const choiceInLower = playerChoice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }

    }
  }

  


 /* function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if (checkWinner(playerSelection,computerSelection) == "Player"){
            playerScore++;
        }
        else if(checkWinner(playerSelection,computerSelection) == "Computer"){
            computerScore++;
        }
    }
    if(playerScore > computerScore) {
        console.log("Player wins!");
    }
    else if(playerScore < computerScore){
        console.log("Computer wins!");
    }
    else {
        console.log("Run it back!");
    }
  }

  */


/*game() */

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn'); 

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',  () => {
        console.log(button.id);

    });
});



