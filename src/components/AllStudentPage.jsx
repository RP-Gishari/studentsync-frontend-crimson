import "./AllStudentPage.css";

const AllStudentPage = () => {
  return (
    <div className="all_student">
      <p className="all">All student</p>
      <input type="text" class="search_bar" placeholder="Search" />
      <button className="addbtn">
        <img className="add_img" src="src/assets/add-large-line 1.png" /> Add
        student
      </button>
    </div>
  );
};
export default AllStudentPage;
