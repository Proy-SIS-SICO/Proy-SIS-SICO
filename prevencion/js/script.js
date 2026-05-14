const quizData = [
    {
        question: "1. Estado de ánimo ansioso",
        a: "Ausente",
        b: "Leve",
        c: "Moderado",
        d: "Grave",  
        correct: "b",
    },
    {
        question: "2. Tensión.",
        a: "Ausente",
        b: "Leve",
        c: "Moderado",
        d: "Grave",  
        correct: "b",
    },
    {
        question: "3. Temores.",
        a: "Ausente",
        b: "Leve",
        c: "Moderado",
        d: "Grave",  
        correct: "b",
    },
    {
        question: "4. Insomnio.",
        innerText:"",
        a: "Ausente",
        b: "Leve",
        c: "Moderado",
        d: "Grave",  
        correct: "b",
    },
    {
        question: "5. Intelectual (cognitivo)",
        a: "Ausente",
        b: "Leve",
        c: "Moderado",
        d: "Grave",  
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
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
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
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

            quiz.innerHTML = `
            
            <h2>You ${score}/${quizData.length} </h2>

            <button onclick="location.reload()">Reload</button>            
            `
        }
    }
})