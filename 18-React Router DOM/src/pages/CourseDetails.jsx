import { Link, useParams } from "react-router-dom";

function CourseDetails() {
  const { Course_id } = useParams();

  return (
    <div className="details">
      <h1> Course Details</h1>

      <h2>Course ID: {Course_id}</h2>

      <p>
        You selected Course Number <strong>{Course_id}</strong>.
      </p>

      <Link to="/course" className="back-btn">
        ← Back to Courses
      </Link>
    </div>
  );
}

export default CourseDetails;
