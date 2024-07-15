const answers = {
    1: false, // Question 1: No, it's not safe
    2: false, // Question 2: No, you should not provide it
    3: false  // Question 3: No, it's not safe
};

function submitAnswer(questionNumber) {
    const feedbackElement = document.getElementById(`feedback${questionNumber}`);
    const options = document.getElementsByName(`q${questionNumber}`);
    let userAnswer;
    for (const option of options) {
        if (option.checked) {
            userAnswer = (option.value === 'true');
            break;
        }
    }

    if (userAnswer === undefined) {
        feedbackElement.textContent = 'Please select an answer.';
        feedbackElement.style.color = 'red';
        return;
    }

    if (userAnswer === answers[questionNumber]) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Incorrect. Be cautious with such requests.';
        feedbackElement.style.color = 'red';
    }
}
