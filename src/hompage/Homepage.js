import React from "react";
import { Button } from "react-bootstrap";
import Catagories from "../components/Catagories";
import Slider from "../components/Slider";
import "./HomePage.css";
const Homepage = () => {
  return (
    <div className="mainHome">
      <Slider />
      <Catagories />
    </div>
  );
};

export default Homepage;
