// Array of general knowledge questions
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
        answer: "Mandarin Chinese"
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

let selectedAnswer = null; // Variable to keep track of the selected answer

// Function to load a random question
function loadQuestions() {
    // Select a random index from the questions array
    const randomIndex = Math.floor(Math.random() * questions.length);

    // Retrieve the question object at the random index
    const randomQuestion = questions[randomIndex];

    // Call the function to display the question and answer options
    displayQuestion(randomQuestion);
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

// Call the loadQuestions function to load a random question
loadQuestions();

// Function to handle user's answer selection
function handleAnswerSelection(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is: " + correctAnswer);
    }
    // Reset the selected answer for the next question
    selectedAnswer = null;
    // Load a new question after handling the current answer
    loadQuestions();
    // Update the score and progress
    updateScoreAndProgress();
}

// Function to update the score and progress
function updateScoreAndProgress() {
    const scoreElement = document.getElementById("scoreValue");
    const correctElement = document.getElementById("correctAnswers");
    const incorrectElement = document.getElementById("incorrectAnswers");
    scoreElement.textContent = score;
    correctElement.textContent = correctAnswers;
    incorrectElement.textContent = questions.length - correctAnswers;
}

// Function to display the final result
function displayResult() {

}

// Function to handle the click event on the next button
function handleNextButtonClick() {

}

// Function to initialize the quiz
function initializeQuiz() {

}

// Call the initializeQuiz function when the window loads
window.onload = function () {
    initializeQuiz();
};
