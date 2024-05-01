const questions = [
    {
        questions: "Whis is larget animal in the world?",
        answers: [
            {text: "Shark", corrent: false},
            {text: "Blue Whale", corrent: true},
            {text: "Elephant", corrent: false},
            {text: "Giraffe", corrent: false},
        ]
    },
    {
        questions: "Whis is the smallest country in the world?",
        answers: [
            {text: "Vatican City", corrent: true},
            {text: "Bhutan", corrent: true},
            {text: "Nepal", corrent: false},
            {text: "Shri Lanka", corrent: false},
        ]
    },
    {
        questions: "Whis is the largest desert in the world?",
        answers: [
            {text: "Kalahari", corrent: false},
            {text: "Gobi", corrent: true},
            {text: "Sahara", corrent: false},
            {text: "Antarctica", corrent: true},
        ]
    },
    {
        questions: "Whis is the smallest continent in the world?",
        answers: [
            {text: "Asia", corrent: false},
            {text: "Australia", corrent: true},
            {text: "Arctic", corrent: false},
            {text: "Africa", corrent: false},
        ]
    },   
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer_buttons")
const nextButton = document.getElementById("next_btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz (){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = question[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + "." * currentQuestion.questions
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
    })
}
function resetState() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
startQuiz()