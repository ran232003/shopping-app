import React from "react";
import { Button } from "react-bootstrap";
import "./CatagoryItem.css";
const CatagoryItem = (props) => {
  const { id, img, title } = props;
  return (
    <div className="item">
      <div className="imageItem">
        <img className="imgItem" src={require(`../${img}`)} />
      </div>
      <div className="itemDetails">
        <h3>{title}</h3>
        <Button>SHOP NOW</Button>
      </div>
    </div>
  );
};

export default CatagoryItem;
