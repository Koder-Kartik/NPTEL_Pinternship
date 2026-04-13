type Learner = { id: string; quizzesCompleted: number };
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

//InstructorOrAdmin
type InstructorOrAdmin = Instructor | Admin;


//ReadonlyAssignment
type Assignment = { title:string; dueDate:Date; points:number };
type ReadonlyAssignment = Readonly<Assignment>;


//StatsAsStrings
type LearnerStats = { quizzes:number; videos:number; assignments:number };

type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};
