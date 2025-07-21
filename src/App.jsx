import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import StudentTable from "./components/StudentTable";
import AllStudentPage from "./components/AllStudentPage";
import AddStudent from "./components/AddStudent";

import "./App.css";
import StudentById from "./pages/OneStudent";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div>
          <AllStudentPage />
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/add" element={<AddStudent />} />
          </Routes>
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/table" element={<StudentTable />} />
            <Route path="/students/:id" element={<StudentById />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
