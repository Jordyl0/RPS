


function getComputerChoice() {
    const options = [ "rock", "paper", "scissors"];
    let randomChoice = options.at(Math.floor(Math.random() *  options.length)); 
    return randomChoice;
    
}

console.log(getComputerChoice());