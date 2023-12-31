import { useEffect } from "react";
import "./App.css";
import AccomplishmentsSection from "./components/accomplishment";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import SecondSection from "./components/second-section";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/navbar";
import MobileNav from "./components/ui/navbar/mobile";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="w-screen">
      <MobileNav />
      <Navbar />
      <HeroSection />
      <SecondSection />
      <AccomplishmentsSection />
      <GallerySection />
      <section className="my-20">
        <marquee
          behavior="smooth"
          direction="left"
          className="md:text-[15vh] text-xl uppercase font-navFont "
        >
          Contact us. let's talk👋🏻 Contact us. let's talk👋🏻Contact us. let's
          talk👋🏻
        </marquee>
      </section>
      <Footer />
    </main>
  );
}

export default App;
