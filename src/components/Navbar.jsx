// <<<<<<< HEAD
// import { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <div className="landing-page">
//       <div className="navbar-container">
//         <div className="logo">
//           <img src="src/assets/logo-smait 1.png" alt="logo" id="navbar-logo" />
//           <p className="navbar-p">STUDENTSYNC</p>
//         </div>
//         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           &#9776;
//         </div>
//         <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <h5 className="home-navbar">home</h5>
//           <h5 className="navbar-add">add student</h5>
//           <h5 className="navbar-all">all students</h5>
//         </div>
//       </div>
//     </div>
import { useNavigate, NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <header className="navbar-logo" onClick={navigate("/")}>
        <img src="src/assets/logo-smait 1.png" id="navbar-logo" />
        <span>STUDENT SYNC</span>
      </header>
      <ul className="navbar-list">
        <li className="navbar-list-item" onClick={navigate("/")}>
          home
        </li>
        <li className="navbar-list-item" onClick={navigate("/new")}>
          add student
        </li>
        <li className="navbar-action" onClick={navigate("/students")}>
          All Students
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
