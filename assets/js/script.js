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

let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let selectedAnswer = null;
let progress = 0;
let progressBarValue = 0;
let originalButtonColor; // Variable to store the original color of the retry button

function loadQuestions() {
    if (progress >= questions.length) {
        const progressBar = document.getElementById("progressBar");
        progressBarValue = progressBar.max; // Set the progress bar to full
        progressBar.value = progressBarValue;
        alert(
            `Quiz complete! Your final score is ${score}. You answered ${correctAnswers} out of ${questions.length} questions correctly.`
        );
        progress = 0;
        score = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        progressBarValue = 0;
        updateScoreAndProgress();
        updateRetryButtonColor(true); // Update the retry button color here with a flag to indicate the color change
    } else {
        const currentQuestion = questions[progress];
        displayQuestion(currentQuestion);
    }
}

function displayQuestion(question) {
    const questionContainer = document.getElementById("questionText");
    questionContainer.textContent = question.question;

    const answerContainer = document.getElementById("answerOptions");
    answerContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("td");
        optionElement.classList.add("answer-option");
        optionElement.textContent = option;
        optionElement.setAttribute("data-option", option);
        answerContainer.appendChild(optionElement);

        optionElement.addEventListener('click', () => {
            if (selectedAnswer === option) {
                selectedAnswer = null;
                optionElement.style.backgroundColor = "";
            } else {
                const prevOption = answerContainer.querySelector(
                    `[data-option="${selectedAnswer}"]`
                );
                if (prevOption) {
                    prevOption.style.backgroundColor = "";
                }
                selectedAnswer = option;
                optionElement.style.backgroundColor = "lightblue";
            }
        });
    });
}

function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    if (progressBarValue < progressBar.max) {
        progressBarValue += 1;
        progressBar.value = progressBarValue;
    } else {
        loadQuestions();
    }
}

function handleNextButtonClick() {
    if (progress >= questions.length) {
        alert("The quiz is already complete. Please press the 'Retry' button to start over.");
        return;
    }

    if (selectedAnswer === null) {
        alert("Please select an answer.");
    } else {
        const currentQuestion = questions[progress];
        if (selectedAnswer === currentQuestion.answer) {
            alert("Correct!");
            score++;
            correctAnswers++;
        } else {
            alert(`Incorrect. The correct answer is: ${currentQuestion.answer}`);
            incorrectAnswers++;
        }
        progress++;
        updateScoreAndProgress();

        if (progress >= questions.length) {
            const nextButton = document.getElementById("nextButton");
            nextButton.disabled = true;
        }

        updateProgressBar();
        loadQuestions();
    }
}

function handleRetryButtonClick() {
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    progress = 0;
    progressBarValue = 0;
    const progressBar = document.getElementById("progressBar");
    progressBar.value = 0;
    updateScoreAndProgress();

    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;

    const retryButton = document.getElementById("retryButton");
    retryButton.style.backgroundColor = "red";
    loadQuestions();

    resetRetryButtonColor(); // Reset the retry button color
}

const retryButton = document.getElementById("retryButton");
retryButton.addEventListener("click", handleRetryButtonClick);

function updateRetryButtonColor(changeColor) {
    const retryButton = document.getElementById("retryButton");
    if (changeColor) {
        originalButtonColor = retryButton.style.backgroundColor; // Store the original button color
        retryButton.style.backgroundColor = "red"; // Change the background color of the retry button to red
    }
}

function resetRetryButtonColor() {
    const retryButton = document.getElementById("retryButton");
    retryButton.style.backgroundColor = originalButtonColor; // Reset the background color of the retry button
}

function updateScore(isCorrect) {
    if (isCorrect) {
        score++;
        correctAnswers++;
    } else {
        incorrectAnswers = Math.max(0, incorrectAnswers + 1);
    }
    updateScoreAndProgress();
}

function updateScoreAndProgress() {
    const scoreElement = document.getElementById("scoreValue");
    const correctElement = document.getElementById("correctAnswers");
    const incorrectElement = document.getElementById("incorrectAnswers");
    scoreElement.textContent = score;
    correctElement.textContent = correctAnswers;
    incorrectElement.textContent = incorrectAnswers;
}

function initializeQuiz() {
    loadQuestions();
}

window.onload = initializeQuiz;

function validateForm() {
    var username = document.forms["registrationForm"]["username"].value;
    if (username == null || username == "" || username.length < 3) {
        alert("Username must be filled out and should be at least 3 characters long.");
        return false;
    }

    // If all validations pass, you can submit the form
    alert("Username successfully created: " + username);
    return true;
}


