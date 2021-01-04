// VARIABLES
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container")

var quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "numbers", correct: false },
            { text: "alerts", correct: true }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: [
            { text: "quotes", correct: false },
            { text: "parenthesis", correct: false },
            { text: "square brackets", correct: false },
            { text: "curly brackets", correct: true }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            { text: "numbers and strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "all of these", correct: true }
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            { text: "parenthesis", correct: false },
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "quotes", correct: true }
        ]  
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "terminal/bash", correct: false },
            { text: "for loops", correct: false },
            { text: "console.log", correct: true }
        ]
    }
];


// VARIABLES END





// FUNCTION DEFINITIONS

// create a function to start the quiz with a timer
function startQuiz() {
    console.log("started");
    startButton.classList.add("start-btn");
    questionContainerElement.classList.remove("start-btn");

    // var startQuizPage = document.createElement("div");
    // startQuizPage.innerHTML = 
    //     "<h2>Coding Quiz Challenge</h2>" +
    //     "<p>Try to answer the following code-related questions within the time limit." +
    //     "Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>" +
    //     "<button>Start Quiz</button>";
    // startQuizPage.appendChild("#quiz-wrapper");
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

startButton.addEventListener("click", startQuiz);

// EVENT LISTENERS END