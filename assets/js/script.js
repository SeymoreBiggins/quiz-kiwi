var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var title = document.getElementById('title-box');

var questions = [

    // IMPORTANT when checking correct answers from question array
    //  subtract 1 from answer (array counts starting from 0) so q1 answer be 3 in array
    {
        question: "Inside of which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<js>", "<scripting>", "<script>"],
        answer: 4
    },
    {
        question: "[ a = 8 + '8'; ] What is the string value of a?",
        choices: ["16", "Run Time Error", "88", "Null"],
        answer: 3
    },
    {
        question: "Which of the following will write the message “Hello World” in an alert box?",
        choices: ["alertBox('Hello World!)", "alert(Hello World!)", "msgAlert('Hello World!')", "alert('Hello World!')"],
        answer: 4
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        choices: ["Math.min(x,y)", "min(x,y);", "Math.min(xy)", "min(xy);"],
        answer: 1
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        choices: ["catch", "default", "try", "label"],
        answer: 2
    },
    {
        question: "[ Boolean(3<7) ] What will the code return?",
        choices: ["true", "false", "NaN", "SyntaxError"],
        answer: 1
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        choices: ["Client", "Server", "Both", "Neither"],
        answer:  3
    },
    {
        question: "Which method will you use to round the number 24.76 to the nearest integer?",
        choices: ["round(24.76);", "rnd(24.76);", "Math.rnd(24.76);", "Math.round(24.76);"],
        answer: 4
    }
];

// Timer that counts down from 60
function countdown() {
    clearStart();

    // Sets amount of time in the countdown
    var timeLeft = 80;
  
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

// Clears welcome message and start button on game start
function clearStart() {
    title.textContent = '';
}

startBtn.onclick = countdown;