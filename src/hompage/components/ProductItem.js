import React from "react";
import "./ProductItem.css";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ProductItem = (props) => {
  const navigate = useNavigate();
  const { img, id, price, title, desc } = props;
  const navigateSingleProduct = () => {
    console.log(desc);
    navigate(`/product/${title}`, {
      state: { title, img, price, id, desc },
    });
  };
  return (
    <div className="card">
      <div className="div-image">
        <img className="prod-image" src={img} />
      </div>
      <div className="prod-icons">
        <div className="iconsDiv">
          <AiOutlineHeart size={30} />
        </div>
        <div className="iconsDiv">
          <AiOutlineSearch size={30} />
        </div>
        <div className="iconsDiv">
          <AiOutlineShoppingCart onClick={navigateSingleProduct} size={30} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
