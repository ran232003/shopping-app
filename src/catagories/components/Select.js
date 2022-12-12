import React from "react";
import { Form } from "react-bootstrap";
import "../CategoryPage.css";
const Select = (props) => {
  const { items } = props;
  return (
    <div className="selectMain">
      <Form.Select aria-label="Default select example">
        {items.map((item, index) => {
          if (index === 0) {
            return (
              <option selected="selected" disabled>
                {item}
              </option>
            );
          } else {
            return <option>{item}</option>;
          }
        })}
      </Form.Select>
    </div>
  );
};

export default Select;
