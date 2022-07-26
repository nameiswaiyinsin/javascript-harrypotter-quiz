const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const progressText = document.getElementById('progressText');
const question = document.getElementById("question");
const scoreText = document.getElementById('score');
const correctBonus = 10;
const maxQuestions = 10;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

/**
 * Game Questions
 */
let questions = [
    {
        question: "What does Harry accidentally do when he goes to the zoo?",
        choice1: "Make the glass in the snake enclosure disappear",
        choice2: "Teaches the swans to sing",
        choice3: "Turns a turtle gold",
        choice4: "Turns the zookeeper into stone",
        answer: '1'
    },
    {
        question: "What's Harry's mum Lily's surname before she marries Harry's dad?",
        choice1: "Peters",
        choice2: "Smith",
        choice3: "Evans",
        choice4: "Collins",
        answer: '3'
    },
    {
        question: "What's the name of Dudley Dursely's dad?",
        choice1: "Victor",
        choice2: "Ivan",
        choice3: "Vernon",
        choice4: "Vesuvius",
        answer: '3'
    },
    {
        question: "How many Harry Potter books are there in total?",
        choice1: "5",
        choice2: "12",
        choice3: "7",
        choice4: "1",
        answer: '3'
    },
    {
        question: "Who wrote them all?",
        choice1: "Dav Pilkey",
        choice2: "J.K. Rowling",
        choice3: "David Walliams",
        choice4: "Anthony McPartlin and Declan Donnelly",
        answer: '2'
    },
    {
        question: "In which year was Harry born?",
        choice1: "1991",
        choice2: "1975",
        choice3: "2001",
        choice4: "1980",
        answer: '4'
    },
    {
        question: "What shape scar does Harry have on his forehead?",
        choice1: "A cat",
        choice2: "A moon",
        choice3: "A fidget spinner",
        choice4: "A lightning bolt",
        answer: '4'
    },
    {
        question: "Who does Harry live with before going to Hogwarts?",
        choice1: "The Simpsons",
        choice2: "The Menaces",
        choice3: "The Dursleys",
        choice4: "The Sheerans",
        answer: '3'
    },
    {
        question: "Can you name the other 3 Hogwarts houses?",
        choice1: "Slytherin, Hufflepuff and Ravenclaw",
        choice2: "Slytherin, Hufflepuff and Bumblebee",
        choice3: "Hufflepuff, Bumblebee and Catface",
        choice4: "Stormzy, Sheeran and Hufflepuff",
        answer: '1'
    },
    {
        question: "What is a 'muggle'?",
        choice1: "A type of puppet",
        choice2: "A type of cup",
        choice3: "Non magical people",
        choice4: "A type of outrageous haircut",
        answer: '3'
    },
];

/**
 * Start Game function
 */
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * Selects random questions from available list
 */
function getNewQuestion() {
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    if (availableQuestions.length === 0 || questionCounter >= maxQuestions){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("end.html");
    }

    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

/**
 * Adds event listener for clicking answer options
 */
choices.forEach(choice => {
    choice.addEventListener('click', (event) => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

/**
 * Increments the score
 * @param {number} num - bonus to be applied to the score
 */
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

startGame();

