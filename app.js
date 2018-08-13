const setMessage = (msg, color) => {
    message.style.color = color;
    message.textContent = msg;
}

const gameOver = (won, msg) => {
    let color;
    won === true ? color = 'green' : color = 'red';
    guesInput.disabled = true;
    guesInput.style.borderColor = color;
    setMessage(msg, color);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

const getRandomNum = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

let min = 1;
let max = 5;
let winningNumber = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guesInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload();
        console.log('fiut');
        
    }
})

guessBtn.addEventListener('click', (e) =>{
    let guess = parseInt(guesInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    
    if (guess === winningNumber) {
        gameOver(true, `${winningNumber} is correct! You win!!!`)  
            } else {
                guessesLeft -=1;           
                if (guessesLeft === 0) {
                    gameOver(false, `Game Over, You lost! The correct number was ${winningNumber}`)
                } else {
                    setMessage(`${guess} is not correct, ${guessesLeft} gueses left`, 'red')
                    guesInput.style.borderColor = 'red';
                    guesInput.value = '';
                }
            }
});

