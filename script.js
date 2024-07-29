document.getElementById('submit-action').addEventListener('click', () => {
    const action = document.getElementById('action').value;
    const doer = document.getElementById('doer').value;
    const format = document.getElementById('format').value;

    fetch('https://your-api-url/generate-question', { // Replace with your actual API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, doer, format })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('present-hindi-question').innerText = data.presentHindi || 'Translation not available';
        document.getElementById('negative-hindi-question').innerText = data.negativeHindi || 'Translation not available';
        document.getElementById('question-hindi-question').innerText = data.questionHindi || 'Translation not available';
        document.getElementById('negative-question-hindi-question').innerText = data.negativeQuestionHindi || 'Translation not available';
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('submit-translations').addEventListener('click', () => {
    const presentTranslation = document.getElementById('present-translation').value;
    const negativeTranslation = document.getElementById('negative-translation').value;
    const questionTranslation = document.getElementById('question-translation').value;
    const negativeQuestionTranslation = document.getElementById('negative-question-translation').value;
    const format = document.getElementById('format').value;
    const action = document.getElementById('action').value;

    fetch('https://your-api-url/translate', { // Replace with your actual API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            presentTranslation,
            negativeTranslation,
            questionTranslation,
            negativeQuestionTranslation,
            format,
            action
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('feedback-present').innerText = `Feedback for present: ${data.present}`;
        document.getElementById('feedback-negative').innerText = `Feedback for negative: ${data.negative}`;
        document.getElementById('feedback-question').innerText = `Feedback for question: ${data.question}`;
        document.getElementById('feedback-negative-question').innerText = `Feedback for negative question: ${data.negativeQuestion}`;
    })
    .catch(error => console.error('Error:', error));
});
