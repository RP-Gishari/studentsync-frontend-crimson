import HeroSection from "../components/Hero";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <Main />
      <Gallery />
    </div>
  );
}
export default Home;
