import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Input from "./components/Input";
import "./Login.css";
const Login = () => {
  const [inputs, setInputs] = useState({
    password: "",
    passwordValid: false,
    userName: "",
    userNameValid: false,
  });

  const handleInput = () => {};
  return (
    <div>
      <img
        className="backImage"
        src="https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <div className="center2">
        <h2 className="accountHeadline">SIGN IN</h2>
        <div className="inputs2">
          <div className="input">
            <Input
              handleInput={handleInput}
              name="name"
              valid="nameValid"
              lable="Name"
              placeHolder="Enter Name"
              type="text"
              errorMessage="Name is Mandatory Field"
              inputType="input"
            />
          </div>
          <div className="input">
            <Input
              handleInput={handleInput}
              name="password"
              valid="passwordValid"
              lable="Password"
              placeHolder="Enter Password"
              type="text"
              errorMessage="Password is Mandatory Field"
              inputType="input"
            />
          </div>
        </div>
        <Button className="buttonSign">Submit</Button>
        <Link className="link">DONT REMEBER YOURE PASSWORD?</Link>
        <Link to={"/auth/signup"} className="link">
          CREATE A NEW ACCOUNT
        </Link>
      </div>
    </div>
  );
};

export default Login;
