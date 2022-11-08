import React from "react";
import "./ImageSlide.css";
// import "../public/modelpaint.jpg";
const ImageSlide = (props) => {
  const { img } = props;
  return (
    <div className="mainImage">
      <img src={require(`../${img}`)} />
    </div>
  );
};

export default ImageSlide;
