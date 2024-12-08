// Variable declaration
const question = document.querySelector("#question"); // Questions
const answersBox = document.querySelector("#answers-box"); // Alternatives
const quizzContainer = document.querySelector("#quizz-container"); // Quizz
const scoreContainer = document.querySelector("#score-container"); // Score board
let letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0; // To find out which question the quizz is on

// Questions
const questions = [
    {
        "question": "What was PHP developed for?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Operating system",
                "correct": false
            },
            {
                "answer": "Database",
                "correct": false
            },
        ]
    },
    {
        "question": "One way to declare a variable in JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "What is the id selector in CSS?",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },
]

// Quiz replacement for first question
// Automating the function of going to the first question and restarting the game
function init() {
    createQuestion(0); //Create the first question
}

// Create question
function createQuestion(i) {

    // To clear alternatives of the last question
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function (btn) {
        btn.remove();
    })
    // To change the text of the answer
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question; // Question Text
    questionNumber.textContent = i + 1; // Question Number


    // To insert alternatives
    questions[i].answers.forEach(function (answer, i) {

        // Create the Quiz Button Template
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        // Validation of whether the alternative is correct or not
        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // Remove unused classes ('hide' and 'answer-template')
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        // Insert the alternative on the screen
        // Whenever a new alternative is entered, it will be inserted one after the other.
        answersBox.appendChild(answerTemplate);

        // Insert a button click event
        answerTemplate.addEventListener("click", function () {
            checkAnswer(this)
        });
    });

    actualQuestion++; // Increment the question number
}

// Checking user response
function checkAnswer(btn) {

    // All buttons present in the document
    const buttons = answersBox.querySelectorAll("button");

    // Check if the answer is correct and then add classes to the buttons
    buttons.forEach(function (button) {
        if (button.getAttribute("correct-answer") === "true") {
            button.classList.add("correct-answer");

            // Check if the user got the question right
            if (btn === button) {
                points++; // Make the points increment
            }

        } else {
            button.classList.add("wrong-answer");
        }
    });

    // Display the next question to the user
    nextQuestion();
}

// Display the next question to the user
function nextQuestion() {

    // Time for user to see responses
    setTimeout(function () {
        // Check if there are still questions
        if (actualQuestion >= questions.length) {
            // Present the success message
            showSuccessMessage();
            return;
        }
        createQuestion(actualQuestion);
    }, 1500)
}

// Function that displays the game's final screen
function showSuccessMessage() {

    hideOrShowQuizz();

    // Change the data on the success screen to the correct data
    // Calculate score
    const score = ((points / questions.length) * 100).toFixed(2);
    const displayScore = document.querySelector("#display-score span");
    displayScore.textContent = score.toString();

    // Change the correct number of questions answered correctly - points
    const correctAnswers = document.querySelector("#correct-answers")
    correctAnswers.textContent = points;

    // Change the correct number of questions
    const totalNumberQuestions = document.querySelector("#questions-qty")
    totalNumberQuestions.textContent = questions.length;
}

// Show or hide the Score
function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

// Restart Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function () {
    // Reset the game score
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();
});

// Quiz Initialization
init();