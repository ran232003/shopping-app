import React from "react";
import { popularProducts } from "../../data";
import ProductItem from "./ProductItem";
import "./Products.css";
const Products = () => {
  return (
    <div className="mainProducts">
      {popularProducts.map((item) => {
        return (
          <ProductItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            desc={item.desc}
          />
        );
      })}
    </div>
  );
};

export default Products;
