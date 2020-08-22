var title = document.getElementById('title-box');
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
let timeLeft = "";
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');

const questions = [
    
    // IMPORTANT when checking correct answers from question array
    //  subtract 1 from answer (array counts starting from 0) so q1 answer be 3 in array
    { // Array 0
        question: "Inside of which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<js>", "<scripting>", "<script>"],
        answer: 4
    }, 
    { // Array 1
        question: "[ a = 8 + '8'; ] What is the string value of a?",
        choices: ["16", "Run Time Error", "88", "Null"],
        answer: 3
    }, 
    { // Array 2
        question: "Which of the following will write the message “Hello World” in an alert box?",
        choices: ["alertBox('Hello World!)", "alert(Hello World!)", "msgAlert('Hello World!')", "alert('Hello World!')"],
        answer: 4
    }, 
    { // Array 3
        question: "How do you find the minimum of x and y using JavaScript?",
        choices: ["Math.min(x,y)", "min(x,y);", "Math.min(xy)", "min(xy);"],
        answer: 1
    }, 
    { // Array 4
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        choices: ["catch", "default", "try", "label"],
        answer: 2
    }, 
    { // Array 5
        question: "[ Boolean(3<7) ] What will the code return?",
        choices: ["true", "false", "NaN", "SyntaxError"],
        answer: 1
    }, 
    { // Array 6
        question: "JavaScript is a ___ -side programming language.",
        choices: ["Client", "Server", "Both", "Neither"],
        answer:  3
    }, 
    { // Array 7
        question: "Which method will you use to round the number 24.76 to the nearest integer?",
        choices: ["round(24.76);", "rnd(24.76);", "Math.rnd(24.76);", "Math.round(24.76);"],
        answer: 4
    }
];

// {
// question: "Which answer = k",
// choices: ["h", "j", "k", "l"],
// answer: 3
// }

var buildQuiz = function(){
    // stores output to go to HTML
    var output = [];

    // for each question
    questions.forEach(
        (currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const choices = [];

            // and for each available answer...
            for(choiceNumber in currentQuestion.choices){

                // ...add an html radio button
                choices.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${choiceNumber}">
                        ${choiceNumber} :
                        ${currentQuestion.choices[choiceNumber]}
                    </label>`
                );
            }

            // add this question and its choices to the output
            output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="choices"> ${choices.join('')} </div>`
            );
        }
    );

    // combine output list into one string of HTML
    quizContainer.innerHTML = output.join('');
}

// run after user has finished test or timeLeft === 0
var showResults = function() {}

// Timer that counts down from 60
var countdown = function() {

    // Sets amount of time in the countdown
    timeLeft = 80;
  
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

/* for ( var i = 0; i < questions.length; i++ ) {
    question = questions[i][0];
    var question = document.createElement("div");
    var options = questions[i].choices;
    document.body.appendChild(document.createElement("br"));
        var name = "radio"+i; 
    for ( var opt in options ) {
    
        var radioEle = document.createElement("input");
        radioEle.type = "radio";          
        radioEle.value = options[opt];
        radioEle.name = name;
        document.body.appendChild(radioEle);
        var label = document.createElement("Label");
        label.innerHTML = options[opt];
        document.body.appendChild(label);
        document.body.appendChild(document.createElement("br"));
    }
} */