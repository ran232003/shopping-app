import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./Newsletter.css";
import { AiOutlineSend } from "react-icons/ai";
const Newsletter = () => {
  return (
    <div className="mainLetter">
      <h1>Newsletter</h1>
      <h3>Get timely updates from your favorite products.</h3>
      <div className="inputSection">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Your Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">
            <AiOutlineSend className="inputIcon" />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};

export default Newsletter;
