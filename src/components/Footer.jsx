function Footer() {
  return (
    <footer className="foot">
      <div className="hed">
        <h1 className="p1-footer">STUDENTSYNC MANAGEMENT APP</h1>
        <h4 className="p2-footer">Students management plateform</h4>
      </div>
      <div className="home">
        <div className="our-address">
          <b className="our">Our address</b>

          <div>
            <img
              src="src/assets/location.png"
              alt="location photo"
              className="Image"
            />
            Gasabo district,Kinyinya sector,Muhima Cell,Rusenyi Village
            <div className="gasabo"> KG 29 AVE 16,Kigali,Rwanda</div>
          </div>
          <div className="working">
            <img
              src="src/assets/Duration.png"
              alt="Working-duration"
              className="Image"
            />
            Working hours:Monday-Friday 08:00-17:00
          </div>
        </div>

        <div className="contact-us">
          <b>Contact Us</b>
          <div>
            <img src="src/assets/Email.png" alt="Email" className="Image" />
            info@thegymecapstone.rwa
          </div>
          <div>
            <img src="src/assets/Phone.png" alt="Phone" className="Image" />
            0788-322-223
          </div>
        </div>
        <div className="social-media">
          <div>
            <b>Social Media</b>
          </div>

          <img
            src="src/assets/Instagram.png"
            alt="instagram"
            className="Image"
          />
          <img src="src/assets/Facebook.png" alt="Facebook" className="Image" />
          <img src="src/assets/Youtube.png" alt="Youtube" className="Image" />
        </div>
      </div>
      <div className="cop">&copy; Studentsync.All rights reserved.</div>
    </footer>
  );
}

export default Footer;
