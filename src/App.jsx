import { useEffect } from "react";
import "./App.css";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import SecondSection from "./components/second-section";
import Navbar from "./components/ui/navbar";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="w-screen">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <GallerySection />
      <section className="h-screen">
        <marquee
          behavior="smooth"
          direction="left"
          className="text-[15vh] uppercase font-navFont"
        >
          Contact us. let's talk👋🏻
        </marquee>
      </section>
    </main>
  );
}

export default App;
