import React from "react";
import "./style.css";

export const MyWorkCard = ({ image1, image2, image3 }) => {
  return (
    <div id="tab-one" className="my-work-container">
      <div className="my-work-box">
        <img src={image1} alt="" />
      </div>
      <div className="my-work-box">
        <img src={image2} alt="" />
      </div>
      <div className="my-work-box">
        <img src={image3} alt="" />
      </div>
    </div>
  );
};
