import React from "react";
import Catagories from "../components/Catagories";
import Products from "../hompage/components/Products";
import "./CategoryPage.css";
import Select from "./components/Select";
import { colors, size } from "../data";
import { useParams } from "react-router-dom";
const CategoryPage = (props) => {
  // const { headline } = props;
  let { item } = useParams();
  return (
    <div className="mainCategoryPage">
      <div className="CategotyHead">
        <h1>{item}</h1>
      </div>
      <div className="flexLine">
        <h3 className="header">Filter Products:</h3>
        <Select items={colors} />
        <Select items={size} />
      </div>
      <Products />
    </div>
  );
};

export default CategoryPage;
