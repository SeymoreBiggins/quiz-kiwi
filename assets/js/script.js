var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var title = document.getElementById('title-box');

// Timer that counts down from 60
function countdown() {
    clearStart();

    // Sets amount of time in the countdown
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000); // Refers to miliseconds per timer tick 1000 = 1s
}

function clearStart() {
    title.textContent = '';
}

startBtn.onclick = countdown;