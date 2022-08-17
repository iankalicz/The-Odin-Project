let playersChoice = prompt("Write your choice here:",)

function getComputersChoice() {
    let number = Math.floor(Math.random() * 3)

    if(number === 1) {
        return computersChoice = "rock"
    } else if (number === 2) {
        return computersChoice = "paper"
    } else {
        return computersChoice = "scissors"
    }
}

function game(playerSelection, computerSelection) {
    let winner

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winner = "You lose! Paper beats Rock!"
        } else if (computerSelection !== "scissors") {
            winner = "You won! Rock beats Scissors!"
        } else if (computerSelection === "rock") {
            winner = "It is a draw! Please play again!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            winner = "You lose! Rock beats Scissors!"
        } else if (computerSelection === "paper") {
            winner = "You won! Scissors beats Paper!"
        } else if (computerSelection === "scissors") {
            winner = "It is a draw! Please play again!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            winner = "You Lose! Scissors beats Paper!"
        } else if (computerSelection === "rock") {
            winner = "You won! Paper beats Rock!"
        } else if (computerSelection === "paper") {
            winner = "It is a draw! Please play again!"
        }
        }
        console.log(`Players selection is: ${playerSelection}`)
        console.log(`Computers selection is: ${computerSelection}`)
        console.log(winner)
    }


getComputersChoice()
console.log(computersChoice)
console.log(game(playersChoice, computersChoice))