import React from "react";

const PrimaryButton = (props) => {
  return (
    <button className="primary_btn">
      <div className="primary_btn_slider">
        <div className="element">{props.children}</div>
        <div className="element">{props.secondaryText}</div>
      </div>
    </button>
  );
};

export default PrimaryButton;
