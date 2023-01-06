import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mainHome"
    >
      <div>
        <img
          className="backImage"
          src="https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <div className="center">
          <h2 className="accountHeadline">CREATE ACCOUNT</h2>
          <div className="inputs">
            <div className="input">
              <Input
                handleInput={handleInput}
                name="name"
                valid="nameValid"
                lable="Name"
                placeHolder="Name"
                type="text"
                errorMessage="Name is Mandatory Field"
                inputType="input"
              />
            </div>
            <div className="input">
              <Input
                handleInput={handleInput}
                name="lastName"
                valid="lastNameValid"
                lable="LastName"
                placeHolder="Last Name"
                type="text"
                errorMessage="Last Name is Mandatory Field"
                inputType="input"
              />
            </div>
            <div className="input">
              <Input
                handleInput={handleInput}
                name="email"
                valid="emailValid"
                lable="Email"
                placeHolder="Email"
                type="email"
                errorMessage="Email is Mandatory Field"
                inputType="input"
              />
            </div>
            <div className="input">
              <Input
                handleInput={handleInput}
                name="userName"
                valid="userNameValid"
                lable="userName"
                placeHolder="user Name"
                type="text"
                errorMessage="user Name is Mandatory Field"
                inputType="input"
              />
            </div>
            <div className="input">
              <Input
                handleInput={handleInput}
                name="password"
                valid="passwordValid"
                lable="Password"
                placeHolder="Password"
                type="password"
                errorMessage="Password is Mandatory Field"
                inputType="input"
              />
            </div>
            <div className="input">
              <Input
                handleInput={handleInput}
                name="password2"
                valid="passwordValid2"
                lable="password2"
                placeHolder="Confirm Your Password"
                type="password"
                errorMessage="Password is Mandatory Field"
                inputType="input"
              />
            </div>
            <div>
              <p className="myText">
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </p>

              <Button className="buttonSign2">CREATE</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Auth;
