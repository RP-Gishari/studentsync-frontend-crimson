import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cards from "./components/cards";
import StudentList from "./pages/StudentList";
import StudentTable from "./components/StudentTable";
import AllStudentPage from "./components/AllStudentPage";
import AddStudent from "./components/AddStudent";

import "./App.css";

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
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
