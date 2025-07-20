const Navbar = () => {
  return (
    <div className="landing-page">
      <div className="navbar-container">
        <div className="logo">
          <img src="src/assets/logo-smait 1.png" id="navbar-logo" />
          <p className="navbar-p">STUDENT SYNC</p>
        </div>
        <div className="navbar-home">
          <h5 className="home-navbar">home</h5>
        </div>
        <div className="add-student">
          <h5 className="navbar-add">add student</h5>
        </div>
        <div className="all-student">
          <h5 className="navbar-all">all students</h5>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
