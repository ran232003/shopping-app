import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CatagoryItem.css";
const CatagoryItem = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/category/${title}`);
  };
  const { id, img, title } = props;
  return (
    <div className="item">
      <div className="imageItem">
        <img className="imgItem" src={require(`../${img}`)} />
      </div>
      <div className="itemDetails">
        <h3>{title}</h3>
        <Button onClick={handleNavigate}>SHOP NOW</Button>
      </div>
    </div>
  );
};

export default CatagoryItem;
