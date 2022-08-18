let playersChoice

function getPlayersChoice() {
    playersChoice = prompt("Write your choice here:",)
}

let computersChoice

function getComputersChoice() {
    let number = Math.floor(Math.random() * 3)

    if (number === 0) {
        computersChoice = "rock"
    } else if (number === 1) {
        computersChoice = "paper"
    } else if (number === 2) {
        computersChoice = "scissors"
    }
}

var result

function getResult(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                result = "lose";
                break;
            case "scissors":
                result = "won";
                break;
            case "rock":
                result = "drawn"
                break
            default:
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                result = "lose";
                break;
            case "paper":
                result = "won";
                break;
            case "scissors":
                result = "drawn"
                break
            default:
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "scissors":
                result = "lose";
                break;
            case "rock":
                result = "won";
                break;
            case "paper":
                result = "drawn"
                break
            default:
                break;
        }
    }
}

let winner

function getWinner(gameResult) {
    if (gameResult === "won") {
        winner = `You ${gameResult}! ${playersChoice} beats ${computersChoice}!`
    } else if (gameResult === "lose") {
        winner = `You ${gameResult}! ${computersChoice} beats ${playersChoice}!`
    } else if (gameResult === "drawn") {
        winner = `It is a ${gameResult}! Let's play again!`
    }
}

function game() {
    getPlayersChoice()
    getComputersChoice()
    getResult(playersChoice, computersChoice)
    getWinner(result)

    console.log(`The players choice was: ${playersChoice}`)
    console.log(`The computers choice was: ${computersChoice}`)
    console.log(winner)
}

for (let i = 1 ; i <= 5 ; i++) {
    game()
}