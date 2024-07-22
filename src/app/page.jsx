import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import InfoBoxes from "@/components/InfoBoxes";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <InfoBoxes />
      <About />
      <Footer />
    </>
  );
};

export default LandingPage;
