import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import ImageSlide from "./ImageSlide";
import InfoSlide from "./infoSlide";
import "./Slider.css";
import { images } from "../data";
import { useState } from "react";
const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : images.length - 1);
    } else {
      setSliderIndex(sliderIndex < images.length - 1 ? sliderIndex + 1 : 0);
    }
  };
  let value = sliderIndex * 230;
  let cssStyle = { transform: `translateX(-${value}vh)` };
  console.log("test", sliderIndex);
  return (
    <div className="mainSlide">
      {images.map((content) => {
        return (
          <div className="flexList">
            <div className="arrowLeft">
              <AiOutlineArrowLeft
                onClick={() => sliderClick("left")}
                className="arrowIcon"
                size={28}
              />
            </div>
            <div className="homeContent" style={cssStyle}>
              <ImageSlide img={content.img} key={content.id} />
              <InfoSlide title={content.title} desc={content.desc} />
            </div>
            <div className="arrowRight">
              <AiOutlineArrowRight
                onClick={() => sliderClick("right")}
                className="arrowIcon"
                size={28}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
