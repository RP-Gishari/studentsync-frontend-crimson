import "./StudentTable.css";
import useStudentStore from "../store/studentStore";

function StudentTable({ students }) {
  const { deleteStudent } = useStudentStore();
  const handleDelete = async (student) => {
    if (student) {
      const confirmed = confirm(
        `Are u sure u want to delete student ${student.first_name}`,
      );
      if (confirmed) {
        const result = await deleteStudent(student.id);
        return result;
      }
    }
  };
  if (!students || students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <table className="table-wrapper">
      <thead>
        <tr className="table-header">
          <th>User name</th>
          <th>Name</th>
          <th>Student ID</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Enrollment date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <>
            <tr key={student.id} className="table-rows">
              <td>
                <img
                  src="src/assets/ari-shojaei-IAvYMUhYSGA-unsplash.png"
                  alt="avatar"
                />
                {student.first_name?.slice(0, 7)}
              </td>
              <td>
                {student.first_name} {student.last_name}
              </td>
              <td>{student.student_id}</td>
              <td>{student.email}</td>
              <td>{student.contact_number}</td>
              <td>{student.enrollment_date?.slice(0, 10)}</td>
              <td>Enrolled</td>
              <td>
                <img
                  className="vector"
                  src="src/assets/Vector.png"
                  alt="delete"
                  onClick={() => handleDelete(student)}
                />
              </td>
            </tr>
            <tr>
              <td className="divider" colspan="8">
                <hr className="row-divider" />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
