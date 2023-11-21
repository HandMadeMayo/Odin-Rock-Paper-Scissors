let playerScore = 0;
let computerScore = 0;

console.log(`We are playing Rock Paper Scissors!`);

function rpsGame () {

//Player makes their selection i.e. rock, paper, or scissors and browser verifies a proper selection was made
    function playerSelectionFunction() {
        playerSelection = window.prompt(`Please make your selection!`);
        playerSelection = playerSelection.toLowerCase();
        console.log(`You have chosen ${playerSelection}!`)
        return playerSelection;
    };

    playerSelectionFunction();
    
    if (playerSelection !== (`rock` || `paper` || `scissors`)) {
        console.log(`That was not a valid entry, please try again!`);
        playerSelection = null
        playerSelectionFunction();};
        
//Computer selection is generated from an array using random
    let computerSelectionArray = [
        `rock`,
        `paper`,
        `scissors`
    ];

    let computerSelection;

    function computerSelectionFunction(array) {
        computerSelection = array[Math.floor(Math.random() * array.length)];
        console.log(`The computer has chosen ${computerSelection}!`)
        return computerSelection;
    };

    computerSelectionFunction(computerSelectionArray);
//    console.log(playerSelection);
//    console.log(computerSelection);
    
//Computer and player selections are compared and a winner is determined with one point given to the winner
       

if (playerSelection == computerSelection) {
        console.log(`It's a tie!`);
    }
    else if (playerSelection == `rock` && computerSelection == `paper`) {
        console.log(`You lose this round!`)
        computerScore = computerScore + 1
    }
    else if (playerSelection == `rock` && computerSelection == `scissors`) {
        console.log(`You win this round!`)
        playerScore = playerScore + 1
    }
    else if (playerSelection == `paper` && computerSelection == `scissors`) {
        console.log(`You lose this round!`)
        computerScore = computerScore + 1
    }
    else if (playerSelection == `paper` && computerSelection == `rock`) {
        console.log(`You win this round!`)
        playerScore = playerScore + 1
    }
    else if (playerSelection == `scissors` && computerSelection == `rock`) {
        console.log(`You lose this round!`)
        computerScore = computerScore + 1;
    }
    else if (playerSelection == `scissors` && computerSelection == `paper`) {
        console.log(`You win this round!`)
        playerScore = playerScore + 1
    }
return playerScore , computerScore
};

rpsGame();
console.log(`You have ${playerScore} points, and the computer has ${computerScore} points!`);
rpsGame();
console.log(`You have ${playerScore} points, and the computer has ${computerScore} points!`);
rpsGame();
console.log(`You have ${playerScore} points, and the computer has ${computerScore} points!`);
rpsGame();
console.log(`You have ${playerScore} points, and the computer has ${computerScore} points!`);
rpsGame();
console.log(`You have ${playerScore} points, and the computer has ${computerScore} points!`);

if (playerScore > computerScore) {
    console.log(`You win the game!`)
} 
else {console.log(`You lose the game!`)
};

