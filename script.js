'use strict';
//*secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//*score
let score = 20;
//*high score
let highScore = 0;
//*click function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //*when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    //*when number is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You win!🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //*when number is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Number Is Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
    //*when number is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Number Is Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guesing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
