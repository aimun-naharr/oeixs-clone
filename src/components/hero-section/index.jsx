import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

const HeroSection = () => {
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#hero-section-img",
  //       scrub: true,
  //       start: "top 75%",
  //       // end: "+=500px",
  //       markers: true,
  //     },
  //   });

  //   timeline
  // }, []);
  return (
    <div
      className=" mt-[50vh]  flex flex-col items-center justify-center font-bold "
      data-scroll
      data-scroll-speed="0.3"
    >
      <div className="mt-4 ml-32 flex flex-col items-center gap-4">
        <p className="w-80 text-center text-xl ">
          TURNING VISIONS INTO REALITY YOUR JOURNEY TO SUCCESS STARTS HERE
        </p>
        <div className="flex gap-2">
          <PrimaryButton secondaryText="See Program">
            View Trainings
          </PrimaryButton>
          <PrimaryButton secondaryText="Our solutions">
            View Services
          </PrimaryButton>
        </div>
        <div className="mouse-scroll"></div>
      </div>
      <div className="mt-4 hero-section-img" id="hero-section-img">
        <img src="https://oeixs.com/assets/oeixs.gif" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
