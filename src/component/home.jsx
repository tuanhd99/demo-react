import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";
import { useSelector } from "react-redux";
const Home = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(">>>", state);
  return (
    <>
      <section className="hero">
        <div className="container ">
          <div className="row justify-content-between">
            <div className="col-3">
              <ul className="navbar-social-list list-unstyled">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-9">
              <div className="cart my-3">
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i>Cart (
                  {state.length})
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i>Cart (
                  {state.length})
                </NavLink>
              </div>
              <div className="image">
                <img
                  src="/assets/bg.jpg"
                  className="card-img"
                  alt="Background"
                  style={{ height: "600px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
    </>
  );
};
export default Home;
