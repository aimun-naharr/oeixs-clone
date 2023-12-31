import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import PrimaryButton from "../PrimaryButton";

const Navbar = () => {
  const leftNavItems = ["Work", "Academy", "About"];
  const rightNavItems = ["Ebusiness", "PT"];
  const navItemOuterDivStyles =
    "absolute bg-[--light-blue] text-black h-full w-full top-[100%] left-0 flex items-center justify-center  pointer ";
  const navItemInnerDivStyles =
    "relative h-full w-full  flex items-center justify-center";
  const logoRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: "top 10%",
      },
    });

    timeline
      .to(logoRef.current, {
        y: 0,
        x: 0,
        z: 0,
        scaleX: 0.2,
        scaleY: 0.2,
        scaleZ: 1,
        duration: 1,
      })
      .to("#navbar", { backgroundColor: "black", zIndex: 3, duration: 1 })
      .to(
        "#hero-section-img",
        {
          clipPath: "inset(0%)",
          duration: 1,
          // ease: "none",
        },
        0
      );
    mm.add("(min-width: 1500px)", () => {
      timeline
        .to(logoRef.current, {
          y: 0,
          x: 0,
          z: 0,
          scaleX: 0.1,
          scaleY: 0.1,
          scaleZ: 1,
          duration: 1,
        })
        .to("#navbar", { backgroundColor: "black", zIndex: 3, duration: 1 })
        .to(
          "#hero-section-img",
          {
            clipPath: "inset(0%)",
            duration: 1,
            // ease: "none",
          },
          0
        );
    });
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
        <div className="" id="oeixs-logo">
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
