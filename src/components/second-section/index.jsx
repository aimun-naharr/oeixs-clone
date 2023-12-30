import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const SecondSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const textSections = document.querySelectorAll("#second-section-texts p");
    // textSections.forEach((p, i) => {
    gsap.to("#second-section-texts p", {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#second-section",
        start: "-20% 70%",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
      },
    });
    // });
  }, []);
  return (
    <div
      id="second-section"
      className=" content-wrapper font-navFont flex flex-col gap-6"
    >
      <div>
        <button className="bg-[--light-blue] text-black font-navFont px-4 py-2 rounded-full ">
          About us
        </button>
      </div>
      <div className="text-4xl flex flex-col gap-2" id="second-section-texts">
        <p className="opacity-10 inline-block">WELCOME TO OEIXS</p>
        <p className="opacity-10 inline-block">
          WHERE EXPERTISE MEETS INNOVATION
        </p>
        <p className="opacity-10 inline-block">
          WE EMPOWER TO YOU REACH YOUR FULL
        </p>
        <p className="opacity-10 inline-block">
          POTENTIAL ON RANGE OF KEY AREAS
        </p>
      </div>
      <div className="flex gap-4">
        <PrimaryButton secondaryText="Get Trained">Meet the team</PrimaryButton>
        <PrimaryButton secondaryText="Sevices in 24h">
          Check store
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SecondSection;
