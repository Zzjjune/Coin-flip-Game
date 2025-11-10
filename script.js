    function flipCoin(guess) {
      const randomNumber = Math.random();
      let result = randomNumber < 0.5 ? 'heads' : 'tails';

      // Show coin symbol
      const coinSymbol = result === 'heads' ? '👤' : '🪁';
      document.getElementById('coin').textContent = coinSymbol;

      // Display result
      if (guess === result) {
        document.getElementById('result').textContent = `You guessed ${guess}! It's ${result}. You win! 🎉`;
        document.getElementById('result').style.color = 'green';
      } else {
        document.getElementById('result').textContent = `You guessed ${guess}, but it's ${result}. You lose! 😢`;
        document.getElementById('result').style.color = 'red';
      }
    }
