import "./GetStudent.css";
import { useState } from "react";
import myImage from "../assets/Ellipse 11.png";
import useStudentStore from "../store/studentStore";
import { Link } from "react-router-dom";

const GetStudent = ({ oneStudent }) => {
  const { updateStudent } = useStudentStore();

  const [edit, setEdit] = useState(
    oneStudent || {
      first_name: "",
      last_name: "",
      student_id: "",
      dob: "",
      enrollment_date: "",
      email: "",
      contact_number: "",
    },
  );

  if (!oneStudent) {
    return <p>Student not found</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    updateStudent(edit.id, edit);
  };

  return (
    <div className="profile_container">
      <header className="profile_header">
        <h2>Welcome back</h2>
        <p>{new Date().toDateString()}</p>
      </header>
      <div className="borders"></div>
      <section className="profile_card">
        <div className="imgBtn">
          <img
            src={myImage}
            alt={`${edit.first_name} ${edit.last_name}`}
            className="profile_image"
          />
          <button className="edit_button" onClick={handleEditClick}>
            Edit
          </button>
        </div>

        <div className="profile_details">
          <div className="profile_column">
            <label>First Name</label>
            <input
              name="first_name"
              value={edit.first_name}
              onChange={handleChange}
            />

            <label>Student ID</label>
            <input
              name="student_id"
              value={edit.student_id}
              onChange={handleChange}
            />

            <label>Date of Birth</label>
            <input
              name="dob"
              type="date"
              value={edit.dob?.slice(0, 10)}
              onChange={handleChange}
            />

            <label>Enrollment Date</label>
            <input
              name="enrollment_date"
              type="date"
              value={edit.enrollment_date?.slice(0, 10)}
              onChange={handleChange}
            />
          </div>

          <div className="profile_column">
            <label>Last Name</label>
            <input
              name="last_name"
              value={edit.last_name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input name="email" value={edit.email} onChange={handleChange} />

            <label>Contact</label>
            <input
              name="contact_number"
              value={edit.contact_number}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <footer className="profile_footer">
        <h6 className="adress">
          <b>My email address: </b>
        </h6>
        <p className="active">{edit.email}</p>
        <input type="checkbox" className="checkbox" />
        <span className="active">Last active: 1 month ago</span>
        <Link to={"/"}></Link>
      </footer>
      <button className="back">
        {" "}
        <img src="/src/assets/Vector (1).png" />
        <span>Go back</span>
      </button>
    </div>
  );
};

export default GetStudent;
