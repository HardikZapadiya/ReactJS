import { Link } from "react-router-dom";

function Course() {
  return (
    <div className="container">
      <h1>Our Courses</h1>

      <div className="cards">
        <div className="card">
          <h2>React JS</h2>
          <Link to="/course/1">View Details</Link>
        </div>

        <div className="card">
          <h2>Node JS</h2>
          <Link to="/course/2">View Details</Link>
        </div>

        <div className="card">
          <h2>MongoDB</h2>
          <Link to="/course/3">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Course;
