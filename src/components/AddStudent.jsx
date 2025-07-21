import { useState } from "react";
import useStudentStore from "../store/studentStore";
import "./AddStudent.css";

function AddStudentForm({ onCancel }) {
  const { addStudent } = useStudentStore();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    student_id: "",
    email: "",
    contact_number: "",
    enrollment_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
  };

  return (
    <div className="container">
      <div className="nav_bar">
        <img className="logo" src="src/assets/logo-smait 1 (4).png" />
        <h4 className="sync">STUDENT SYNC</h4>
      </div>
      <p className="new">
        <b>Add new student</b>
      </p>
      <form className="add_student_form" onSubmit={handleSubmit}>
        <div className="form_grid">
          <input
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />

          <input
            name="student_id"
            placeholder="Student ID"
            value={formData.student_id}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="large_input"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="large_input"
            name="contact_number"
            placeholder="Contact Number"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="large_input"
            name="enrollment_date"
            type="date"
            value={formData.enrollment_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form_actions">
          <button type="submit" className="add_button" onSubmit={handleSubmit}>
            Add
          </button>
          <button type="button" className="cancel_button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;
