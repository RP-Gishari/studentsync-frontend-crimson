import "./AllStudentPage.css";
import { Link } from "react-router-dom";

const AllStudentPage = () => {
  return (
    <div className="all_student">
      <p className="all">All student</p>
      <input type="text" class="search_bar" placeholder="Search" />
      <Link to="/Add">
        <button className="addbtn">
          <img className="add_img" src="src/assets/add-large-line 1.png" /> Add
          student
        </button>
      </Link>
    </div>
  );
};
export default AllStudentPage;
