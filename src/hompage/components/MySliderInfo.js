import React from "react";
import { Button } from "react-bootstrap";

const MySliderInfo = (props) => {
  const { title, desc } = props;
  return (
    <div className="mainInfo">
      <h1 className="main-header">{title}</h1>
      <h4 className="desc">{desc}</h4>
      <Button className="btnInfo">Shop Now</Button>
    </div>
  );
};

export default MySliderInfo;
