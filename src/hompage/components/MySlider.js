import React from "react";
import { Carousel } from "react-bootstrap";
import { images } from "../../data";
import "./MySlider.css";
import MySliderImage from "./MySliderImage";
import MySliderInfo from "./MySliderInfo";
const MySlider = () => {
  return (
    <div className="mainSlider">
      <Carousel interval={null}>
        {images.map((object) => {
          return (
            <Carousel.Item>
              <div className="flexCarousel">
                <MySliderImage
                  img={object.img}
                  id={object.id}
                  key={object.id}
                />
                <MySliderInfo
                  id={object.id}
                  title={object.title}
                  desc={object.desc}
                  key={object.id}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MySlider;
