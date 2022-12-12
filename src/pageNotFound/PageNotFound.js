import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="centerNotFound"
    >
      <h1>Sorry, Page Not Found.....</h1>
      <Button as={Link} to={"/"} onClick={navigateToHome}>
        Back To HomePage
      </Button>
    </motion.div>
  );
};

export default PageNotFound;
