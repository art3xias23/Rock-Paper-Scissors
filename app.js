var userSelection;
// CHOICE OPTIONS
const rock_id = document.getElementById("rock");
const paper_id = document.getElementById("paper");
const scissors_id = document.getElementById("scissors");

//USERSCORES
const userScore = document.getElementById("scorePlayer");
var computerScore = document.getElementById("scoreComputer");
const outcomeDisplay = document.getElementById("outcome");
var userResult = 0;
var computerResult = 0;

// RESTART
const restartButton = document.getElementById("gameMenu_optionRestart")

function computerPlay()
{
    var randomised = Math.random();

    if(randomised <= 0.33)
     {
          return choiceEnum.ROCK;
     }
     else if(randomised > 0.33 & randomised <= 0.66)
     {
        return choiceEnum.PAPER;
     }
     else
     {
          return choiceEnum.SCISSORS;
     }
}

var playerChoice = document.getElementById("playerChoice");
var computerChoice = document.getElementById("computerChoice");

//EVENTS
rock_id.addEventListener('click', () => playGame(choiceEnum.ROCK));
paper_id.addEventListener('click', () => playGame(choiceEnum.PAPER));
scissors_id.addEventListener('click', () => playGame(choiceEnum.SCISSORS)); 
restartButton.addEventListener('click', () => resetScores());

function playGame(userSelection)
{
    var computerSelection = computerPlay();
    console.log(userSelection);
    playerChoice.setAttribute('src', `icons/${userSelection}.jpg`)
    computerChoice.setAttribute('src', `icons/${computerSelection}.jpg`)
    decideOutcome(userSelection, computerSelection);
};

function resetScores()
{
    userScore.innerHTML = 0;
    userResult = 0;

    computerScore.innerHTML = 0;
    computerResult = 0;

    outcomeDisplay.innerHTML = "";

    playerChoice.setAttribute('src', '');
    computerChoice.setAttribute('src', '');
}


var choiceEnum = {
    ROCK: "rock",
    PAPER : "paper",
    SCISSORS : "scissors"
}

var decisionEnum = {
    userWin : "User Wins!",
    computerWin : "Computer wins...",
    draw : "It's a draw!"
}

function decideOutcome(userSelection, computerSelection)
{
    var selections = userSelection + computerSelection;
    console.log(selections);
    switch(selections)
    {
        //USER SELECTS PAPER
         case choiceEnum.PAPER + choiceEnum.ROCK:
             displayOutcome(decisionEnum.userWin)   
            break;
         case choiceEnum.PAPER + choiceEnum.SCISSORS:
            displayOutcome(decisionEnum.computerWin)
            break;
         case choiceEnum.PAPER + choiceEnum.PAPER:
            displayOutcome(decisionEnum.draw);
            break;
            div
        //USER SELECTS ROCK 
         case  choiceEnum.ROCK+  choiceEnum.ROCK:
             displayOutcome(decisionEnum.draw)   
            break;
         case choiceEnum.ROCK + choiceEnum.SCISSORS:
            displayOutcome(decisionEnum.userWin)
            break;
         case choiceEnum.ROCK + choiceEnum.PAPER:
            displayOutcome(decisionEnum.computerWin);
            break;
            value
        //USER SELECTS SCISSORS 
         case choiceEnum.SCISSORS + choiceEnum.ROCK:
             displayOutcome(decisionEnum.computerWin)   
            break;
         case choiceEnum.SCISSORS + choiceEnum.SCISSORS:
            displayOutcome(decisionEnum.draw)
            break;
         case choiceEnum.SCISSORS +  choiceEnum.PAPER:
            displayOutcome(decisionEnum.userWin);
            break;
        default: break;
    }
}

function displayOutcome(decision)
{
    console.log(`displayOutcome: ${decision}`);
    outcomeDisplay.innerHTML = decision;

    switch(decision)
    {
        case decisionEnum.userWin:
            userResult++;
            userScore.innerHTML = userResult;
            computerScore.innerHTML = computerResult;
            break;
        case decisionEnum.computerWin:
            computerResult++;
            computerScore.innerHTML = computerResult;
            userScore = userResult;
            break;
            default: break;
    }
}

