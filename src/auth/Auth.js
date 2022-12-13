import React from "react";
import { useState } from "react";
import "./Auth.css";
import Input from "./components/Input";
const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nameValid: false,
    lastName: "",
    lastNameValid: false,
    password: "",
    passwordValid: false,
    password2: "",
    passwordValid2: false,
    email: "",
    emailValid: false,
    userName: "",
    userNameValid: false,
  });
  const handleInput = () => {};
  return (
    <div>
      <img
        className="backImage"
        src="https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <div className="center">
        <h2 className="accountHeadline">CREATE AN ACCOUNT</h2>
        <div className="inputs">
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
            <Input />
          </div>
          <div className="input">
            <Input />
          </div>
          <div className="input">
            <Input />
          </div>
          <div className="input">
            <Input />
          </div>
          <div className="input">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
