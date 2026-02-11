import Header from "./Header";
import CourseCard from "./CourseCard";
import { useState } from "react";

type Course = {
  title: string;
  progress: number;
};

export default function Dashboard() {
  const [student] = useState({
    name: "Rahul",
    course: "Full stack",
  });

  const [courses, setCourses] = useState<Course[]>([
    { title: "React", progress: 40 },
    { title: "Node", progress: 30 },
    { title: "AI", progress: 10 },
  ]);

  return (
    <>
      <Header />

      <div
        style={{
          padding: "20px",
          border: "1px solid gray",
          width: "320px",
        }}
      >
        {/* Student Overview */}
        <div>
          <h2>Welcome, {student.name}</h2>
          <p>Your learning overview is shown below:</p>
        </div>

        {/* Enrolled Courses */}
        <div>
          <h3>Enrolled courses</h3>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        

        <button
          onClick={() =>
            setCourses([
              ...courses,
              { title: "MongoDB", progress: 0 },
            ])
          }
        >
          Add course
        </button>
      </div>
    </>
  );
}
