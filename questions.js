const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreBar = document.querySelector('#scoreBar');
const scoreText = document.querySelector('#scoreText');
const scoreBarFull = document.querySelector('#scoreBarFull');
var timeE1 = document.querySelector(".time");

let currentQuestions = {}
let approvingAnswers = true
let score = 0
let questionsCounter = 0
let availableQuestions = []

let questions = [
    {
    question: 'Which of the following vegetables is not one of the ingredients of V-8 juice?',
    choice1: 'beet',
    choice2: 'carrot',
    choice3: 'spinach',
    choice4: 'cabbage',
    Answer: 4,
    },
    {
    question:'What is the main ingredient in vichyssoise?',
    choice1: 'lima beans', 
    choice2: 'clams',   
    choice3: 'tomatoes',  
    choice4: 'potatoes',
    Answer: 4,
    },
    {
    question: 'What country produces the most potatoes?',
    choice1: 'China',  
    choice2: 'United States', 
    choice3: 'Ireland', 
    choice4: 'Russia', 
    Answer: 1,
    },
    {   
    question: 'In the drink called a zombie, what is the main alcoholic ingredient?',
    choice1: 'beer',    
    choice2: 'brandy',  
    choice3: 'rum', 
    choice4: 'whiskey',
    Answer: 4,
    },            
]
console.log(question)

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
console.log(startGame)

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    scoreText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    scoreBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    console.log(availableQuestions)
    approvingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!approvingAnswers) return

        approvingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestions.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
    startGame ()
