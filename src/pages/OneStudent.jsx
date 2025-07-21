import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStudentStore from "../store/studentStore";
import GetStudent from "../components/GetStudent";

const StudentById = () => {
  const { id } = useParams();

  const { student, getStudent, loading, error } = useStudentStore();

  useEffect(() => {
    if (id) {
      getStudent(id);
      console.log("Fetching student with id:", id);
    }
  }, [id, getStudent]);

  if (loading) return <p>Loading student...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!student || Object.keys(student).length === 0)
    return <p>No student data found.</p>;

  return <GetStudent oneStudent={student} />;
};
export default StudentById;
