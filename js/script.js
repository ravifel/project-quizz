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
        "question": "PHP foi desenvolvido para qual fim?",
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
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
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
        "question": "Qual o seletor de id no CSS?",
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
    //Create the first question
    createQuestion(0);
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
            console.log(this)
        });
    });

    // Increment the question number
    actualQuestion++;
}

// Quiz Initialization
init();