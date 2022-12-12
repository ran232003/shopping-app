import React from "react";

const MySliderImage = (props) => {
  const { img } = props;
  return (
    <div className="imageCar">
      <img
        className="imageHome"
        src={require(`../../${img}`)}
        alt="First slide"
      />
    </div>
  );
};

export default MySliderImage;
