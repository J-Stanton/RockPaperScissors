function getComputerChoice(){
    let choices = ["rock","paper","scissors"]
    return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection,computerSelection){
    
    if (playerSelection == "rock"){
        switch(computerSelection){
            case "paper":
                return "You lose! Paper beats Rock";
            case "scissors":
                return "You win! Rock beats Scissors";
            case "rock":
                return "Tie!"
        }
    }
    else if (playerSelection=="paper"){
        switch(computerSelection){
            case "scissors":
                return "You lose! Scissors beats Paper";
            case "rock":
                return "You win! Paper beats Rock";
            case "paper":
                return "Tie!"
        }
    }
    else if (playerSelection=="scissors"){
        switch(computerSelection){
            case "rock":
                return "You lose! Rock beats Scissors";
            case "paper":
                return "You win! Scissors beats Paper";
            case "rock":
                return "Tie!"
        }
    }
    else{
        return "invalid input"
    }

}