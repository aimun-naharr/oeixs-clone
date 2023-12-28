import { useEffect } from "react";
import "./App.css";
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
    <main id="main">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <section className="h-screen">hello</section>
    </main>
  );
}

export default App;
