// VARIABLES
var timerEl = document.getElementById("timer");
var timerValue = 60;
var userScore = [];
var scoreIdCounter = 0;

var viewHighScoresButton = document.getElementById("view-high-score");

var introContainerElement = document.getElementById("intro-container");
var startButton = document.getElementById("start-btn");

var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answersElement = document.getElementById("answers");
var correctEl = document.getElementById("correct-answer");
var wrongEl = document.getElementById("wrong-answer");
var shuffledQuestions, currentQuestionIndex;

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

var resultsContainerElement = document.getElementById("results-container");
var saveHighScoreButton = document.getElementById("save-high-score");

var highScoreContainerElement = document.getElementById("high-score-container");
var highScoresList = document.getElementById("high-score")
// VARIABLES END

// FUNCTION DEFINITIONS
function startQuiz() {
    introContainerElement.classList.add("hide");
    highScoreContainerElement.classList.add("hide");
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    startTimer();
    showNextQuestion();
};

function startTimer() {
    var timerInterval = setInterval(function() {
        if (timerValue >= 1 && shuffledQuestions.length > currentQuestionIndex) {
            timerEl.textContent = "Time Left: " + timerValue + "s";
            timerValue--;
        } else if (timerValue <= 0) {
            timerValue = 0;
            timerEl.textContent = "Time Left: " + timerValue + "s";
            clearInterval(timerInterval);
            showHighScore();
        } else {
            timerEl.textContent = "Time Left: " + timerValue + "s";
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000); 
};

// create functions to display questions in a slideshow format
function showQuestion(question) {
    if (shuffledQuestions.length > currentQuestionIndex) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            var button = document.createElement("button")
            button.innerText = answer.text
            button.classList.add("btn")
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click", answerChoice)
            answersElement.appendChild(button)
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
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
};

// create a funtion to subtract time from the clock when user selects wrong answer
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

function endQuiz() {
    questionContainerElement.classList.add("hide");
    resultsContainerElement.classList.remove("hide");
    var userScore = document.getElementById("score");
    userScore.textContent = timerValue;
};

function saveScore(event) {
    event.preventDefault();
    var user = document.getElementById("user-initials").value;
    var score = timerValue;

    if (!user || score === 0) {
        alert("You must enter initials!");
        return false;
    } else {
        var userScoreObj = {
            user: user,
            score: score
        };
        userScore.push(userScoreObj);
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("score", JSON.stringify(score));
        showHighScore;
    }

    userScoreObj.id = scoreIdCounter;    
};

function showHighScore() {
    timerEl.classList.add("hide");
    introContainerElement.classList.add("hide");
    questionContainerElement.classList.add("hide");
    resultsContainerElement.classList.add("hide");
    highScoreContainerElement.classList.remove("hide");

    var savedUsers = localStorage.getItem("user");
    var savedScores = localStorage.getItem("score");

    if (!savedUsers || !savedScores) {
        return false;
    }

    savedUsers = JSON.parse(savedUsers);

    var savedScoreItem = document.createElement("div");
    savedScoreItem.setAttribute("data-score-id", scoreIdCounter)
    savedScoreItem.innerHTML = "<span>[ </span>" + savedUsers + " - " + savedScores + "<span> ]</span>";
    highScoresList.appendChild(savedScoreItem);
};
// FUNCTION DEFINITIONS END

// EVENT LISTENERS
startButton.addEventListener("click", startQuiz);
viewHighScoresButton.addEventListener("click", showHighScore);
resultsContainerElement.addEventListener("submit", saveScore);
// EVENT LISTENERS END