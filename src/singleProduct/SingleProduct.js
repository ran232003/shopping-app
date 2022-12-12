import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SingleProduct.css";
import { colors, size } from "../data";
import Select from "../catagories/components/Select";
import { Button, Form } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleProduct = () => {
  const { state } = useLocation();
  const [count, setCount] = useState(0);
  const handleCount = () => {
    if (count == 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };
  const [product, setProduct] = useState({
    title: state.title,
    img: state.img,
    id: state.id,
    desc: state.desc,
    price: state.price,
  });
  return (
    <div className="mainSingle">
      <div className="singleImage">
        <img className="img" src={product.img} />
      </div>
      <div className="details">
        <h1 className="h1">{product.title}</h1>
        <h4 className="desc">{product.desc}</h4>
        <h1 className="price">${product.price}</h1>
        <div className="colors">
          <h3>Colors</h3>
          <div className="color" style={{ backgroundColor: "red" }}></div>
          <div className="color" style={{ backgroundColor: "black" }}></div>
          <div className="color" style={{ backgroundColor: "blue" }}></div>
          <h3 className="header">Size:</h3>
          <Select items={size} />
        </div>
        <div className="cartDetails">
          <div className="inputCart">
            <AiOutlineMinus
              onClick={handleCount}
              className="cartIcon"
              size={30}
            />
            <Form className="myForm">
              <Form.Group
                className="mb-1 .col-sm-1 count"
                controlId="formBasicEmail"
              >
                <Form.Control
                  min="0"
                  className="count"
                  value={count}
                  type="number"
                />
              </Form.Group>
            </Form>
            <AiOutlinePlus
              onClick={() => {
                setCount(count + 1);
              }}
              className="cartIcon"
              size={30}
            />
          </div>
          <Button className="addToCart" variant="outline-success">
            Add To Cart
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
