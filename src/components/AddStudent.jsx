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
    setFormData({
      first_name: "",
      last_name: "",
      date_of_birth: "",
      student_id: "",
      email: "",
      contact_number: "",
      enrollment_date: "",
    });
  };

  const handleCancel = () => {
    setFormData({
      first_name: "",
      last_name: "",
      date_of_birth: "",
      student_id: "",
      email: "",
      contact_number: "",
      enrollment_date: "",
    });
    onCancel();
  };

  return (
    <div className="container">
      <div className="nav_bar">
        <img
          className="logo"
          src="src/assets/logo-smait 1 (4).png"
          alt="Logo"
        />
        <h4 className="sync">STUDENT SYNC</h4>
      </div>

      <p className="new">
        <b>Add new student</b>
      </p>

      <form className="add_student_form" onSubmit={handleSubmit}>
        <div className="form_grid">
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input
              id="date_of_birth"
              name="date_of_birth"
              type="date"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="student_id">Student ID</label>
            <input
              id="student_id"
              name="student_id"
              value={formData.student_id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="full_width">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="large_input"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="full_width">
            <label htmlFor="contact_number">Contact Number</label>
            <input
              id="contact_number"
              name="contact_number"
              className="large_input"
              value={formData.contact_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="full_width">
            <label htmlFor="enrollment_date">Enrollment Date</label>
            <input
              id="enrollment_date"
              name="enrollment_date"
              className="large_input"
              type="date"
              value={formData.enrollment_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form_actions">
          <button type="submit" className="add_button">
            Add
          </button>
          <button
            type="button"
            className="cancel_button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;
