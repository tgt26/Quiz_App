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
}, {
    question: 'Grand Central Terminal, Park Avenue, New York is the world\'s',
    option1: 'largest railway station',
    option2: 'highest railway station',
    option3: 'longest railway station',
    option4: 'None of the above',
    answer: '1'
}, {
    question: 'Entomology is the science that studies',
    option1: 'Behavior of human beings',
    option2: 'Insects',
    option3: 'The origin and history of technical and scientific terms',
    option4: 'The formation of rocks',
    answer: '2'
}, {
    question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of: ',
    option1: 'Asia',
    option2: 'Africa',
    option3: 'Europe',
    option4: 'Australia',
    answer: '2'
}, {
    question: 'Garampani sanctuary is located at',
    option1: 'Junagarh, Gujarat',
    option2: 'Diphu, Assam',
    option3: 'Kohima, Nagaland',
    option4: 'Gangtok, Sikkim',
    answer: '2'
}, {
    question: 'For which of the following disciplines is Nobel Prize awarded?',
    option1: 'Physics and Chemistry',
    option2: 'Physiology or Medicine',
    option3: 'Literature, Peace and Economics',
    option4: 'All of the above',
    answer: '4'
}, {
    question: 'Hitler party which came into power in 1933 is known as',
    option1: 'Labour Party',
    option2: 'Nazi Party',
    option3: 'Ku-Klux-Klan',
    option4: 'Democratic Party',
    answer: '2'
}, {
    question: 'FFC stands for',
    option1: 'Foreign Finance Corporation',
    option2: 'Film Finance Corporation',
    option3: 'Federation of Football Council',
    option4: 'None of the above',
    answer: '2'
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
        resultText.innerHTML = 'Your Score: ' + score + '/' + totalQuestion * 10;
        return;
    }
    loadQuestion(currentQuestion);
});

loadQuestion(currentQuestion);