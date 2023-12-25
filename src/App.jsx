import { useEffect } from "react";
import "./App.css";
import HeroSection from "./components/hero-section";
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
      <section className="h-screen">hello</section>
      <section className="h-screen">hello</section>
    </main>
  );
}

export default App;
