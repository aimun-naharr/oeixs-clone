import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import GalleryCard from "../ui/GalleryCard";

const GallerySection = () => {
  const firstSection = [
    {
      img: "https://oeixs.com/assets/devices-oeixs.jpg",
      title: "Stand Design",
    },
    {
      img: "https://oeixs.com/assets/brand-oeixs.jpg",
      title: "Branding Design",
    },
    {
      img: "https://oeixs.com/assets/computer-oeixs.jpg",
      title: "Digital Marketing",
    },
  ];
  const secondSection = [
    {
      img: "https://oeixs.com/assets/design-oeixs.jpg",
      title: "Business Cards",
    },
    {
      img: "https://oeixs.com/assets/marketing-oeixs.jpg",
      title: "UI/UX Web Design &",
    },
    {
      img: "https://oeixs.com/assets/department-business.jpg",
      title: "Strategy business",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery-section",
        start: "top 50%",
        end: "bottom",
        // markers: true,
        scrub: true,
      },
    });
    tl.to("#top-gallery-section", {
      x: 300,
    }).to(
      "#bottom-gallery-section",
      {
        x: -300,
      },
      0
    );
  }, []);
  return (
    <div
      className="my-48"
      id="gallery-section"
      data-scroll
      data-scroll-speed="0.2"
    >
      <div
        id="top-gallery-section"
        className="grid grid-cols-3 gap-2 mb-2 translate-x-[-300px]"
      >
        {firstSection.map((elm) => {
          return <GalleryCard key={elm.img} element={elm} />;
        })}
      </div>
      <div
        id="bottom-gallery-section"
        className="grid grid-cols-3 gap-2 translate-x-[300px]"
      >
        {secondSection.map((elm) => {
          return <GalleryCard key={elm.img} element={elm} />;
        })}
      </div>
    </div>
  );
};

export default GallerySection;
