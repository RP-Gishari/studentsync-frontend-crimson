const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h3 className="h3-hero">Student management platform</h3>
        <h1 className="h1-hero">STUDENTSYNC MANAGEMENT WEB APP</h1>
        <p className="p1-hero">student for academic year 2025/2026</p>
        <div className="buttons">
          <div className="button-1">
            <p className="learn-more">learn More</p>
          </div>
          <div className="button-2">
            <p className="all-students">all students</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          className="first-image"
          src="src/assets/54100351610_b2e6df9d55_o 1.png"
        />

        <img src="src/assets/download 1.png" className="second-image" />
        <img
          src="src/assets/53998174142_660ae8a080_c 1.png"
          className="third-image"
        />
        <img
          src="src/assets/53999073171_9d71b8f1b6_k 2.png"
          className="forth-image"
        />
      </div>
    </div>
  );
};
export default HeroSection;
