var userScore = 0;
var computerScore = 0;

function computerChoiceRandom()
{
    var randomised = Math.random();

    if( randomised <= 0.33)
     {
          return computerChoiceEnum.ROCK;
     }
     else if(randomised > 0.33 & randomised <= 0.66)
     {
        return computerChoiceEnum.PAPPER;
     }
     else
     {
          return computerChoiceEnum.SCISSORS;
     }
}

var playerChoice = document.getElementById("playerChoice");
var computerChoice = document.getElementById("computerChoice");

document.getElementById("rock").addEventListener('click', function (e)
{
console.log("Starting");
    playerChoice.setAttribute('src', 'icons/rock.jpg')
    console.log(computerChoiceRandom());
    computerChoice.setAttribute('src', `icons/${computerChoiceRandom()}.jpg`)
});

document.getElementById("hand").addEventListener('click', function(e)
{
    playerChoice.setAttribute('src','icons/paper.jpg');
    computerChoice.setAttribute('src', `icons/${computerChoiceRandom()}.jpg`)
});

document.getElementById("scissors").addEventListener('click', function(e)
{
    playerChoice.setAttribute('src', 'icons/scissors.jpg');
    computerChoice.setAttribute('src', `icons/${computerChoiceRandom()}.jpg`) 
});

var computerChoiceEnum = {
    ROCK: "rock",
    PAPPER : "paper",
    SCISSORS : "scissors"
}

