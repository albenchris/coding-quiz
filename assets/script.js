// VARIABLES
var timerEl = document.getElementById("timer");
var timerValue = 60;
var viewHighScoresButton = document.getElementById("view-high-scores");
var scoreIdCounter = 0;
var highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];
var maxHighScores = 5;

var introContainerEl = document.getElementById("intro-container");
var startButton = document.getElementById("start-btn");

var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var correctEl = document.getElementById("correct-answer");
var wrongEl = document.getElementById("wrong-answer");
var shuffledQuestions, currentQuestionIndex;

var quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "alerts", correct: true },
            { text: "booleans", correct: false },
            { text: "numbers", correct: false }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: [
            { text: "parenthesis", correct: false },
            { text: "square brackets", correct: false },
            { text: "curly brackets", correct: true },
            { text: "quotes", correct: false }
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
            { text: "quotes", correct: true },
            { text: "parenthesis", correct: false },
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false }
        ]  
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "terminal/bash", correct: false },
            { text: "console.log", correct: true },
            { text: "for loops", correct: false },
        ]
    }
];

var resultsContainerEl = document.getElementById("results-container");
var saveHighScoreButton = document.getElementById("save-high-score");

var highScoresContainerEl = document.getElementById("high-scores-container");
var highScoresListEl = document.getElementById("high-scores-list");
var tryAgainButton = document.getElementById("try-again");
// VARIABLES END

// FUNCTION DEFINITIONS
// Build quiz functions start
function introduceQuiz() {
    timerValue = 60;
    viewHighScoresButton.classList.remove("hide");
    timerEl.classList.remove("hide");

    resultsContainerEl.classList.add("hide");
    highScoresContainerEl.classList.add("hide");

    introContainerEl.classList.remove("hide");
};

function startQuiz() {
    introContainerEl.classList.add("hide");

    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide");

    startTimer();
    showNextQuestion();
};

function startTimer() {
    var timerInterval = setInterval(function() {
        if (timerValue >= 1 && shuffledQuestions.length > currentQuestionIndex) {
            timerEl.textContent = "Time Left: " + timerValue + "s";
            timerValue--;
        } else if (timerValue <= 0) {
            showHighScoresList();
        } else {
            timerEl.textContent = "Time Left: " + timerValue + "s";
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000); 
};

function showQuestion(question) {
    if (shuffledQuestions.length > currentQuestionIndex) {
        questionEl.innerText = question.question;
        question.answers.forEach(answer => {
            var button = document.createElement("button")
            button.innerText = answer.text
            button.classList.add("btn")
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click", answerChoice)
            answersEl.appendChild(button)
        });
    } else {
        endQuiz();
    }
};

function showNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function resetState() {
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
};

function endQuiz() {
    questionContainerEl.classList.add("hide");
    resultsContainerEl.classList.remove("hide");

    var userScore = document.getElementById("score");
    userScore.textContent = timerValue;
};
// Build quiz functions end

// Answer functions start
function answerChoice(event) {
    var selectedAnswer = event.target;
    var correct = selectedAnswer.dataset.correct;
    if (correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    } 
};

function correctAnswer() {
    wrongEl.classList.add("hide");
    correctEl.classList.remove("hide");

    currentQuestionIndex++;
    showNextQuestion();
};

function wrongAnswer() {
    correctEl.classList.add("hide");
    wrongEl.classList.remove("hide");

    timerValue = timerValue - 10;
    currentQuestionIndex++;
    showNextQuestion();
};
// Answer functions end

// High score functions start
function saveScore(event) {
    event.preventDefault();

    var userInitials = document.getElementById("user-initials");

    var score = {
        score: timerValue,
        initials: userInitials.value
    };
    highScoresArr.push(score);
    highScoresArr.sort( (a,b) => b.score - a.score);
    highScoresArr.splice(5);

    localStorage.setItem("highScoresArr", JSON.stringify(highScoresArr));

    showHighScoresList();
};

function showHighScoresList() {
    viewHighScoresButton.classList.add("hide");
    timerEl.classList.add("hide");
    introContainerEl.classList.add("hide");
    questionContainerEl.classList.add("hide");
    wrongEl.classList.add("hide");
    correctEl.classList.add("hide");
    resultsContainerEl.classList.add("hide");
    
    highScoresContainerEl.classList.remove("hide");

    highScoresListEl.innerHTML = highScoresArr.map(score => {
        return `<li>${score.initials}<span> , </span>${score.score}</li>`;
    })
    .join("");
};
// High score functions end
// FUNCTION DEFINITIONS END

// EVENT LISTENERS
viewHighScoresButton.addEventListener("click", showHighScoresList);
startButton.addEventListener("click", startQuiz);
resultsContainerEl.addEventListener("submit", saveScore);
tryAgainButton.addEventListener("click", introduceQuiz);
// EVENT LISTENERS END