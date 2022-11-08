import React from "react";
import { categories } from "../data";
import CatagoryItem from "./CatagoryItem";
import "./Categories.css";
const Catagories = () => {
  return (
    <div className="flexItems">
      {categories.map((item) => {
        return (
          <CatagoryItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default Catagories;
