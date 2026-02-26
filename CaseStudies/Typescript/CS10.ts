// 1. if statement
function checkSign(num: number): void {
  if (num > 0) {
    console.log("Number is positive");
  }
}

// 2. if...else
function evenOrOdd(num: number): void {
  if (num % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}

// 3. if...else if...else ladder
function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 4. switch statement
function provideFeedback(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Excellent performance!");
      break;
    case "B":
      console.log("Great job! Keep it up.");
      break;
    case "C":
      console.log("Good effort; aim higher next time.");
      break;
    case "D":
      console.log("Needs improvement; review your work");
      break;
    case "F":
      console.log("Feedback: Unsatisfactory; please seek help.");
      break;
    default:
      console.log("Invalid grade.");
  }
}
