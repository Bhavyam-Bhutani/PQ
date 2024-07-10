const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-button');
const resultDisplay = document.getElementById('result');

// Define quiz questions and answers
const questions = [
  {
    question: "The bank is asking you to verify your account information by clicking a link in their email. Should you click the link?",
    answers: [
      { text: "Yes, it's urgent to verify my account.", isCorrect: false },
      { text: "No, I'll log in to my bank account directly.", isCorrect: true },
    ],
  },
  {
    question: "You receive an email with a subject line about winning a free gift card. Is this email legitimate?",
    answers: [
      { text: "Yes, free gift cards are real!", isCorrect: false },
      { text: "No, it might be a phishing attempt to steal my information.", isCorrect: true },
    ],
  },
  // Add more questions here!
];

// Function to generate a question element
function createQuestionElement(question) {
  const questionElement = document.createElement('div');
  questionElement.classList.add('question');

  const questionText = document.createElement('p');
  questionText.innerText = question.question;

  questionElement.appendChild(questionText);

  question.answers.forEach(answer => {
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = `question-${question.index}`; // Use unique name for each question
    radioInput.value = answer.isCorrect;

    const radioLabel = document.createElement('label');
    radioLabel.innerText = answer.text;
    radioLabel.htmlFor = radioInput.id;

    questionElement.appendChild(radioInput);
    questionElement.appendChild(radioLabel);
  });

  return questionElement;
}

// Generate quiz questions
questions.forEach((question, index) => {
  question.index = index; // Add index for answer naming
  const questionElement = createQuestionElement(question);
  quizContainer.appendChild(questionElement);
});

let score = 0;

submitButton.addEventListener('click', () => {
  const answers = document.querySelectorAll('input[type="radio"]:checked');

  score = 0; // Reset score for multiple attempts
  questions.forEach((question, index) => {
    const answer = answers[index];
    if (answer && answer.value) {
      score += question.answers.find(a => a.isCorrect === answer.value).isCorrect;
    }
  });

  const resultText = `You scored ${score} out of ${questions.length} questions correctly.`;
  resultDisplay.textContent = resultText;
});
