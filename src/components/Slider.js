import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="mainSlide">
      <div className="arrowLeft">
        <AiOutlineArrowLeft className="arrowIcon" size={28} />
      </div>
      <div className="arrowRight">
        <AiOutlineArrowRight className="arrowIcon" size={28} />
      </div>
    </div>
  );
};

export default Slider;
