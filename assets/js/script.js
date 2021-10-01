var highScoreEl = document.querySelector(".high-scores");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");

const quizQuestions = {
    question1:"What symbol is used to create comments in javaScript?",
    a: "1. //",
    b: "2. <!--",
    c: "3.<*",
    d: "4. /*"
}

var timeUp = function() {
 questionEl.textContent = "TIME IS UP!";
 console.log("Times up");
}

function timer() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
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

var displayQuestion = function(){
    questionEl.textContent = (quizQuestions.question1);
    answer1El.textContent = (quizQuestions.a);
    answer2El.textContent = (quizQuestions.b);
    answer3El.textContent = (quizQuestions.c);
    answer4El.textContent = (quizQuestions.d);
}

displayQuestion();
startBtn.onclick = timer;