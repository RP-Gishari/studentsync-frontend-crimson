import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useStudentStore from "../store/studentStore";
import "./AllStudentPage.css";
import myImage from "../assets/add-large-line 1.png";

const AllStudentPage = () => {
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();
  const { students } = useStudentStore();

  const handleSearch = (e) => {
    e.preventDefault();

    const names = searchName.trim().toLowerCase();

    const matchedStudent = students.find((s) => {
      const first = s.first_name.toLowerCase();
      const last = s.last_name.toLowerCase();
      const full = `${first} ${last}`;

      return (
        first.includes(names) || last.includes(names) || full.includes(names)
      );
    });

    if (matchedStudent) {
      navigate(`/students/${matchedStudent.id}`);
    } else {
      alert("No matching student found.");
    }
  };

  const handleInput = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div className="all_student">
      <Link to="/">
        <p className="all">All student</p>
      </Link>
      <form className="form-submit" onSubmit={handleSearch}>
        <input
          type="text"
          className="search_bar"
          placeholder="Enter student name"
          value={searchName}
          onChange={handleInput}
        />
      </form>

      <Link to="/add">
        <button className="addbtn">
          <img className="add_img" src={myImage} alt="Add student" />
          Add student
        </button>
      </Link>
    </div>
  );
};

export default AllStudentPage;
