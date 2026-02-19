let recordedAnswers: { [key: string]: any } = {};

// Functions to record an answer
function recordAnswer(questionId: string, answer: any): void {
  recordedAnswers[questionId] = answer;
}

recordAnswer("q1", "Yes");// string
recordAnswer("q2", 42);// number
recordAnswer("q3", ["Option A", "Option B"]); // array


for (let id in recordedAnswers) {
  console.log(id + ":", recordedAnswers[id]);
}
