import HeroSection from "../components/Hero";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Gallery />
      <Footer />;
    </>
  );
}
export default Home;
