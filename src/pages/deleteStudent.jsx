import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStudentStore from "../store/studentStore";
import StudentTable from "../components/StudentTable";

const DeleteStudent = () => {
  const { id } = useParams();
  const { student, deleteStudent, loading, error } = useStudentStore();

  useEffect(() => {
    if (id) {
      deleteStudent(id);
    }
  }, [id, deleteStudent]);

  if (loading) return <p>Loading student...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!student || JSON.stringify(student).length === 0)
    return <p>No student data found.</p>;

  return <StudentTable oneStudent={student} />;
};
export default DeleteStudent;
