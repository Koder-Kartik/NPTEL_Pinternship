var recordedAnswers = {};
// Functions to record an answer
function recordAnswer(questionId, answer) {
    recordedAnswers[questionId] = answer;
}
recordAnswer("q1", "Yes"); // string
recordAnswer("q2", 42); // number
recordAnswer("q3", ["Option A", "Option B"]); // array
for (var id in recordedAnswers) {
    console.log(id + ":", recordedAnswers[id]);
}
