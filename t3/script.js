const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
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
const scoreEl = document.getElementById('score')
const submitBtn = document.getElementById('submit')
submitBtn.setAttribute("currentpage", 0)

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach( answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach( answerEl => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    
    if(answer) {
        let currentpage = submitBtn.getAttribute("currentpage") == 0 ? 1 : 0
        submitBtn.setAttribute("currentpage", currentpage)

        if (currentpage){
            submitBtn.innerHTML = "Next question"
            
            answerEls.forEach( answerEl => {
                answerEl.setAttribute("disabled", "disabled")
            })
            
            const checkedEl = document.getElementById(answer).parentElement
            
            if(answer === quizData[currentQuiz].correct) {
                score++
                scoreEl.innerHTML = `Score: ${score}`;
                checkedEl.className = "correct-answer"
            }else {
                checkedEl.className = "wrong-answer"

            }
            
        }else{
            submitBtn.innerHTML = "Submit"
            
            answerEls.forEach( answerEl => {
                answerEl.disabled = false
                if (answerEl.parentElement.classList.length > 0) {
                    answerEl.parentElement.classList.remove(...answerEl.parentElement.classList);
                  }
            })

            currentQuiz++

            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = 
                    `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>`
            }
    
        }
    }

})