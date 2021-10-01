var highScoreEl = document.querySelector(".high-scores");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var questionEl = document.getElementById("question");

var timeUp = function() {
 questionEl.textContent = "TIME IS UP!";
 console.log("Times up");
}

function timer() {
    var timeLeft = 2;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            timerEl.textContent = "Time left: " + timeLeft;
            timeLeft--;
        } 
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            timeUp();
        }
    }, 1000);
}




startBtn.onclick = timer;