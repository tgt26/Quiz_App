/*jshint esversion: 6 */

const questions = [{
    question: 'What is the capital of the United States?',
    option1: 'New York, NY',
    option2: 'Boston, MA',
    option3: 'Washington, D.C',
    option4: 'Houston, TX',
    answer: '3'
}, {
    question: 'Who is the CEO of Apple?',
    option1: 'Bill Gates',
    option2: 'Jeff Bezos',
    option3: 'Tim Cook',
    option4: 'Gavin Belson',
    answer: '3'
}, {
    question: 'In which fast food chain can you order a Jamocha Shake?',
    option1: 'McDonald\'s',
    option2: 'Burger King',
    option3: 'Papa John\'s',
    option4: 'Arby\'s',
    answer: '4'
}];
// Declarations
let currentQuestion = 0;
let score = 0;

let quizContainer = document.querySelector('.quiz-container');
const questionContainer = document.querySelector('.question-container');

let option1 = document.getElementById('opt1');
let option2 = document.getElementById('opt2');
let option3 = document.getElementById('opt3');
let option4 = document.getElementById('opt4');

const totalQuestion = questions.length;
const nextBtn = document.querySelector('.next-btn');

const resultContainer = document.querySelector('.result');
const resultText = document.querySelector('.result-inner-text');


function loadQuestion(questionIndex) {
    let q = questions[questionIndex];
    questionContainer.textContent = (questionIndex + 1) + '. ' + q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
}

nextBtn.addEventListener('click', function () {
    let selectedOption = document.querySelector('input[type=radio]:checked');

    if (!selectedOption) {
        alert('Please select an answer');
        return;
    }
    let answer = selectedOption.value;

    if (questions[currentQuestion].answer === answer) {
        score += 10;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion == totalQuestion - 1) {
        nextBtn.textContent = 'Complete';
    }

    if (currentQuestion == totalQuestion) {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'inline-grid';
        resultText.innerHTML = 'Your Score: ' + score + '!';
        return;
    }
    loadQuestion(currentQuestion);
});

loadQuestion(currentQuestion);