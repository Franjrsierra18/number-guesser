/*
GAME FUNCTION:
- Player must guess a number between a min and max.
- Player gets a certain amount of guesses.
- Notify player of guesses remaining.
- Notify the player of the correct answer if loose.
- Let player choose to play again.
*/
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num');

const inputNum = document.getElementById('guess-input');
const submitBtn = document.getElementById('guess-btn');
const message = document.querySelector('.message');

let min = 1,
    max = 20,
    winningNum = 2,
    guessesLeft = 3;

minNum.textContent = min;
maxNum.textContent = max;

submitBtn.addEventListener('click', function (e) {
  let guess = parseInt(inputNum.value);
  
  if (isNaN(guess) || guess < min || guess > max) {
    message.textContent = `Enter a number between ${min} and ${max}`;
    message.style.color = 'red';
  } 
  
  if (guess !== winningNum) {
    message.textContent = `Wrong guess. You have left ${guessesLeft} guesses`;
    message.style.color = 'red';
    guessesLeft--
  } else {
    message.textContent = 'Great! You win!!!!';
    message.style.color = 'green';
  }

})