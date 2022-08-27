import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartData from "../components/CartData";
import Navbar from "./Navbar";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <>
      <>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<CartData />} />
              <Route path="/home" element={<CartData />} />
              <Route path="/cart" element={<CartDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    </>
  );
};

export default Cart;
