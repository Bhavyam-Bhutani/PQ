const answers = {
    1: false, // Question 1: No, it's not safe
    2: true,  // Question 2: Yes, it's suspicious
    3: false  // Question 3: No, it's not safe
};

let score = 0;

function checkAnswer(questionNumber, userAnswer) {
    if (userAnswer === answers[questionNumber]) {
        score++;
    }
    if (questionNumber === 3) {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your score: ${score}/3`;

    // Reset score for replayability
    score = 0;
}
