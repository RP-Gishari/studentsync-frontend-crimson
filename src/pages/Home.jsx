import HeroSection from "../components/Hero";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import PaginationComponent from "./Pages";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Gallery />
      <PaginationComponent />
      <Footer />;
    </>
  );
}
export default Home;
