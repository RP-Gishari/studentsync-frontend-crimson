const Gallery = () => {
  return (
    <section>
      <div className="gall">
        <h4 className="gallery">Gallery</h4>
        <h2 className="title">The GYM college student lifestyle</h2>
        <br />
        <br />
        <div className="paragraph">
          <div className="the-ps">
            <p className="p1">All</p>
          </div>
          <div className="the-ps">
            <p className="p2">Foundations period </p>
          </div>
          <div className="the-ps">
            <p className="p3">Sports culture </p>
          </div>
          <div className="the-ps">
            <p className="p4">Project phase</p>
          </div>
        </div>
        <div className="images">
          <img src="src/assets/Frame 385 (2).png" />
          <img className="img2-gallery" src="src/assets/Frame 386.png" />
          <img className="img3-gallery" src="src/assets/Frame 387.png" />
        </div>
        <div className="moreDiv">
          <div className="the-ps">
            <p className="more">More pictures </p>
          </div>
          <img className="icon" src="src/assets/chevron-down.png" />
        </div>
      </div>
    </section>
  );
};
export default Gallery;
