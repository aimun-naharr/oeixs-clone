import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import PrimaryButton from "../PrimaryButton";

const Navbar = () => {
  const leftNavItems = ["Work", "Academy", "About", "News"];
  const rightNavItems = ["Ebusiness", "PT"];
  const navItemOuterDivStyles =
    "absolute bg-[--light-blue] text-black h-full w-full top-[100%] left-0 flex items-center justify-center  pointer ";
  const navItemInnerDivStyles =
    "relative h-full w-full  flex items-center justify-center";
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: logoRef.current,
        scrub: true,
        start: "top 10%",
        // markers: true,
        // end: "+=500px",
      },
    });

    timeline
      .to(logoRef.current, {
        y: 0,
        x: 0,
        scale: 0.3,
        // skew: '',
        duration: 8,
        // ease: "power1.out",
      })
      .to("#navbar", { backgroundColor: "black", zIndex: 3, duration: 2 })
      .to(
        "#hero-section-img",
        {
          clipPath: "inset(0%)",
          duration: 5,
          // ease: "none",
        },
        0
      );
  }, []);

  return (
    <div className="navbar_wrapper uppercase " id="navbar">
      <nav className="hidden md:flex md:flex-row  items-center justify-between ">
        {/* left nav items start----------- */}
        <div className="flex gap-1">
          {leftNavItems.map((n) => {
            return (
              // button
              <div key={n} className="navbar_btn">
                {/* slider */}
                <div className="navbar_btn_slider">
                  <div className={navItemInnerDivStyles}>{n}</div>
                  <div className={navItemOuterDivStyles}>{n}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* left nav items end----------- */}
        {/* logo start--------- */}
        <div id="oeixs-logo">
          <img
            ref={logoRef}
            src="https://oeixs.com/assets/oeixs_logo.svg"
            alt="oeixs logo"
          />
        </div>
        {/* logo end-------------- */}

        {/* right nav items start--------- */}
        <div className="flex gap-1 items-center">
          {" "}
          {rightNavItems.map((n) => {
            return (
              // button
              <div key={n} className="navbar_btn">
                {/* slider */}
                <div className="navbar_btn_slider">
                  <div className={navItemInnerDivStyles}>{n}</div>
                  <div className={navItemOuterDivStyles}>{n}</div>
                </div>
              </div>
            );
          })}
          <PrimaryButton secondaryText="Why delay?">Contact us</PrimaryButton>
        </div>
        {/* right nav items end---------- */}
      </nav>
    </div>
  );
};

export default Navbar;
