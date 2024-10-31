

// Create function to make random selection in RPS

function getComputerChoice() {
    const options =["Rock", "Paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


function hasPlayerWon (player,computer){
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
    }
let playerScore = 0;
let computerScore = 0;
 

function getRoundResults(userOption){
    const computerResult = getComputerChoice();
    
    if (hasPlayerWon(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`; 
    }
        else if (computerResult === userOption){
            return `It's a tie! Both Chose ${userOption}`;
        }
        else {
            computerScore++;
            return `Computer wins! ${computerResult} beats ${userOption}`;

        }
    }
    console.log(getRoundResults);

  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const hideButtons = document.querySelector(".buttons");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  
function showResults (userOption){
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    if(playerScore === 5 || computerScore === 5){
        winnerMsgElement.innerText = `${playerScore === 5 ? "Player" : "Computer"} has won the game!`;
        resetGameBtn.style.display = "block";
        hideButtons.style.display ="none";
    }
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    hideButtons.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
    
};

resetGameBtn.addEventListener("click", resetGame);

   

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn'); 

rockBtn.addEventListener("click",function (){
    showResults("Rock");
});
paperBtn.addEventListener("click",function (){
    showResults("Paper");
});
scissorBtn.addEventListener("click",function (){
    showResults("Scissors");
});





