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
