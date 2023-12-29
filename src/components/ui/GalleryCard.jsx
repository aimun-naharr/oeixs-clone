import React from "react";

const GalleryCard = ({ element }) => {
  return (
    <div className="w-100 h-[70vh]  relative overflow-hidden gallery-card">
      <div className="absolute h-full w-full gallery-card-img">
        <img
          src={element.img}
          alt={element.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-8 whitespace-nowrap text-5xl font-navFont gallery-card-title">
        <marquee>{element.title}</marquee>
      </div>
    </div>
  );
};

export default GalleryCard;
