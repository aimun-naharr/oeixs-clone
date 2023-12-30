import React from "react";

const AccomplishMent = ({ element }) => {
  return (
    <>
      <div className="text-center flex flex-col items-center relative">
        <h2 class="number-metric">{element.number}</h2>
        <div class="sub-text-about uppercase">{element.about}</div>
      </div>
    </>
  );
};

const AccomplishmentsSection = () => {
  const data = [
    {
      number: 130,
      about: "Project completed",
    },
    {
      number: 88,
      about: "Trainings completed",
    },
    {
      number: 10,
      about: "Awards",
    },
  ];
  return (
    <div className="content-wrapper my-40 grid md:grid-cols-3 grid-cols-1">
      {data.map((elm) => (
        <AccomplishMent key={elm.about} element={elm} />
      ))}
    </div>
  );
};

export default AccomplishmentsSection;
