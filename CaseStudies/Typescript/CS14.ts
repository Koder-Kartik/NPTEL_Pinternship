// Generic class
class FeedbackBox<T>{
  private feedbacks:T[]=[];
  addFeedback(f:T){ this.feedbacks.push(f); }
  getAllFeedback(){ return [...this.feedbacks]; }
}

// Generic function
const getFirstItem=<T>(items:T[]):T|undefined=>items[0];


// example 
const quiz=new FeedbackBox<string>();
quiz.addFeedback("Great quiz!");

type LessonFeedback={rating:number;comment:string};
const lesson=new FeedbackBox<LessonFeedback>();
lesson.addFeedback({rating:5,comment:"Loved it!"});

console.log(getFirstItem(quiz.getAllFeedback()));
console.log(getFirstItem(lesson.getAllFeedback()));
