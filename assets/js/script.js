var highScoreEl = document.querySelector("#highScores");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var correctEl = document.querySelector(".correct");
var incorrectEl = document.querySelector(".incorrect");
var answerEl = document.querySelector(".answer");
var rightEl = document.querySelector(".right");
var scoreEl = document.getElementById("score-page");
var questions = document.querySelector(".questions");
var initialEl = document.getElementById("initials");
var submitEl = document.getElementById("submit")
var initialArr = [];
var scoresArr =[];
var nameEl = document.getElementById("name");
var timeInterval;
score = 0;
var time = 60;

var startPage = function () {
    document.getElementById("initials").style.display = "none";
    document.querySelector("#submit").style.display = "none";
    document.querySelector(".questions").style.display = "none";
    document.querySelector("#highScores").style.display = "none";
    document.querySelector("#startPage").style.display = "block";
    document.querySelector("#startBtn").style.display = "block";
}

var displayCorrect = function(){
correctEl.textContent = "Correct :)";
score += 5;
console.log(score);
}

var displayIncorrect = function (){
    incorrectEl.textContent = "Incorrect :(";
    score -= 2;
    time -= 3;
    console.log(score);
}

var saveInitials = function () {
    initialArr.push(initialEl.value);
    console.log(initialArr);
    scoresArr.push(score);

    initialArr = initialArr.concat(JSON.parse(localStorage.getItem("initialList")));
    scoresArr = scoresArr.concat(JSON.parse(localStorage.getItem("scoresList")));

    localStorage.setItem("initialList", JSON.stringify(initialArr));
    localStorage.setItem("scoreList", JSON.stringify(scoresArr));
    console.log(initialArr[0]);
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
    a3:"1. ||",
    b3:"2. []",
    c3:"3. ''",
    d3:"4. <>",

    question4: "4. What language is often used mainly to style a website?",
    a4: "1. HTML",
    b4: "2. CSS",
    c4: "3. javaScript",
    d4: "4. python",

    question5: "5. A common tool used to store and share remote repositories.",
    a5: "1. gitHub",
    b5: "2. Slack",
    c5: "3. Stack Overflow",
    d5: "4. VS Code"
}

var timeUp = function() {
 questions.textContent = "TIME IS UP!";
 console.log("Times up");
}

function timer() {

    var timeInterval = setInterval(function () {
        if (time >= 1) {
            timerEl.textContent = "Time left: " + time;
            time --;
        } 
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            timeUp();
        }
    }, 1000);
}

var stopTimer = function () {
   clearTimeout(timer);
}

var addScore = function () {
    questions.textContent = "You scored " + score;
    document.querySelector(".right").style.display = "none";
    document.getElementById("initials").style.display = "block";
    document.querySelector("#startBtn").style.display = "none";
    document.querySelector("#timer").style.display = "none";
    submitEl.addEventListener("click", saveInitials);
    document.querySelector("#submit").style.display = "block";
    stopTimer();
    document.querySelector("#submit").addEventListener("click", function(event){
        event.preventDefault()
    });
    document.querySelector("#submit").addEventListener("click", saveInitials);
    document.querySelector("#hSBtn").addEventListener("click", highScores);
}

var remove = function () { 
    var fun = [displayCorrect, displayIncorrect, displayQuestion1, displayQuestion2, displayQuestion3, displayQuestion4, displayQuestion5]
    for (let i = 0; i < fun.length; i++){
        answer1El.removeEventListener("click", fun[i]);
        answer2El.removeEventListener("click", fun[i]);
        answer3El.removeEventListener("click", fun[i]);
        answer4El.removeEventListener("click", fun[i]);
    }
};

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
    remove();

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
    remove();

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
    remove();

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
    remove();

    questionEl.textContent = (quizQuestions.question5);
    answer1El.textContent = (quizQuestions.a5);
    answer2El.textContent = (quizQuestions.b5);
    answer3El.textContent = (quizQuestions.c5);
    answer4El.textContent = (quizQuestions.d5);

    answer1El.addEventListener("click", displayCorrect);
    answer1El.addEventListener("click", addScore);
    answer2El.addEventListener("click", displayIncorrect);
    answer2El.addEventListener("click", addScore);
    answer3El.addEventListener("click", displayIncorrect);
    answer3El.addEventListener("click", addScore);
    answer4El.addEventListener("click", displayIncorrect);
    answer4El.addEventListener("click", addScore);
}

var start = function () {
    displayQuestion1();
    timer();
    document.getElementById("startPage").style.display = "none";
    document.querySelector(".questions").style.display = "block";
    document.querySelector("#startBtn").style.display = "none";
}

var highScores = function () {
    document.querySelector("#highScores").style.display = "block";
    document.querySelector("#startPage").style.display = "none";
    document.querySelector(".questions").style.display = "none";
    document.querySelector("#startBtn").style.display = "none";
    document.querySelector("#score-page").style.display = "none";
    document.querySelector("#close").addEventListener("click", startPage);
    console.log("hi");
    let initials = ["1. " + initialArr[0], "2. " + initialArr[1], "3. " + initialArr[2], "4. " + initialArr[3], "5. " + initialArr[4]]
    let list = document.querySelector(".scores")
    initials.forEach((item)=> {
        let li = document.createElement("li");
        li.innerText= item;
        list.appendChild(li);
    });

    let scores = [scoresArr[0], scoresArr[1], scoresArr[2], scoresArr[3], scoresArr[4]]
    let group = document.querySelector(".scoreNum")
    scores.forEach((item)=> {
        let li = document.createElement("li");
        li.innerText= item;
        group.appendChild(li);
    });
    console.log(initialArr);
    console.log(scoresArr);
}

document.getElementById("initials").style.display = "none";
document.querySelector("#submit").style.display = "none";
document.querySelector(".questions").style.display = "none";
document.querySelector("#highScores").style.display = "none";
console.log(score);

document.querySelector("#hSBtn").addEventListener("click", highScores);
document.querySelector("#startBtn").addEventListener("click", start)