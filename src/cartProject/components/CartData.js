import React from "react";
import data from "../components/Data.json";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux/es/exports";
import "../components/css/CartData.css";
import { ADD_TO_CART } from "./actions/Action";
import { Button, Grid } from "@mui/material";

import Card from "react-bootstrap/Card";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart_data_container">
        <Grid container className="cart text grid_cart_items">
          {data.map((value) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="card_show">
                <Card key={value.id} className=" card-item ">
                  <Card.Img
                    variant="top"
                    src={value.productImg}
                    className="image"
                  />
                  <Card.Body>
                    <Card.Title className="product-name">
                      {value.productName}
                    </Card.Title>
                    <Card.Text className="para">{value.productPara}</Card.Text>
                    <Card.Text className="product-price">
                      ₹ {value.productPrice}
                    </Card.Text>
                    <Button onClick={() => dispatch(ADD_TO_CART(value))}>
                      <BsFillCartPlusFill className="btn_type" />
                      Add&nbsp;To&nbsp;Cart
                    </Button>
                  </Card.Body>
                </Card>
                </div>
                
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default ShoppingCart;
