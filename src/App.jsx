import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import Home from "./pages/Home";
import "./App.css";
import StudentList from "./pages/StudentList";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentList />} />
          </Routes>
        </main>
        <Footer />;
      </div>
    </Router>
  );
};

export default App;
