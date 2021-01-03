// VARIABLES
var quizWrapper = document.querySelector("#quiz-wrapper");
var checkAnswerButton = document.querySelector("#check-answer");
var resultsWrapper = document.querySelector("#results");

// create variable to hold questions and answers
var quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of these"
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "terminal/bash",
            c: "for loops",
            d: "console.log"
        },
        correctAnswer: "d"
    }
];


// VARIABLES END





// FUNCTION DEFINITIONS

// create a function to start the quiz with a timer
function startQuiz() {
    var startQuizPage = document.createElement("div");
    startQuizPage.innerHTML = 
        "<h2>Coding Quiz Challenge</h2>" +
        "<p>Try to answer the following code-related questions within the time limit." +
        "Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>" +
        "<button>Start Quiz</button>";
    startQuizPage.appendChild("#quiz-wrapper");
};

// create functions to display questions in a slideshow format
function formatQuestions() {
    
};

// create a funtion to subtract time from the clock when user selects wrong answer
function rightAnswer() {

};

function wrongAnswer() {

};

// create a funtion to end quiz when all questions answered or timer reaches 0
function endQuiz() {

};

// create a funtion to save timer value as high score with user's initials
function highScore() {

};

// FUNCTION DEFINITIONS END

startQuiz();




// EVENT LISTENERS



// EVENT LISTENERS END