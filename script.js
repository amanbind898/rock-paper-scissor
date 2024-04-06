let humanScore = 0;
let compScore = 0;
document.getElementById('compChoice').innerHTML = `<img src="images/comp.png" alt="comp" class="option">`;

function makeMove(playerMove) {
    const moves = ['rock', 'paper', 'scissors'];
    const x = Math.floor(Math.random() * 3);
    const compMove = moves[x];
    document.getElementById('compChoice').innerHTML = `<img src="images/${compMove}.png" alt="${compMove}" class="option">`;
    // Select the tag .title-img inside #compChoice and change the .title-img to the name of the image of the computer's choice
    document.querySelector('.compSelection .title-img').innerHTML = compMove;
    const result = determineWinner(playerMove, compMove);

    updateResult(result);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if ((player === 'rock' && computer === 'scissors') ||    
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        humanScore++;
        return 'You win!';
    } else {
        compScore++;
        return 'Computer wins!';
    }
}


function updateResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h1>${result}</h1>`;
    
    updateScore();
    
    if (humanScore === 5 || compScore === 5) {
        displayGameOverPopup(result);
    }
}

function updateScore() {
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('compScore').textContent = compScore;
}

function displayGameOverPopup(result) {
    const popup = document.getElementById('gameOverPopup');
    const popupMessage = document.getElementById('popupMessage');

    popupMessage.textContent = `Game Over! ${result}`;
    popup.style.display = 'flex';
}

function restartGame() {
    humanScore = 0;
    compScore = 0;
    document.getElementById('compChoice').innerHTML = `<img src="images/comp.png" alt="comp" class="option">`;
    document.querySelector('.compSelection .title-img').innerHTML = "Computer's Choice";
    updateScore();

    const popup = document.getElementById('gameOverPopup');
    popup.style.display = 'none';
}
