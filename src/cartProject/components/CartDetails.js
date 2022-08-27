import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { BsFillCartPlusFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import { REMOVE_TO_CART, INCREMENT, DECREMENT } from "./actions/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import "../components/css/CartDetails.css";
import "../components/css/CartAmount.css";

const CartDetails = () => {
  const getdata = useSelector((state) => state.cartReducer.carts);
  const history = useNavigate();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, settotalQuantity] = useState(0);

  useEffect(() => (getdata.length === 0 ? history("/home") : null));
  const increment = (v) => dispatch(INCREMENT(v));
  const dicrement = (qty) => dispatch(DECREMENT(qty));

  useEffect(() => {
    let price = 0;
    let quantity = 0;
    getdata.forEach((e) => {
      setTotalPrice((price += e.productPrice * e.qty));
      settotalQuantity((quantity += e.qty));
    });
    setTotalPrice(price);
    settotalQuantity(quantity);
  }, [getdata]);

  return (
    <>
      <Grid
        container
        className="cart text cart_grid"
        style={{ marginTop: "0px" }}
        sm={12}
      >
        <div style={{ marginTop: "108px" }}>
          {getdata.map((val) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="cart-details" key={val.id}>
                  <div className=" cart-item ">
                    <div>
                      <img className="cart-image" src={val.productImg} alt="" />
                    </div>

                    <div className="cartItem_details">
                      <h4 className="cart-name">{val.productName}</h4>
                      <p className="cart-para">{val.productPara}</p>
                      <h4 className="cart-product-price">
                        {" "}
                        ₹ {val.productPrice}
                      </h4>
                      <div className="add_less">
                        <div className="less" onClick={() => dicrement(val.id)}>
                          <BiMinus />
                        </div>
                        <div>{val.qty}</div>
                        <div onClick={() => increment(val.id)} className="add">
                          <GrFormAdd />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Button onClick={() => dispatch(REMOVE_TO_CART(val))}>
                        <BsFillCartPlusFill /> <span>Remove To Cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </div>

        {/* --------------------Cart Amount------------------------ */}
        <div className="cart_amount" key={getdata.id}>
          <div className="cart_container">
            <div>
              {" "}
              <h1 className="cart_heading">Price details</h1>
            </div>

            <hr></hr>
            <div className="details">
              <div className="item_amount">
                Price ( {getdata.length} item) ({totalQuantity} Quantity){" "}
                <span>{totalPrice}</span>
              </div>
              <div className="cart_discount">
                Discount <span>0</span>
              </div>
              <div className="cart_coupon">
                Coupons Discount<span>0</span>
              </div>
              <div className="item_delvery">
                delivery Charges <span>Free Delivery</span>
              </div>
            </div>
            <hr></hr>
            <div>
              <h2 className="item_total">
                Total Amount <span>{totalPrice}</span>
              </h2>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default CartDetails;
