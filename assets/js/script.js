var title = document.getElementById('title-box');
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var quizContainer = document.getElementById('quiz');
var scoresEl = document.getElementById('highscores');
var questionEl = document.createElement("P");
var choiceEl = document.createElement("P");
let timeLeft;
var correctAnswers = 0;

// iteration counters
var i = 0;
var j = 0;

let questionArray = [
    
    // IMPORTANT when checking correct answers from question array
    //  subtract 1 from answer (array counts starting from 0) so q1 answer be 3 in array
    { // Array 0
        question: "Inside of which HTML element do we put the JavaScript?",
        choices: ["javascript", "js", "scripting", "script"],
        answer: 3
    }, 
    { // Array 1
        question: "[ a = 8 + '8'; ] What is the string value of a?",
        choices: ["16", "Run Time Error", "88", "Null"],
        answer: 2
    }, 
    { // Array 2
        question: "Which of the following will write the message “Hello World” in an alert box?",
        choices: ["alertBox('Hello World!)", "alert(Hello World!)", "msgAlert('Hello World!')", "alert('Hello World!')"],
        answer: 3
    }, 
    { // Array 3
        question: "How do you find the minimum of x and y using JavaScript?",
        choices: ["Math.min(x,y)", "min(x,y);", "Math.min(xy)", "min(xy);"],
        answer: 0
    }, 
    { // Array 4
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        choices: ["catch", "default", "try", "label"],
        answer: 1
    }, 
    { // Array 5
        question: "[ Boolean(3<7) ] What will the code return?",
        choices: ["true", "false", "NaN", "SyntaxError"],
        answer: 0
    }, 
    { // Array 6
        question: "JavaScript is a ___ -side programming language.",
        choices: ["Client", "Server", "Both", "Neither"],
        answer:  2
    }, 
    { // Array 7
        question: "Which method will you use to round the number 24.76 to the nearest integer?",
        choices: ["round(24.76);", "rnd(24.76);", "Math.rnd(24.76);", "Math.round(24.76);"],
        answer: 3
    }
];

// {
// question: "Which answer = k",
// choices: ["h", "j", "k", "l"],
// answer: 3
// }

var buildQuiz = function(){
    if (i+1 <= questionArray.length) {
        currentQA();
    } else {
        showResults();
    }
}

function currentQA() {
    // display appropriate question
    questionEl.textContent = questionArray[i].question;
    quizContainer.appendChild(questionEl);
    quizContainer.appendChild(choiceEl);
        
    for (j = 0; j < questionArray[i].choices.length; j++){
        
            var myBtn = document.createElement("BUTTON");
            myBtn.innerHTML = questionArray[i].choices[j];
            myBtn.setAttribute("id", j);
            choiceEl.appendChild(myBtn)

            myBtn = document.getElementById(j);
            myBtn.addEventListener("click", function (e) {

            // variables storing clicked answer and actual answer
            // parseFloat to convert clickedAnswer from string to int
            var clickedAnswer = parseFloat(e.target.id);
            var actualAnswer = questionArray[i].answer;
            // console.log("correct answer is " + questionArray[i].answer);
            // console.log("chosen answer is " + clickedAnswer);

            // compare chosen answer with correct answer
            if (clickedAnswer === actualAnswer) {
                console.log("Correct!");
                correctAnswers++;
                i++;
                removeBtn();
                buildQuiz();
            } else {
                timeLeft = timeLeft - 5;
                console.log("Wrong!");
                i++;
                removeBtn();
                buildQuiz();
            }
        });
    }
}

function removeBtn() {
    while(choiceEl.hasChildNodes()) {
        choiceEl.removeChild(choiceEl.firstChild);
    }
}

function removeQuiz() {
    while(quizContainer.hasChildNodes()) {
        quizContainer.removeChild(quizContainer.firstChild);
    }
}

// run after user has finished test or timeLeft === 0
var showResults = function() {
    removeBtn();
    removeQuiz();
    var scoreReadout = document.createElement("P");
    scoreReadout.innerText = "All done! Your score was " + correctAnswers + "/" + questionArray.length + ". Would you like immortalize your score on the LEADERBOARD OF ETERNITY";
    quizContainer.appendChild(scoreReadout);

    var submitBtn = document.createElement("BUTTON");
    submitBtn.innerHTML = "yeah sure";
    quizContainer.appendChild(submitBtn);
    // place highscore logic here

    var restartBtn = document.createElement("BUTTON");
    restartBtn.innerHTML = "Click Here to Play Again";
    quizContainer.appendChild(restartBtn);
    restartBtn.addEventListener("click", function(){
        removeQuiz();
        startGame();
    });
}

// Timer that counts down from 60
var countdown = function() {

    // Sets amount of time in the countdown
    timeLeft = 100;
  
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
            showResults();
        }
    }, 1000); // Refers to miliseconds per timer tick 1000 = 1s
};

// Clears welcome message and start button on game start
var clearStart = function() {
    title.textContent = '';
};

var startGame = function() {
    i = 0;
    timeLeft = 60;
    clearStart();
    countdown();
    buildQuiz();
};

// It works don't touch it
startBtn.addEventListener("click", function() {
    startGame();
});