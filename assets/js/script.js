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
        question: "Which language is the most spoken worldwide?",
        options: ["Spanish", "English", "Mandarin Chinese", "Hindi"],
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

// Function to load a random question
function loadQuestions() {
    // Select a random index from the questions array
    const randomIndex = Math.floor(Math.random() * questions.length);

    // Retrieve the question object at the random index
    const randomQuestion = questions[randomIndex];

    // Log the question, options, and answer to the console (you can replace these with your display logic)
    console.log("Question: " + randomQuestion.question);
    console.log("Options: " + randomQuestion.options.join(", "));
    console.log("Answer: " + randomQuestion.answer);
}

// Call the loadQuestions function to load a random question
loadQuestions();


// Function to display questions and answer options
function displayQuestion() {

}

// Function to handle user's answer selection
function handleAnswerSelection() {

}

// Function to update the score and progress
function updateScoreAndProgress() {

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
