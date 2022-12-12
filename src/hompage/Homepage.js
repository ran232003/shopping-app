import React from "react";
import { Button } from "react-bootstrap";
import Catagories from "../components/Catagories";
import Slider from "../components/Slider";
import MySlider from "./components/MySlider";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import "./HomePage.css";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mainHome"
    >
      {/* <Slider /> */}
      <MySlider />
      <Catagories />
      <Products />
      <Newsletter />
    </motion.div>
  );
};

export default Homepage;
