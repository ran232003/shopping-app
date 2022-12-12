import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../hompage/Homepage";
import PageNotFound from "../pageNotFound/PageNotFound";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "../catagories/CategoryPage";
import SingleProduct from "../singleProduct/SingleProduct";
import Auth from "../auth/Auth";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:item" element={<CategoryPage />} />
        <Route path="/product/:title" element={<SingleProduct />} />
        <Route path="/auth/:status" element={<Auth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
