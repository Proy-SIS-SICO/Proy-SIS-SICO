const quizData = [
    {
        question: "1. ¿Ha pensado que seria mejor morirse o ha deseado estar muerto?",
        a: "Si",
        b: "No", 
        correct: "a",
    },
    {
        question: "2. ¿Ha querido hacerse daño?",
        a: "Si",
        b: "No", 
        correct: "a",
    },
    {
        question: "3. ¿Ha pensado en el suicidio?",
        a: "Si",
        b: "No", 
        correct: "a",
    },
    {
        question: "4. ¿Ha planeado suicidarse?",
        a: "Si",
        b: "No", 
        correct: "a",
    },
    {
        question: "5. ¿Ha intentado suicidarse?",
        a: "Si",
        b: "No", 
        correct: "a",
    },
    {
        question: "6. ¿Alguna vez ha intentado suicidarse?",
        a: "Si",
        b: "No", 
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer   
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {

            if(score<=2){
                quiz.innerHTML = `
            
                <h2>Riesgo actual Ligero</h2>

                <button onclick="location.reload()">Reload</button>            
                `
            }else if(score<=4){
                quiz.innerHTML = `
            
                <h2>Riesgo actual Moderado</h2>

                <button onclick="location.reload()">Reload</button>            
                `
            }else if(score<=6){
                quiz.innerHTML = `
            
                <h2>Por favor conctata a un profesional</h2>
                <li><a href="/Profesionales.html">Profesionales</a></li>
                <button onclick="location.reload()">Reload</button>            
                `
            }
            
        }
    }
})