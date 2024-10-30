

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

    if (hasPlayerWon(userOption,computerResult)) {
        player++;
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

    

   
 

  




const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn'); 

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',  () => {
        console.log(button.id);

    });
});



