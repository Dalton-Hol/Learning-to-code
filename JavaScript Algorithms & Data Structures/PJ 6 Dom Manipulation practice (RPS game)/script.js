function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return document.querySelector("#results-msg").innerHTML = `Player wins! ${userOption} beats ${computerResult}`;
    } else if (userOption === computerResult) {
        return document.querySelector("#results-msg").innerHTML = `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
    }
}