const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "F. Scott Fitzgerald", "William Faulkner", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "Which country is famous for the maple leaf?",
        options: ["United States", "Canada", "Russia", "Australia"],
        answer: "Canada"
    },
    {
        question: "What country has the largest underground tunnel?",
        options: ["Italy", "Russia", "France", "Norway"],
        answer: "Norway"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Dollar", "Euro"],
        answer: "Yen"
    }
];

// Initialize variables
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let selectedAnswer = null;
let progress = 0;
let progressBarValue = 0;

// Function to load questions sequentially
function loadQuestions() {
    if (progress >= questions.length) {
        // Handle the end of the quiz
        alert(
            `Quiz complete! Your final score is ${score}. You answered ${correctAnswers} out of ${questions.length} questions correctly.`
        );
        // Reset the variables for a new quiz
        progress = 0;
        score = 0;
        correctAnswers = 0;
        return;
    }

    const currentQuestion = questions[progress];

    // Call the function to display the question and answer options
    displayQuestion(currentQuestion);
}

// Function to display questions and answer options
function displayQuestion(question) {
    // Display the question
    const questionContainer = document.getElementById("questionText");
    questionContainer.textContent = question.question;

    // Display the answer options
    const answerContainer = document.getElementById("answerOptions");
    answerContainer.innerHTML = ""; // Clear previous options

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("td");
        optionElement.classList.add("answer-option");
        optionElement.textContent = option;
        optionElement.setAttribute("data-option", option); // Set a data attribute for the option
        answerContainer.appendChild(optionElement);

        optionElement.addEventListener('click', () => {
            if (selectedAnswer === option) {
                // Deselect the option if it is already selected
                selectedAnswer = null;
                optionElement.style.backgroundColor = ""; // Reset the background color
            } else {
                // Change the selected answer when a different option is clicked
                const prevOption = answerContainer.querySelector(
                    `[data-option="${selectedAnswer}"]`
                );
                if (prevOption) {
                    prevOption.style.backgroundColor = ""; // Reset the background color of the previous selection
                }
                selectedAnswer = option; // Update the selected answer
                optionElement.style.backgroundColor = "lightblue"; // Add visual indication for the selected option
            }
        });
    });
}

// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    if (progressBarValue < 10) {
        progressBarValue += 1;
        progressBar.value = progressBarValue;
    }
}

function answerQuestion() {
    updateProgressBar();
}

// Function to handle the click event on the next button
function handleNextButtonClick() {
    if (selectedAnswer === null) {
        alert("Please select an answer.");
    } else {
        const currentQuestion = questions[progress];
        if (selectedAnswer === currentQuestion.answer) {
            alert("Correct!");
            score++; // Increment the score for a correct answer
            correctAnswers++; // Increment the count of correct answers
        } else {
            alert(`Incorrect. The correct answer is: ${currentQuestion.answer}`);
            incorrectAnswers = Math.max(0, incorrectAnswers + 1); // Increment the count of incorrect answers by 1, starting from 0
        }
        progress++; // Increase the progress
        updateScoreAndProgress(); // Update the score and progress immediately
        loadQuestions(); // Load the next question
    }
}

// Function to update the score based on the user's answer
function updateScore(isCorrect) {
    if (isCorrect) {
        score++;
        correctAnswers++;
    } else {
        incorrectAnswers = Math.max(0, incorrectAnswers + 1); // Increment the count of incorrect answers by 1, starting from 0
    }
    updateScoreAndProgress(); // Call the function to update the UI with the new values
}

// Function to update the score and progress
function updateScoreAndProgress() {
    const scoreElement = document.getElementById("scoreValue");
    const correctElement = document.getElementById("correctAnswers");
    const incorrectElement = document.getElementById("incorrectAnswers");
    scoreElement.textContent = score;
    correctElement.textContent = correctAnswers;
    incorrectElement.textContent = incorrectAnswers;
}

// Function to initialize the quiz
function initializeQuiz() {
    loadQuestions();
}

// Call the initializeQuiz function when the window loads
window.onload = initializeQuiz;

