const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreBar = document.querySelector('#scoreBar');
const scoreText = document.querySelector('#score');
const scoreBarFull = document.querySelector('#scoreBarFull');

let currentQuestions = {}
let approvingAnswers = true
let score = 0
let questionsCounter = 0
var availableQuestions = []

let questions = [
    {
    question: 'Which of the following vegetables is not one of the ingredients of V-8 juice?',
    choice1: 'beet',
    choice2: 'carrot',
    choice3: 'spinach',
    choice4: 'cabbage',
    answer: 4,
    },
    {
    question:'What is the main ingredient in vichyssoise?',
    choice1: 'lima beans', 
    choice2: 'clams',   
    choice3: 'tomatoes',  
    choice4: 'potatoes',
    answer: 4,
    },
    {
    question: 'What country produces the most potatoes?',
    choice1: 'China',  
    choice2: 'United States', 
    choice3: 'Ireland', 
    choice4: 'Russia', 
    answer: 1,
    },
    {   
    question: 'In the drink called a zombie, what is the main alcoholic ingredient?',
    choice1: 'beer',    
    choice2: 'brandy',  
    choice3: 'rum', 
    choice4: 'whiskey',
    answer: 4,
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

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    scoreText.innerText = "Question $(questionCounter) of (MAX_QUESTIONS)"
    scoreBarFull.style.width = '${(questioncounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions(questionsIndex)
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestion.splice(questionsIndex, 1)

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

        selectedAnswer.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedAnswer.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
    startGame ()