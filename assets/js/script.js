var title = document.getElementById('title-box');
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var quizContainer = document.getElementById('quiz');
var resultsEl = document.getElementById('results');
var questionEl = document.getElementById('question');
var choiceEl = document.getElementById('choices');
let timeLeft = "";
var correctAnswers = "";

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
    if (i <= questionArray.length) {
        currentQA();
    }
}

function currentQA() {
    // display appropriate question
    console.log(questionArray[i].question);
    questionEl.textContent = questionArray[i].question;
        
    for (j = 0; j < questionArray[i].choices.length; j++){

        var myBtn = document.createElement("BUTTON");
        myBtn.innerHTML = questionArray[i].choices[j];
        myBtn.setAttribute("id", j);
        document.body.appendChild(myBtn);

        myBtn = document.getElementById(j);
        myBtn.addEventListener("click", function (e) {

            // variables storing clicked answer and actual answer
            // parseFloat to convert clickedAnswer from string to int
            var clickedAnswer = parseFloat(e.target.id);
            var actualAnswer = questionArray[i].answer;
            console.log("correct answer is " + questionArray[i].answer);
            console.log("chosen answer is " + clickedAnswer);

            // compare chosen answer with correct answer
            if (clickedAnswer === actualAnswer) {
                console.log("Correct!");
                correctAnswers++;
                i++;
                // remove buttons
                buildQuiz();
            } else {
                timeLeft = timeLeft - 5;
                console.log("Wrong!");
                i++;
                // remove buttons
                buildQuiz();
            }
        });
    }
}

// run after user has finished test or timeLeft === 0
var showResults = function() {

}

// Timer that counts down from 60
var countdown = function() {

    // Sets amount of time in the countdown
    timeLeft = 60;
  
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
        }
    }, 1000); // Refers to miliseconds per timer tick 1000 = 1s
};

// Clears welcome message and start button on game start
var clearStart = function() {
    title.textContent = '';
};

var startGame = function() {
    clearStart();
    countdown();
    buildQuiz();
    showResults();
};

// It works don't touch it
startBtn.addEventListener("click", function() {
    startGame();
});