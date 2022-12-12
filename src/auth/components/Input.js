import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Input = (props) => {
  const { placeholder, name, errorMessage } = props;
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default Input;
