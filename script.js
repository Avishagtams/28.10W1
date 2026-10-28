const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessForm = document.getElementById('guessForm');
const userGuessInput = document.getElementById('userGuess');
const messageEl = document.getElementById('message');

guessForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const guess = Number(userGuessInput.value);

  if (guess === randomNumber) {
    messageEl.textContent = ' כל הכבוד! ניחשת נכון!';
  } else if (guess > randomNumber) {
    messageEl.textContent = 'גבוה מדי תנסה מספר קטן יותר.';
  } else {
    messageEl.textContent = 'נמוך מדי תנסה מספר גדול יותר.';
  }
});