const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-button');
const resultsText = document.getElementById('results');

// Replace with your own questions and answers as arrays of objects
const questions = [
  {
    question: "What is a strong password made of?",
    answers: [
      "Short and easy to remember words",
      "A combination of uppercase and lowercase letters, numbers, and symbols",
      "Your pet's name",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is phishing?",
    answers: [
      "A type of deep-sea fish",
      "A legitimate way to confirm user information",
      "An attempt to trick someone into revealing personal information",
    ],
    correctAnswer: 2,
  },
  // Add more questions here...
];

let score = 0;

function createQuestion(questionData) {
  const questionElement = document.createElement('p');
  questionElement.textContent = questionData.question;

  const answerContainer = document.createElement('div');

  questionData.answers.forEach((answer, answerIndex) => {
    const answerElement = document.createElement('input');
    answerElement.type = 'radio';
    answerElement.id = `question-${questionIndex}-answer-${answerIndex}`;
    answerElement.name = `question-${questionIndex}`;
    answerElement.value = answerIndex;

    const labelElement = document.createElement('label');
    labelElement.textContent = answer;
    labelElement.htmlFor = answerElement.id;

    answerContainer.appendChild(answerElement);
    answerContainer.appendChild(labelElement);
    answerContainer.appendChild(document.createElement('br'));
  });

  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(answerContainer);
}

questions.forEach(createQuestion);

submitButton.addEventListener('click', () => {
  score = 0;
  questions.forEach((questionData, questionIndex) => {
    const selectedAnswer = document.querySelector(`input[name=question-${questionIndex}]:checked`);
    if (selectedAnswer && selectedAnswer.value == questionData.correctAnswer) {
      score++;
    }
  });

  resultsText.textContent = `Your score is ${score} out of ${questions.length}`;
});
