import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

const HeroSection = () => {
  return (
    <div
      className=" md:mt-[50vh] mt-[20vh] flex flex-col items-center justify-center font-bold w-screen "
      data-scroll
      data-scroll-speed="0.4"
    >
      <div className="mt-4 flex flex-col items-center gap-4">
        <p className="w-80 text-center text-xl ">
          TURNING VISIONS INTO REALITY YOUR JOURNEY TO SUCCESS STARTS HERE
        </p>
        <div className="flex md:flex-row flex-col gap-2">
          <PrimaryButton secondaryText="See Program">
            View Trainings
          </PrimaryButton>
          <PrimaryButton secondaryText="Our solutions">
            View Services
          </PrimaryButton>
        </div>
        <div className="mouse-scroll"></div>
      </div>
      <div className="md:my-4 my-3 hero-section-img" id="hero-section-img">
        <img src="https://oeixs.com/assets/oeixs.gif" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
