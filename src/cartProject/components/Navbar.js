import React from "react";
import { Link } from "react-router-dom";
// import { Grid } from "@mui/material";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import "../components/css/Navbar.css";

const Menubar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_heading">
          <Link to="/home" style={{textDecoration:"none"}}> <h2>Shopping Bag</h2></Link>
         
        </div>
        <div className="navbar_link_container">
          <div className="navbar_link">
            <Link to="/home" className="navbar_link_items">
              Home
            </Link>
          </div>
          <div className="navbar_link">
            <Link to="/cart" className="navbar_link_items">
              Cart Items
            </Link>
          </div>
        </div>
      </div>
      {/* <Grid container>
        <Grid container item xs={12}>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="menubar"
          >
            <Container>
              <Navbar.Brand style={{ fontSize: "35px" }}>
                Shopping Bag
              </Navbar.Brand>
              <Nav>
                <Nav.Link
                  className="item"
                  href="/home"
                  style={{ marginRight: "50px", color: "white" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="item"
                  eventKey={2}
                  href="/cart"
                  style={{ color: "white" }}
                >
                  Cart&nbsp;Items
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Grid>
      </Grid> */}
    </>
  );
};

export default Menubar;
