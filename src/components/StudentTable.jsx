import "./StudentTable.css";

function StudentTable({ students }) {
  if (!students || students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <table className="table_wrapper">
      <thead>
        <tr>
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
          <tr key={student.id}>
            <td>
              <img src="src/assets/ari-shojaei-IAvYMUhYSGA-unsplash.png" />
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
              <img className="vector" src="src/assets/Vector.png" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
