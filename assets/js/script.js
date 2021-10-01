var highScoreEl = document.querySelector(".high-scores");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var correctEl = document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");
var answerEl = document.querySelector(".answer");
var rightEl = document.querySelector(".right");
var scoreEl = document.getElementById("score-page");
var score= 0; 

var displayCorrect = function(){
correctEl.textContent = "Correct :)";
score+2;
}

var displayIncorrect = function (){
    incorrectEl.textContent = "Incorrect :(";
    timer-3;
    score--;
}

var addScore = function () {
    scoreEl.textContent = "You scored " + score;
}

const quizQuestions = {
    question1:"1. What symbol is used to create comments in javaScript?",
    a1: "1. //",
    b1: "2. <!--",
    c1: "3.<*",
    d1: "4. /*",

    question2: "2. Where does the link for a css stylesheet go in the html document?",
    a2: "1. In the body section at the bottom",
    b2: "2. In the header",
    c2: "3. In the head section after the title",
    d2: "4. In the middle of the document",

    question3: "3. What surrounds an array in javaScript?",
    a3:"||",
    b3:"[]",
    c3:"''",
    d3:"<>",

    question4: "4. What language is often used mainly to style a website?",
    a4: "HTML",
    b4: "CSS",
    c4: "javaScript",
    d4: "python",

    question5: "5. A common tool used to store and share remote repositories.",
    a5: "gitHub",
    b5: "Slack",
    c5: "Stack Overflow",
    d5: "VS Code"

}

var timeUp = function() {
 questionEl.textContent = "TIME IS UP!";
 console.log("Times up");
}

function timer() {
    var timeLeft = 60;

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

var displayQuestion1 = function(){
    questionEl.textContent = (quizQuestions.question1);
    answer1El.textContent = (quizQuestions.a1);
    answer2El.textContent = (quizQuestions.b1);
    answer3El.textContent = (quizQuestions.c1);
    answer4El.textContent = (quizQuestions.d1);

    
    answer1El.addEventListener("click", displayCorrect);
    answer1El.addEventListener("click", displayQuestion2);
    answer2El.addEventListener("click", displayIncorrect);
    answer2El.addEventListener("click", displayQuestion2);
    answer3El.addEventListener("click", displayIncorrect);
    answer3El.addEventListener("click", displayQuestion2);
    answer4El.addEventListener("click", displayIncorrect);
    answer4El.addEventListener("click", displayQuestion2);
}

var displayQuestion2 = function () {

    questionEl.textContent = (quizQuestions.question2);
    answer1El.textContent = (quizQuestions.a2);
    answer2El.textContent = (quizQuestions.b2);
    answer3El.textContent = (quizQuestions.c2);
    answer4El.textContent = (quizQuestions.d2);

    answer1El.addEventListener("click", displayIncorrect);
    answer1El.addEventListener("click", displayQuestion3);
    answer2El.addEventListener("click", displayIncorrect);
    answer2El.addEventListener("click", displayQuestion3);
    answer3El.addEventListener("click", displayCorrect);
    answer3El.addEventListener("click", displayQuestion3);
    answer4El.addEventListener("click", displayIncorrect);
    answer4El.addEventListener("click", displayQuestion3);
}

var displayQuestion3 = function () {

    questionEl.textContent = (quizQuestions.question3);
    answer1El.textContent = (quizQuestions.a3);
    answer2El.textContent = (quizQuestions.b3);
    answer3El.textContent = (quizQuestions.c3);
    answer4El.textContent = (quizQuestions.d3);

    answer1El.addEventListener("click", displayIncorrect);
    answer1El.addEventListener("click", displayQuestion4);
    answer2El.addEventListener("click", displayCorrect);
    answer2El.addEventListener("click", displayQuestion4);
    answer3El.addEventListener("click", displayIncorrect);
    answer3El.addEventListener("click", displayQuestion4);
    answer4El.addEventListener("click", displayIncorrect);
    answer4El.addEventListener("click", displayQuestion4);
}

var displayQuestion4 = function () {
    questionEl.textContent = (quizQuestions.question4);
    answer1El.textContent = (quizQuestions.a4);
    answer2El.textContent = (quizQuestions.b4);
    answer3El.textContent = (quizQuestions.c4);
    answer4El.textContent = (quizQuestions.d4);

    answer1El.addEventListener("click", displayIncorrect);
    answer1El.addEventListener("click", displayQuestion5);
    answer2El.addEventListener("click", displayCorrect);
    answer2El.addEventListener("click", displayQuestion5);
    answer3El.addEventListener("click", displayIncorrect);
    answer3El.addEventListener("click", displayQuestion5);
    answer4El.addEventListener("click", displayIncorrect);
    answer4El.addEventListener("click", displayQuestion5);
}

var displayQuestion5 = function () {
    questionEl.textContent = (quizQuestions.question5);
    answer1El.textContent = (quizQuestions.a5);
    answer2El.textContent = (quizQuestions.b5);
    answer3El.textContent = (quizQuestions.c5);
    answer4El.textContent = (quizQuestions.d5);

    answer1El.addEventListener("click", displayCorrect);
    answer1El.addEventListener("click", displayQuestion3);
    answer2El.addEventListener("click", displayIncorrect);
    answer2El.addEventListener("click", displayQuestion3);
    answer3El.addEventListener("click", displayIncorrect);
    answer3El.addEventListener("click", displayQuestion3);
    answer4El.addEventListener("click", displayIncorrect);
    answer4El.addEventListener("click", displayQuestion3);
}


startBtn.onclick = timer, displayQuestion1();