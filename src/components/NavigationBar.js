import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
const NavigationBar = () => {
  return (
    <>
      <Nav className="justify-content-center navUp" activeKey="/home">
        <Nav.Item>
          <p>amazing deals 50% off on all products!</p>
        </Nav.Item>
      </Nav>
      <Nav activeKey="/home" className="navDown">
        <Nav.Item className="search">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav.Item>
        <Nav.Item className="centerBrand">
          <Navbar.Brand className="brand">SHOPPING</Navbar.Brand>
        </Nav.Item>

        <Nav.Item className="register">
          <div className="rigthNav">
            <Nav.Link eventKey="link-2">REGISTER</Nav.Link>
            <Nav.Link eventKey="link-2">SIGN IN</Nav.Link>
            <Nav.Link eventKey="link-2">
              <AiOutlineShoppingCart size={28} />
            </Nav.Link>
          </div>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavigationBar;
