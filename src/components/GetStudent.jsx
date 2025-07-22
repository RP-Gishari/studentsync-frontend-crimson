import "./GetStudent.css";
import myImage from "../assets/Ellipse 11.png";

const GetStudent = ({ oneStudent }) => {
  if (!oneStudent) return <p>Student not found</p>;
  return (
    <div className="profile_container">
      <header className="profile_header">
        <h2>Welcome back </h2>
        <p>{new Date().toDateString()}</p>
      </header>

      <section className="profile_card">
        <img
          src={myImage}
          alt={`${oneStudent.first_name} ${oneStudent.last_name}`}
          className="profile_image"
        />

        <div className="profile_details">
          <div className="profile_column">
            <label>First Name</label>
            <p>{oneStudent.first_name}</p>

            <label>Student ID</label>
            <p>{oneStudent.student_id}</p>

            <label>Date of Birth</label>
            <p>{oneStudent.dob}</p>

            <label>Enrollment Date</label>
            <p>{oneStudent.enrollment_date?.slice(0, 10)}</p>
          </div>

          <div className="profile_column">
            <label>Last Name</label>
            <p>{oneStudent.last_name}</p>

            <label>Email</label>
            <p>{oneStudent.email}</p>

            <label>Contact</label>
            <p>{oneStudent.contact_number}</p>
          </div>
        </div>

        <button className="edit_button">Edit</button>
      </section>

      <footer className="profile_footer">
        <p>
          My email address: <strong>{oneStudent.email}</strong>
        </p>
        <span>Last active: 1 month ago</span>
      </footer>
    </div>
  );
};

export default GetStudent;
