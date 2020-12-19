const username = document.querySelector('//#endregionusername')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = score;

username.addEventListener('keyup',() => {
    saveScoreBtn.disabled = !username.nodeValue
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.nodeValue
    }

    highScores.push(score)

    highScore.sort((a,b) => {
        return b.score - a.score
    backBtn.on('click', function () {
            location.href = "index.html";
    })

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
}