const choices = ["rock", "paper", "scissors"];
const playerchoice = document.getElementById("playerchoice");
const computerchoice = document.getElementById("computerchoice");
const resultD = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreD");
const computerScoreDisplay = document.getElementById("computerScoreD");

let playerScore = 0;
let computerScore = 0;


function play(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result ="";

    if(playerChoice === computerChoice){
        result = "Tie!";
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "Win!" : "Lose!"
                break;
            
                
           case "paper":
                result = (computerChoice === "rock") ? "Win!" : "Lose!"
                break;
 
           case "scissors":
                result = (computerChoice === "paper") ? "Win!" : "Lose!"
                break;
                 
        }
    }

    playerchoice.textContent = `PLAYER: ${playerChoice}`;
    computerchoice.textContent = `Computer: ${computerChoice}`;
    resultD.textContent = result;


    resultD.classList.remove("green", "red");
    switch(result){
        case "Win!":
            resultD.classList.add("green");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Lose!":
            resultD.classList.add("red");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        }
        
}